# Tantra XXX logo construction

1. Draw a diagonal from top left (0, 0) to bottom right (13, 13)
2. Translate a copy one step down and one left, clipping to size ((0, 1), (-1, 0))
3. Repeat 4 more times to obtain 6 lines
4. Join the lines together two by two to obtain 3 45º trapezoids
5. Overlay a mirrored image of the three trapezoids to obtain 3 Xs (x -> 13-x)
6. Fill in the shapes

_Note: SVG Coordonates go from origin (0, 0) top left to bottom right (13, 13)_
_assuming 13x13 grid in this case_

_As the two bars of the X have the same stroke width,_
_there is no need for optical correction._
_However, the final shape could be merged, to allow_
_for subtle rounding on the caps, perhaps also of the diamond-shaped_
_wholes in the intersections (by design, they are squares)._
