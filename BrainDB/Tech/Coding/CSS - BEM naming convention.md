## Representing a block or group
In general, this is just regular hyphenated css naming: 
```css
.stick-man { }
```
## Representing parts of a group
Underscores are used to denote subgroups or components:
```css
.stick-man__head { }
```
## Representing variations
If we want to have two "versions" of something, e.g. a stickman that is a different color, we use two dashes:
```css
.stick-man--red { }
```
Combined with [Representing parts of a group](#Representing%20parts%20of%20a%20group):
```css
.stick-man__head--blue { }
```
## js- classnames
Whenever styles have some relationship with the DOM, i.e. is used in the javascript code somewhere (for example as follows).
```js
const nav = document.querySelector('.site-navigation')
```
We should add `js-` to the beginning of the style.
```js
const nav = document.querySelector('.js-site-navigation')
```