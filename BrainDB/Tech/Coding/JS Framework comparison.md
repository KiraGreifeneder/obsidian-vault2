## React
Pros:
- Lots of packages, libraries, very flexible
- Most used/popular, easy to find documentation or get help on various topics
Cons:
- "Decision fatigue" (what libraries should we use, how should we do this and that)
- Sometimes difficult to understand (e.g. UseEffect)
- Can be overly complicated, lots of code and files

## ~~Angular
Pros:
- Predictable
- powerful CLI (can even generate components, removes some of the repetition)
- Highly opinionated on how to structure a project that will scale well, makes it easier to have clean code/structure
Cons:
- Not as flexible
- Enforces typescript, can be a hassle for newbies (although personally I'd consider it a pro, as it makes code easier to follow)
- Each component usually takes 3 files, which seems even more annoying than react IMO for our usecase
- Tends to have a higher learning curve, have to import many different modules for rather basic tasks

## Vue
Components organized into 3 parts in each file (template, script, style)
Pros:
- Lots of packages, has the most github stars out of all of them
- Powerful CLI, not as powerful as Angular though
- Beginner friendlier learning curve
- smallest runtime
Cons:
- Was designed for prototyping, may be more difficult to maintain a good structure
- Lots of options, overflexibility?

## Svelte
Components organized into 3 parts in each file (template, script, style) similar to Vue
Pros:
- Most liked by developers according to StackOverflow surveys
- Flexible
- Does not ship a runtime / virtual DOM to the browser, unlike the others. Works as a compiler and turns code into plain JS
- Very easy state management with minimal abstractions compared to e.g. React
- Tends to create the cleanest implementations with the fewest lines of code
- Easy to read if you're a newbie that has never used JS before
- Bundle size smaller than react, especially in svelte 5
- known for small server/code footprint
Cons:
- Smaller community, may run into more roadblocks
- ~~May need to learn a little bit about module bundlers (e.g. Rollup), whereas other frameworks will try to abstract that away~~ Vite takes care of this?
- ever so slightly larger runtime than vue, and react

### ~~SvelteKit~~
A framework for building server-rendered web apps with Svelte. might be of interest to us?
- May improve performance as the browser initially receives pre-rendered HTML before hydration

## Personal thoughts
I kinda really want to try svelte, it seems great to work with. If it's the best for the use case? I'm honestly not 100% sure. It's definitely not bad. But it requires much less code than react, which sounds like a dream. Vue is definitely a contender too, it seems to be almost as clean and probably even easier.

## Additional considerations
### 1. Continuing to use Vite
Vite would actually eliminate one of the downsides of svelte, since Vite will take care of the bundling.

### 2. Using Vite standalone?
I think that implementing reactivity and statefulness might take longer. Does Vite provide anything in terms of state management? It might be tedious to do all the event binding and state management manually. Even simple things like lists would require more code? But maybe you can tell me more about what Vite has to offer in that regard. Would we even be able to have components that aren't built in pure JS?

### 3. React or Svelte?
- Understandable, React would look better on my resume too...
- Managing components in svelte shouldn't be too different from react, but it is easier to create global states (comparable to the react contex API)
	- Global stores, stateful variables that can be accessed from anywhere within the component tree
- Sveltekit: we could use it for routing and turn of SSR, although if we're trying to keep server-side stuff separate it's probably not a good idea anyways.

### 4. Component library
- Can use Flowbite Svelte
- Because the library uses tailwind (and we will use tailwind too obv), the code structure is simplified further (the \<style> part of svelte components is no longer necessary)

### 5. Other things
- Flowbite Svelte has a Charts plugin (?), they look very nice. We could use that for some of the data visualization stuff.
- Lots n lots of features

### 6. No sveltekit and preact
- just looked at preact
- preact's approach was actually inspired by svelte and solid.js, which also compile to real DOM nodes
- If I undersood correctly it's just react but optimized, and requires a minimal amount of additional code. Does have its own component for optimized lists though

