```table-of-contents
```
## Questions
- Z-fighting
- How I implemented my textures
- How do texture coordinates work
- Filter, wrap, linear and repeat (what are filter and wrap?)
- Where are those texture mapping functions defined
	- (In rendertexturetoimage, vs and fs)
- Camera animation: what is varying and where it is implemented
- What is the framebuffer + depthbuffer
- deltatime
- light animation

## Answers
### Z-fighting
- Usually caused by low precision or rounding errors
- Unable to detect if a fragment is in front or behind another, they're both effectively the same distance from the camera
- Especially the case if we have objects that are far away, as we may lack the precision to still display lots of items close to the camera properly
### Texture mapping implementation
**initRenderToTexture()**
- initializing the framebuffer (this is what we read our texture into)
- initialize renderTargetColorTexture, which stores color information of the rendered scene.
- initialize renderTargetDepthTexture, which stores the distance from the camera for each pixel, and attached to the framebuffer as the depth attachment

**renderToTexture()**
- bind framebuffer to draw the scene into the texture
- set up the viewport (the image we see)
### How do texture coordinates work?
- We provide texture coordinates for every vertex
- provide x,y coordinates for each vertex where x,y (or rather s,t) is a coordinate within a texture that should be mapped to the vertex. i.e. x,y,x,y,x,y for a triangle
- in our code, written in u_texcoord, passed to fs through varying in vs

### Filter and Wrap
1. **Nearest-Neighbor Sampling (Zeroth-Order Filter):**
- Nearest-neighbor filtering selects the pixel value from the texture that is closest to the texture coordinate.
- It’s simple and fast but can lead to blocky or pixelated results, especially when scaling textures.    
- Imagine zooming in on a low-resolution texture – it would appear jagged due to the abrupt pixel transitions.

1. **Linear Filtering (First-Order Filter):**
- Linear filtering considers neighboring pixels and interpolates their values to determine the output pixel color.
- When scaling textures, it blends nearby pixels, resulting in smoother transitions.
- For magnification (scaling up), linear filtering averages the four nearest texels.
- For minification (scaling down), it interpolates between adjacent texels.
- Linear filtering strikes a balance between quality and performance.

What they probably mean:
- mipmapping: downscales textures based on distance from camera
- anisotropic filtering: also stores textures skewed for differend viewing angles.

**Clamp (or Border) Wrapping:**
- In clamp wrapping, the texture coordinates are clamped to the range \[0, 1].
- Any texture coordinate outside this range is set to the nearest valid value (either 0 or 1).
- This prevents textures from repeating beyond their original boundaries.
 **Repeat Wrapping:**
- In repeat wrapping, the texture repeats indefinitely across the surface.
- When a texture coordinate exceeds the \[0, 1] range, it wraps back to the opposite side.
- Repeat wrapping is useful for creating seamless patterns or tiling textures

### Frame/depth buffer
The **framebuffer** is a crucial concept in computer graphics. It represents the area in memory where the final image is composed before being displayed on the screen. Framebuffers can have several attached buffers, including a **color buffer** (for storing pixel colors), a **depth buffer** (for depth testing).

The **depth buffer**, also known as the **Z-buffer**, is used for **depth testing**. It stores the depth value (distance from the viewer) for each pixel in the scene. When rendering 3D objects, the depth buffer helps determine which pixels are visible and which are occluded by other objects. For example, if a closer object obscures a farther one, the depth buffer ensures that only the visible pixels are drawn

### Texture unit
Performs sampling for a texture (gets color from exture at coordinates)

### Shadow Mapping
- Need two render passes
- One render from the perspective of the light source into the texture
	- Here we store the depth everything in the scene -> depth map
- One render from the perspective of the camera
	- If a fragment that we can reach from the camera is further away from the light than stored in the depth texture, it is in shadow, i.e. there is an object between the camera point and the light.
	- Take any point from camera, connect fragment to light
	- See if that connection is larger than stored in depth map

