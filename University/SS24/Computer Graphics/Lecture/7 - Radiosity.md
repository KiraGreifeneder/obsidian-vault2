---
default_text: "true"
default_file: _attachments/CG_Radiosity.pdf
default_scale: "0.65"
default_dpi: "1"
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Computer Graphics/Lecture]]"
completion-status: Complete
---
---
```slide-note
page: 3
```
- ray tracing is great for hard shadows, reflections etc
- bad for scattering, diffuse effects and inter-reflections (when things are mainly illumi-nated by indirect light which bounces a lot/light scattering).
- Indirect light is calculated very well using radiosity
```slide-note
page: 16
```
- Based on the principles of heat transfer, mainly used for indoor scenes
- Scene is divided into patches, from the object surfaces to the light sources
- Transfer of light energy is computed patch by patch, result is later interpolated
- Computed in object space instead of eye space
```slide-note
page: 17
```
We look at how these patches are angled towards each other, and therefore how much light is transferred from one patch to another. 
```slide-note
page: 19
```
The Nusselt Analog.
To make this efficient, we take the average of all the calculated factors from the double integral ($\frac{1}{A_i}$). 
$V_{ij}$ is a binary value determining whether or not an object is inbetween the patches, i.e. if it is occluded. If it is occluded, no light is transferred.
```slide-note
page: 21
```
Area sampling is similar to Hemicube but more accurate
```slide-note
page: 23
```
There's a chicken and egg problem with radiosity. The patches can keep transferring energy to each other back and forth, but how often do we do this? It is a recursive problem.

The radiosity of $A_i$ is computed using the light it emits (if it is a light source, otherwise 0), added to the received amount of light from all other patches. R models the light that is absorbed/reflected.

The problem that B, the unknown, is on both sides of the equation, and it's not the same B. For every patch. 

We can solve this using the Helmholtz reciprocity: $F_{ji}dA_j=F_{ij}dA_i$ -> the formfactor is the same in both directions. Therefore we can replace the $F_{ji}A_j$ with $F_{ji}A_i$, and we end up with $A_i$ throughout the entire equation, making it cancel out. This leaves us with linear equations for all of the surface patches.
```slide-note
page: 24
```
What we've created is one big system of equations, which we can solve (iteratively).
There are different methods for solving this system.
```slide-note
page: 25
```
Gathering
- Every patch is represented by one row in the matrix
- To update one patch in terms of radiosity (one bounce), you gather the amount of radiosity that comes in from each sending patch (very right matrix).
- You repeat this for every receiving patch, and the replace the sending patch with the receiving patch
- Continue until there is no big difference between the two

Shooting
- Instead of calculating how much one patch receives from all others, we calculate how much a patch shoots/sends to all other patches.
- In one iteration, we pick a shooting patch (right side matrix), and update it using the left hand side matrix. 
- Swap the vectors again after each step until they converge on the same values
```slide-note
page: 26
```
The Neumann Series lets us approximate the results of these matrices. This is especially useful if you're only interested in the first n bounces etc., and faster than solving the gathering and shooting numerically.
- Each term of the Neumann series represents a light bounce.
- I is the light source, contribution, if it is one.
- A is the light source plus the first bounce
- A^2 then adds the second bounce and so on...
```slide-note
page: 27
```
This lets us decide how big our patches should be.
- While we are doing our patch iterations, we can change their sizes in each step
- Edges of shadows need high resolutions
- if there are a lot of changes between patches, can make them smaller, if there are still big changes, make them even smaller... ?
- Can be done using triangles/meshes too
```slide-note
page: 31
```
Every patch is 2 triangles ->  use area sampling -> iterative solving of the equation system -> interpolation, blending

