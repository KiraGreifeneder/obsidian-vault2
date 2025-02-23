---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/SS24/Computer Graphics/Lecture]]"
completion-status: Complete
---
```table-of-contents
```
## Marching Cube Method
This is part of topic 8 - Volume rendering, and has to do with the extraction of Isosurfaces. 
- We want to find out which voxels of our model are at the surface
- Have a user-defined threshold to determine at what point a voxel is counted as being "being on the surface"
- Traverse the volume cube by cube 
- There are 15 possible ways unique ways for the vertices to be split up between the "inner" and "outer" side of the voxel
## Splines
- Splines give us control points with which we can model and animate complicated surfaces.
- The surfaces are then computed through interpolation (we then call them spline surfaces)
- Our interpolation functions are no longer linear because of this

Uniform cubic B-Splines
- Allow for local modeling
- have a base set of curves and we just combine these shifted curves to the the cruve we want
- More efficient for higher orders, and cadn have any number of control points
## Interpolation in Data Visualisation (Trilinear Interpolation)
Trilinear interpolation shows up in Topic 8 and 9.
Using a grid, we can use linear basis functions for interpolation
- For example, trilinear inerpolation, where we interpolate in a cube-like cells which are defined by 8 vertice
- We depend on the cell type.

For 2d interpolation, we need two parameters -> two functions
For 3d interpolation, we need three params -> three functions -> trilinear interpolation

Trilinear interpolation leads to less aliasing,
## Eigenvalues
For a Tensor, the eigenvalues represent the point of least and most curvature of an obejct. That way we can determine what kind of object it is.
- The third eigenvalue is always zero

If the eigenvalues of a diffusion tensor are similar (i.e., approximately equal):
- This implies that the diffusion is nearly isotropic (similar in all directions).
- The diffusion ellipsoid (defined by the eigenvectors) becomes nearly spherical.
The eigenvectors are always orthogonal, no matter the eigenvalues.
## Heirarchical rigid body transformations
use scene graph nodes and apply transformation matrices to them. But we cannot do rotations, only translations, as the matrix coefficients aren't linearly independent.
- because the rotation matrix must fulfill certain constraints (columns or rows must be orthogonal to each other -> not linearly independent), interpolation may violate these and therefore lead to invalid rotation matrices. 

A solution to this is using Quaternons.
### Forward and Inverse Kinematics
Forward kinematics is when we move top-down through our tree of nodes. e.g. we move the shoulder, which rotates and translates all the nodes below it (arm, hand) accordingly. We only need to traverse.

Inverse kinematics is when we start at the bottom of our tree and solve equation systems for computing the positions of the upper nodes to allow for the transformation/position of the lower node (e.g. move hand, and arm moves to a position that allows for the hand to be there)
## Shooting and gathering
This topic is part of 7 - Radiosity. 

Gathering: for each patch, calculate how much the patch is receiving from all others, update own patch
- Every patch is represented by one row in the matrix
- To update one patch in terms of radiosity (one bounce), you gather the amount of radiosity that comes in from each sending patch (very right matrix).
- You repeat this for every receiving patch, and the replace the sending patch with the receiving patch
- Continue until there is no big difference between the two
- O(n^2) e.g. Jacobi
Shooting: For each patch, calculate how much the patch is sending to all others, update other patches
- Instead of calculating how much one patch receives from all others, we calculate how much a patch shoots/sends to all other patches.
- In one iteration, we pick a shooting patch (right side matrix), and update it using the left hand side matrix. 
- Swap the vectors again after each step until they converge on the same values
- O(n^2) e.g. Southwell

direct methods have a complexity of O(n^3)
## Formfactors
Form factors are a measure of the fraction of energy leaving one surface and arriving at another surface. 

The form factors are calculated by sampling and integratingunit areas, i.e. integrating over the areas of the srufaces involved.

They are also dual in direction, mirroring the fact that the energy exchange between to surfaces is always bidirectional. (Helmholtz reciprocity -> end up with a system of linear equations for all of the surface patches.)
## Ray-casting for volume rendering
- Only one ray is cast in one direction, i.e. primary rays only

We also need to align the volume with the image plane to do this, which could entail transforming the voxel grid (volume) or inversely transforming the rays themselves.

If we don't do this, we might have the following issues:
- the rays will intersect the volume grid in an irregular pattern/intervals, making it difficult to sample the volume data accurately. The sampling points wouldn't be spaced out properly, but become further apart as the grid faces away. (if i understood that correctly, idk)
- interpolation would become more complex.
## Data Representation
The type of field used influences the content
- e.g. scalar field, vector field, tensor...
The type of grid used influences the sampling
- Especially influences the complexity of the sampling depending on the spacing of the grid (regular, irregular...)
The type of cell used influences the interpolation function (e.g. cube, square, triangle)
## Keyframe Interpolation
Same as any other 2d/3d interpolation, Usually trilinear as we are working with 3d
For translations, the matrix rows/columns are linearly independent.
## Global vs. Local shading
Local shading: 
- only considering light source directly
- shadow/environment mapping

Global shading:
- ray tracing and radiosity
- also considering indirect lighting, scattering, refraction etc.
- For local shading, the more triangles, the more we need to compute
- Ray tracing doesn't scale with the number of triangles, but is computed pixel by pixel -> resolution of image/frame buffer matters
## Progressive Radiosity
In progressive radiosity, we calculate bounce by bounce using the Neumann Series (each term of the series is a bounce)

As we calculate each term, the overall brightness increases they converge on their values.

While we are doing our patch iterations, we can change their sizes in each step
- Edges of shadows need high resolutions
- if there are a lot of changes between patches, can make them smaller, if there are still big changes, make them even smaller... ?
- Can be done using triangles/meshes too
## Hyper-Streamlines
Stream tubes can be eused for encoding eigenvalues, and are constructed in the **major** eigenvector field.

basically, we just create a bunch of elliptical cross/sections using the 3 eigenvectors (ellipses in 3d space). That creates a tube with varying levels of thickness.

For every two ellipses the radii are scaled to each other using the **medium and minor** eigenvalues

These tubes are the hyper-streamlines
## Quaternions
Quaternions allow us to rotate around ANY axis, not just x,y,z etc. like matrices. 
- No need to calculate the product of multiple rotation matrices 
- Can interpolate Quaternions

They are defined by an imaginary vector and a real vector.

the terms are not independent, but they can be interpolated spherically (spherically linear interpolation)
## Free-Form Deformation (FFD)
- Use a grid that we can deform
- Object vertices are then deformed according to those grid deformations
- Efficient as the coordinate grid can have a much lower resolution
## Isolines/surfaces
Marching squares leave you with iso lines, basically just an outline. Same as a slice of an isosurface
Marching cubes -> isosurface
## Orthogonal Eigenvectors of a Tensor Matrix
The eigenvectors of the tensor matrix are always orthogonal.
The number of eigenvectors depends on the dimensions of the tensor matrix: 3x3, 3. 2x2 -> 2
## Bezier Curves
For Quadratic Bezier curves
- start with a rectangle and 3 control points
- cut away a corner
- keep cutting away the corners we create from cutting corners (recursively)
- The resulting curve is that of a quadratic expression 

Higher order Bezier curves
- More control points
- The degree of the bezier curve is always one less than the number of control points (4 control points, cubic expressions)

For surfaces, these control points are simply in a 3d space

