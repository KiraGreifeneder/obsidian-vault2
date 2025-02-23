---
default_text: "true"
default_file: _attachments/CG_Volume_Rendering.pdf
default_scale: "1"
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Computer Graphics/Lecture]]"
completion-status: Complete
---
---
Volume rendering is very popular in the medical field, but also some realtime games...

```slide-note 
page: 3
```

Volumes are made up of voxels, which is one unit of content in the 3D grid. We can calculate the contribution/light absorbtion for each voxel as a ray of light passes through it. We can therefore compute the color of a voxel very finely.

```slide-note 
page: 10
```

A typical application. You measure how much of the x-ray radiation goes through the sample.
- To see at what points in the object rays get absorbed, we need to take lots of measurements from different angles.

```slide-note 
page: 11
```

We are left with an image stack that can be alpha blended. But only displaying it image by image leaves us with only one perspective, so we need volumetric rendering.

```slide-note 
page: 13
```

Need interpolation functions to connect the voxels of data.-
- For 2d we need two parameters for interpolation
- For 3d we now need 3 parameters -> trilinear interpolation

```slide-note 
page: 14
```

Each linear equation in this is an interpolation along one line/axis/dimension, plugging each result into the next equation. 
- Can be used for RGB values and pretty much anything
- Nearest neighbor interpolation is another option and easier, just picks the nearest voxel and copies those values. Has more artifacting

```slide-note 
page: 16
```

- Cast a ray from camera through the volume for every pixel on the screen
- absorption coefficients (alpha) and colors from the voxels on the ray are accumulated
- keep applying the equation with every voxel to find the color $c=\alpha c_{f}+ (1-\alpha)c_b$ where $c_f$ is the color of the foreground and $c_b$ is the color of the background. 

Image-Order rendering depends highly on the number of pixels on the screen (just like ray tracing). For volume rendering, this is ray casting.

```slide-note 
page: 17
```

We have another issue: the volume needs to be aligned with the image plane with the desired perspective before we can shoot the rays through it. Possibilities for doing this are:
- Volume transform (warping the entire voxel grid in 3d)
- Ray transform (inversely transforming the rays)

```slide-note 
page: 18
```

We can choose how many samples we want along our ray, then we look at what voxels these correspond to.
- We can do this in uniform sampling intervals
- But we can also do this non-uniformly, by checking if there are a lot of changes within a "cell"

```slide-note 
page: 19
```

Here the complexity is the number of voxels, not the image resolution.

```slide-note 
page: 20
```

Grouping of cells to reduce the amount of data we need to store. Our sampling grid becomes much simpler.
- Great for ray casting

```slide-note 
page: 21
```
![[_attachments/Pasted image 20240620141615.png]]

We COULD project every voxel to our image plane
- Problem is, the voxels need to be large/we wouldn't be mapping every voxel because the rays wouldn't hit all of them
- This can be solved with splatting -> increasing each voxel's footprint

```slide-note 
page: 23
```

Another way to do volumetric rendering is texture-based rendering. 
- Using geometric proxies/transforming/orienting the slices in the right way to be perpendicular to our rendering direction allows it to work, along with alpha blending. That is supported by any standard GPU.
- 3D texture mapping

```slide-note 
page: 24
```

You can get phong shading even though there are no surfaces by computing normal vectors for each one

```slide-note 
page: 27
```
![[_attachments/Pasted image 20240620144033.png]]

How do we get surfaces in volume rendering?
- We could define what voxels are "at the surface" by calculating threshholds
- This is called "marching cube"
	- We separate all points into two classes: above or below the threshhold.
	- Then we can split the voxel then by interpolating where on the edges the line should go through.
	- Check with the next cell if the interpolated point/direction of the line matches.
	- Keep marching through the entire grid

```slide-note 
page: 28
```

 There are 15 unique cuts through the cube that are possible.