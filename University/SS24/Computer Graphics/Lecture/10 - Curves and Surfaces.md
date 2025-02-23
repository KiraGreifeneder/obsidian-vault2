---
default_text: "true"
default_file: _attachments/CG_Curves_and_Surfaces.pdf
default_scale: "1"
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Computer Graphics/Lecture]]"
completion-status: Complete
---
---
everything because i was falling asleep ngl
```slide-note 
page: 10
```

Linear interpolation is a curve - what we know so far. 
- If the control points are sparse, the precision will be very low/the approximation will be inaccurate
- Not great for triangle meshes because it becomes slow as we scale up the precision/have more triangles

```slide-note 
page: 16
```

Our interpolation functions change - no longer linear!
We can approximate the curves on a surface - this is how you can modify/model efficiently too

```slide-note 
page: 18
```

Control points are the points where we intersect our rectangle in this case, + the middle point of that segment.
- We then find new control points further along the side of the rectangle connected to the midpoint, and find the new midpoint of that segment. 
- This is done recursively until we've reached our desired level of precision. 

```slide-note 
page: 20
```

3 control points: quadratic Bezier curve
4 control points: cubic Bezier curve

This doesn't allow for local modeling though, because of the interpolation function... can't just completely change a single curve to what we want

```slide-note 
page: 21
```

The order of the interpolation equation is always the number of control points -1. 

```slide-note 
page: 24
```

B splines allow for local modeling
