# How to write your notes
## Markdown basics
Markdown allows you to quickly and intuitively mark up your text, using a plain text editor. Not only is the resulting document perfectly human-readable, machines also have no trouble translating it into a presentation format such as `HTML` (assumed in this guide).

To add _emphasis_ to your text, surround it with underscores:

- \_emphasis\_ `->` _emphasis_

Use two underscores for __strong__ text:

- \_\_strong\_\_ `->` __strong__

Finally, use three underscores to combine ___strong and emphasis___:

- \_\_\_strong emphasis\_\_\_ `->` ___strong emphasis___

Text surrounded by backticks will be rendered as `code`:

- \`code\` `->` `code`

.note: If you want to print the literal underscore (or any other reserved character), escape it with a backslash character:

- \\\_underscore\\\_ `->` \_undescore\_

We have scratched the surface here. This guide will focus on special features of this extension.
For the complete Markdown reference, visit [this resource][md_home].
[md_home]: https://daringfireball.net/projects/markdown/syntax
TODO: add a postprocessor which sends external links to target="_blank"

## Arrows and wingdings
The beautiful [`Fira Code`](https://github.com/tonsky/FiraCode) font superpowers font ligatures to display different kinds of arrows.

For example, -> becomes `->`, => becomes `=>`, != will be output as `!=`, etc.

All you have to do is enclose your "arrow" in backticks (`).


## `MULTMD` Markdown Extension
This custom extension adds support for twodot delimiters (`. .`)

### Adding a `class` or an `id` attribute to a line of text
TODO: _yet to implement this feature._ (and I don't yet like the syntax)

Start a new line with space-separated `.<valid_class1_name> <valid_class2_name> #<valid_id_name>` and end with a colon.

- Input: `.note warning #message-5: This is my message for you.`

The corresponding `html` element's attribute list will now contain `class` and `id` attributes.

- Output: `<p id="message-5" class="note warning">This is my message for you.</p>`

If you only want to set an `id`, start a new line with a dot so as not to clash with `# Heading` syntax: `.#msg-6`.

Your elements will then be easy to select in a stylesheet, which will define their appearance in a presentation format.

### Adding sections
To start a new section block, put

`. <section_name> .`

on a new line

- if `section_name` corresponds to an html block-level tag (`main, section, nav...`), it will produce this element with (optionally) a class of the same name. Other classes and an id may follow.
- otherwise, a `div` element will be produced with the class of section_name
- finally, should you have a sensible reason to break the web semantics, and have a `<div class="main">` element, use `div` as the first keyword. (The output will be `<div class="div main">` though.)

The block must be closed with

`.       .` or `. <any text> .`

on a blank line (typically "`. end <section_name> .`" for better legibility, but this is not required).

To add or not to add?
Support for sub-sections is currently not implemented.[^bnlols]

[^bnlols]: Note that it might expose your system to [Billion Laughs](https://en.wikipedia.org/wiki/Billion_laughs_attack) attacks.

#### Example with `main`

`. main feature #feature-21 .`

`This is our new article.`

`. end main .`

will produce:

    <main id="feature-21" class="main feature">
        <p>This is our main article.</p>
    </main>

#### Example with `div`

`. special_feature #feature-22 .`

`This is our new article.`

`. end special_feature .`

will produce:

    <div id="feature-22" class="special_feature">
        <p>This is our special feature.</p>
    </div> <!-- end of special_feature div -->

Note: The uniqueness of `id`s is not tested. Make sure all `id` attributes are unique in any document.


### Instruction blocks
TODO: _yet to implement this feature._ (block is already parsed)


`. pass: .`<br />
`This is a fenced block`<br />
`. end instruction    .`<br />

It will be output as follows:

. pass: dragon .
This is an instruction block
. end div .


## Using MathJax's ASCIIMath
[ASCIIMath](http://asciimath.org/#gettingStarted) is a simple language for typesetting mathematics. It uses [MathJax](https://docs.mathjax.org/en/latest/index.html) to typeset your math expression.

The expressions are delimited by $&#8203;`->` and `<-`&#8203;$,[^dollar] for example, $&#8203;`->` [[x, y, z], [a, b, c], [0, f(epsilon), 5]] `<-`&#8203;$ will output:
$->[[x, y, z], [a, b, c], [0, f(epsilon), 5]]<-$

You can do quite a lot with this simple language. For example,
typing $&#8203;`->` f(a) = 1/(2pii) oint_gamma f(z)/(z-a)dz `<-`&#8203;$ will output:

$-> f(a) = 1/(2pii) oint_gamma f(z)/(z-a)dz <-$

For more information, check out [this tutorial](http://practicalseries.com/1001-webdevelopment/22-03-equations.html).

Woraround: to output the literal $&#8203;`->`, place a zero-width space ($`&#8203;`->) after the $ sign, otherwise MathJax will interpret them as a delimiter of an expression.
I have modified the original behaviour. In fact, MathJax's default delimiters are backticks (\`), which are more likely to appear in text than thr dollar arrows. Note that MathJax renders mathematics after the webpage is rendered, so you cannot really escape a character. I may eventually set it up to only target certain elements, but for the moment the entire page is considered. I don't think it likely to use "dollar-arrows" in any other context though.

[^dollar]: Donald Knuth, who invented the <span class="texhtml" style="font-family: &#39;CMU Serif&#39;, cmr10, LMRoman10-Regular, &#39;Latin Modern Math&#39;, &#39;Nimbus Roman No9 L&#39;, &#39;Times New Roman&#39;, Times, serif;">T<span style="text-transform: uppercase; vertical-align: -0.5ex; margin-left: -0.1667em; margin-right: -0.125em; line-height: 1ex;">e</span>X</span> typesetting system, explained in a jest that he chose the dollar sign to indicate the beginning and end of mathematical mode in plain <span class="texhtml" style="font-family: &#39;CMU Serif&#39;, cmr10, LMRoman10-Regular, &#39;Latin Modern Math&#39;, &#39;Nimbus Roman No9 L&#39;, &#39;Times New Roman&#39;, Times, serif;">T<span style="text-transform: uppercase; vertical-align: -0.5ex; margin-left: -0.1667em; margin-right: -0.125em; line-height: 1ex;">e</span>X</span>  because typesetting mathematics was traditionally supposed to be expensive.

### The Grammar
Here is a definition of the grammar used to parse AsciiMath expressions. In the Backus-Naur form given below, the letter on the left of the ::= represents a category of symbols that could be one of the possible sequences of symbols listed on the right. The vertical bar | separates the alternatives.

    v ::= [A-Za-z] | greek letters | numbers | other constant symbols
    u ::= sqrt | text | bb | other unary symbols for font commands
    b ::= frac | root | stackrel | other binary symbols
    l ::= ( | [ | { | (: | {: | other left brackets
    r ::= ) | ] | } | :) | :} | other right brackets
    S ::= v | lEr | uS | bSS             Simple expression
    I ::= S_S | S^S | S_S^S | S          Intermediate expression
    E ::= IE | I/I                       Expression

