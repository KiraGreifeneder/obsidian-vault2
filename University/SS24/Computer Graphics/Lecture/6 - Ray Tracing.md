---
default_text: "true"
default_file: _attachments/CG_Ray_Tracing.pdf
default_scale: "1"
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Computer Graphics/Lecture]]"
completion-status: Complete
---
---
```slide-note 
page: 4
```
Local shading: 
- only considering light source directly
- shadow/environment mapping
Global shading:
- ray tracing and radiosity
- also considering indirect lighting, scattering, refraction etc.
```slide-note
page: 8
```
- For local shading, the more triangles, the more we need to compute
- Ray tracing doesn't scale with the number of triangles, but is computed pixel by pixel -> resolution of image/frame buffer matters

How does it work?
- We look at rays going from camera through the image/each pixel
- We see what objects that ray hits. We can then look at the normal vector of that fragment and see if that ray should bounce etc. based on the material properties. 
- We do this until our trace reaches the light source again
- This means we are simply inverting the path the light took from the source to the camera. It comes down to the same result.
- Additionally, we look at how much light we lose on the way (each bounce + mat. props)

Exit conditions:
- hitting light source
- path becomes too long (never hits light source, no light at that pixel)

```slide-note
page: 12
```
Viewing rays/primary rays are the first vectors going from the camera through each pixel - before any light bounces.

$p(t)=e+t(s-e)$ computes any point along our vector (that goes from e to s).
- we need this so we can figure out where our ray intersects scene objects.


```slide-note
page: 13
```
Now we just need an equation to describe our object, in this case a sphere. 
- plug this into our main equation
- solve for t
- $\pm$t is the point along the vector where our array intersects the object - choose the value closer to the camera
```slide-note
page: 14
```
with triangles, we end up needing 3 equations to figure out if the ray is going through the plane of a triangle, etc..
```slide-note
page: 17
```
Shadows are actually really simple with ray tracing - just need to create a ray from fragment to light source, and if an object is in the way (ray is occluded), it is in shadow.
```slide-note
page: 18
```
Soft shadows aren't much different. Even though they're a bit tricky with local illumation and shadow mapping, we can just spawn lots of secondary rays, distributed across the area of the light source. The smaller the light source are that we can cover is, the darker the shadow.
i.e. you average the feedbacks
```slide-note
page: 19
```
Reflections are also simpler.
- Use the normal vector at the intersection point
- calculate the incoming and outgoing agnle
- see what the outgoing ray hits and keep reflecting/determine color if it hits non-reflective items.
Unlike cube mapping, which is only a correct reflection for the center of the object, this produces the correct reflection for the actual surface.
```slide-note
page: 20
```
- apply snell's law of refraction
- we have incoming vector/angle of light, and can see in what direction the secondary light ray should go after going through the object.
- Can even simulate lens effects with that
- Can also simulate depth of field effects
```slide-note
page: 21
```
Combination of these
- Just throw out lots of random rays + those around the light source
- reflective but not mirror-like materials can be done by not only tracing one ray, but a distribution of rays around that ray -> diffusion.
This makes things become slow though, as each bounce produces many more rays -> number of traces can increases exponentially for each ray.
```slide-note
page: 24
```
Can calculate ray tracing in both directions, some things look better or are faster.
- Ray tracing is not effecient for soft effects (diffuse surface, scattering, color bleeding)
  -> that's what radiosity is good at, so we can combine them!
```slide-note
page: 25
```
To speed up ray tracing:
- do parallel processing
- use special data structures
```slide-note
page: 26
```
- grouping triangles together increases performance

```slide-note
file: Computer Graphics/_attachments/CG_Ray_Tracing.pdf
page: 28
```
We can test against these 3d cells before testing for the triangles in them
