---
default_text: "true"
default_file: _attachments/CG_Basics_of_Animation.pdf
default_scale: "1"
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Computer Graphics/Lecture]]"
completion-status: Complete
---
---
```slide-note 
page: 6
```

Each keyframe is a set of parameters at a certain point in time
- Using those keyframes, we want to find frames inbetween them (interpolating them) to create a smooth animation
- Can use linear interpolation, but that often doesn't produce the desired effect (may look unnatural)
- Keyframes aren't j ust verteces, but lots of control points, and we can use splines

```slide-note 
page: 9
```

Use scene graph nodes for animation - we can apply transformation matrices to them

But interpolating these transformation matrices gets difficult.
- translations work, but rotations don't, because the matrix coefficients aren't linearly independent

```slide-note 
page: 10
```

Quaternions allow us to rotate around ANY axis, not just x,y,z etc. like matrices. 
- No need to calculate the product of multiple rotation matrices (matrix R would suck for rotations)
- Can interpolate Quaternions

```slide-note 
page: 11
```

Forward kinematics
- Basic
- Transform each joint individually

Inverse kinematics
- e.g. the arm and shoulder joints move according to how the hand is moved
- Connected joints adjust to each other based on their movement


```slide-note 
page: 14
```

Only manipulate splines/control points from keyframe to keyframe, and then re-calcualte all the vertices from that.


```slide-note 
page: 17
```

Just need to make sure that vertices are on the same plane and connect at the seams.

