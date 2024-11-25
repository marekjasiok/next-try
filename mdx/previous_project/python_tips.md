### Using `list.append()` vs. `list.extend()`

    a1 = [1, 2]
    a2 = [1, 2]
    b = (3, 4)

    a1.extend(b)
    print(a1)
    -> a1 = [1, 2, 3, 4]

    a2.append(b)
    print(a2)
    -> a2 = [1, 2, (3, 4)]

### The . dot operator

Two built-in functions control attribute access `object.attr`

- `__getattribute__` is called on every attribute lookup
- `__getattr__` controls what happens if the attribute is not found

To avoid infinite loops, use `super().__getattribute__` when overriding this function.

### Listing directories
The traditional way (platform-dependent):

    import os

    def get_files(path):
        for file in os.listdir(path):
            if os.path.isfile(os.path.join(path, file)):
                yield file

However, "using `scandir()` instead of `listdir()` can significantly increase the performance of code that also needs file type or file attribute information, because `os.DirEntry` objects expose this information if the operating system provides it when scanning a directory." ([Python reference](https://docs.python.org/3/library/os.html#os.scandir))

Finally, there is [`pathlib.Path`](https://docs.python.org/3/library/pathlib.html), a platform-independent abstraction.

    from pathlib import Path
    p = Path('./data/output/html/assets/img')

    print(list(p.iterdir()))

It can be used to open files:

    with p.open() as f: f.readline()

The slash operator helps create child paths:

    p / 'flow' / 'ready'
    -> './data/output/html/assets/img/flow/ready'

- `p.parts()` splits the path into its parts
- `p.name` returns the filename or `''` for a directory
- `p.iterdir` returns an iterator for a given path (`print(list(p.iterdir()))`)
