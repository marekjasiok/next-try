# Projecting 3-D cube to 2-D
A projection is a dimensiality reduction.
The matrix

```
$->P = [ [1, 0, 0],
         [0, 1, 0],
         [0, 0, 0] ]<-$
```

will align all points in z on the projective plane, ignoring this dimension.
(Side view of a cube will look like a square.)

### tau vs pi
I'm using tau rather than pi. You may say that it will hinder you
while reading others who did not choose to use it.
But the conversion is sraightforward: you just double the denominator
to fall on a fraction of a circle. And that's what you were probably
already doing with pi, to make any sense of it.
Indeed, pi / 2 reads 'quarter circle' (tau / 4).

## Cabinet projection
The cabinet projection has a 45º angle and z-axis foreshortening of &frac12;.
(explain what are alpha and beta)
(explain Möbius's point-at-infinity trick)
The points are given by multiplying the matrix

```
$->P = [ [1, 0, -cos alpha / tan beta, 0],
         [0, 1, sin alpha / tan beta,  0],
         [0, 0,           0,           0],
         [0, 0,           0,           1] ]<-$
```

by a vector

```
$-> v = [[v_x],
         [v_y],
         [v_z],
           [1] ] <-$
```

In case of a cabinet projection, alpha = 63.4º, beta = 45º
tan(63.4º)           = 2
cos(45º) = sin(45º)  =  .7071
Therefore, our coefficients are -.3536 and .3536

```
$->P = [ [1, 0, -.3536,  0],
         [0, 1,  .3536,  0],
         [0, 0,      0,  0],
         [0, 0,      0,  1] ]<-$
```

Our cube's vertices are:

```
$->
v1 = (0, 0, 0)
v2 = (0, 0, 1)
v3 = (0, 1, 0)
v4 = (0, 1, 1)
v5 = (1, 0, 0)
v6 = (1, 0, 1)
v7 = (1, 1, 0)
v8 = (1, 1, 1)
<-$
```

Our projected cube is then:

```
$->
v1 = (0.0,     0.0)
v2 = (0.3535, -0.3535)
v3 = (0.0,     1.0)
v4 = (0.3535,  0.6464)
v5 = (1.0,     0.0)
v6 = (1.3536, -0.3535)
v7 = (1.0,     1.0)
v8 = (1.3536,  0.6464)
<-$
```

Edges: v1-v2, v3-v4, v5-v6, v7-v8, v1-v3-v5-v7, v2-v4-v6-v8.
There is an edge from the 'old' vertex (unaffected by the dropped dimension, odd)
to the 'new' vertex (the projected points from the dropped dimension, even).
The original cycle from the first square is 'copied' to the projected shape.

We are done.
If we want to show hidden edges differently, we need also consider the intersections.
