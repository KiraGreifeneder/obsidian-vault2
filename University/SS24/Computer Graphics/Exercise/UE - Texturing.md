- in the video,  `u_tex` refers to the 2d sampler defined in the vertex shader. that name is used by the AdvancedTextureSGNode.
- `varying vec2 v_texCoord` is the varying for the texture coordinates, which are provided for every vertex via a buffer, similar to the vertex position, color and normals. Needs to be passed from vertex to fragment shader
- `texture2D(sampler, texture_coordinates)` looks up the color of a tecture bound to a sampler at the defined coordinates.

## Framework-specific stuff
### What does AdvancedTextureSGNode actually do ???
**constructor**
- takes image and children in constructor. Children are rendered. 
- sets its `uniform` field to `u_tex`, that's the sampler
- `textureId` is -1 until it is initialized with the `init()` function. 

**init()**
- Creates a texture object and sets the texture id from it. it is not activated until `render()` is called.
- Immediately binds the texture unit `textureId` to the texture target, which is basically just the texture type (`gl.TEXTURE_2D`, or could theoretically be cube map, 3d, etc.).
- A bunch of parameters for the appearance are set i guess
- actually does something with the image
- binds null to the 2D target? i guess the binding is only for doing work on it or something? not sure what's going on there

**render()**
- will init() itself if it hasn't been done yet
- assign texture unit to the sampler
	- missing another line like `gl.uniform1i(gl.getUniformLocation(context.shader, 'u_enableObjectTexture'), 1);`?
	- activates and binds the texture again, renders the children, and eventually unbinds it again.

## Da shaders
### Vertex shader
- texture coordinate is passed to the fragment shader: `v_texCoord = a_texCoord;`
- hm
### Fragment shader
- `uniform bool u_enableObjectTexture;` which probably needs to be worked with in the advanced texture sg node
- `v_texcoord`
- define the sampler
- replace or multiply the diffuse and ambient with the `textureColor` in the light calculation func whenever u_enableObjectTecture is active
- in main, if objectexture is enabled, `textureColor = texture2D(u_tex,v_texCoord);` gives the texture coordinates to the sampler and returns a color