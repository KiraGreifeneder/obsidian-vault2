For assignment 4...
## UE Video steps
### main.js
- Set up the lookAtMatrix of the shadow-casting light in renderToTexture
```js
let lookAtMatrix = mat4.lookAt(
   mat4.create(), 
   worldLightPos, 
   worldLightLookAtPos, 
   upVector
);
context.viewMatrix = lookAtMatrix;
```
- Calculate eyeToLightMatrix in render function of the ShadowSGNode
```js
var eyeToLightMatrix = mat4.multiply(
   mat4.create(), 
   this.lightViewProjectionMatrix, 
   context.invViewMatrix
);
```
### shadow.vs.glsl
- calculate shadowMapTexCoord
```
v_shadowMapTexCoord = u_eyeToLightMatrix * eyePosition;
```
### shadow.fs.glsl
- Apply perspective division
```
vec3 shadowMapTexCoord3D = v_shadowMapTexCoord.xyz / v_shadowMapTexCoord.w;
```
- look up depth
```
float zShadowMap = texture2D(u_depthMap, shadowMapTexCoord3D.xy).r;
if(shadowMapTexCoord3D.z > zShadowMap) {

        shadowCoeff = 0.0;

    }
```
