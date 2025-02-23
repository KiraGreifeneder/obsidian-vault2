---
default_text: "true"
default_file: _attachments/CG_Scientific_Data_Visualization.pdf
default_scale: "1"
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Computer Graphics/Lecture]]"
completion-status: Complete
---
---
```slide-note 
page: 9
```

For the visualization of discrete data, we first need to figure out what function we need to use for interpolation

```slide-note 
page: 11
```

Depending on what grid we use, we get different results. Some things can be modeled more efficiently using certain types of grids.

```slide-note 
page: 12
```

What values should we store at each point? A simple value is a scalar field, which can be used in any grid dimension.

```slide-note 
page: 14
```

Can figure out our surfaces similar to how we do it in volume rendering - marching squares. 

```slide-note 
page: 15
```

Marching squares leave you with iso lines, basically just an outline. Same as a slice of an isosurface

```slide-note 
page: 17
```

For displaying vector fields, we can use a different visualization technique.
- We need to decide between seeing the direction, single vectors etc, or the density/form of the vector field. difficult to show both at the same time
- dense sampling: see form and volume
- sparser sampling and grid: see directions well

```slide-note 
page: 21
```

Visualize what the general movement/flow is by connecting vectors that point to each other.

```slide-note 
page: 24
```

Tensors:
- High dimension generalisations of vectors
- Allows us to represent curvature at a point using a 2x2 or 3x3 matrix for every direction the curvature could be coming from
- This can then be used to model the distribution of liquid or something

```slide-note 
page: 27
```

- There are some features we can compute from the matrix -> eigenvectors

```slide-note 
page: 28
```

Eigenvectors can represent the point of least and most curvature!
- Can determine what kind of shape we have
```slide-note 
page: 29
```

```slide-note 
page: 30
```

Using these curvatures we can determine some glyphs to represent different kinds of information! That's pretty dope

```slide-note 
page: 34
```

