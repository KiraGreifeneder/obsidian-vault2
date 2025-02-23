
## Slide 1 (K)
## Slide 2 (K)
## Slide 3 - Structure (E)
Scenario: a completely hypothetical DSL for a network emulator
## Slide 4 - Introduction to DSLs (K)
- We've already had multiple groups explain this today so I'll keep it short
- DSLs are specialized programming languages that cater to a certain domain
	- that means it caters to a certain use case or problem
- The whole idea is to abstract a lot of the things we don't want to be concerned with when creating an application for a certain use case.
- Some well-known examples are Makefile, SQL, etc...
	- could explain what the value is behind Makefile for example, what the GPL alternative would be i guess
## Slide 5 (K)
## Slide 6 (K)
...

## Slide 7 - What is Rust? (1) (E)
- for all of you who have been living under a rock:
- Rust is a compiled, memory safe, multi-paradigm, expression-oriented, statically-typed, general-purpose programming language that emphasizes functional correctness, performance and developer experience.
	- in other words, it's a _modern_ programming language
	- *crowd roars in laughter*
	- thank you, thank you
## Slide 8 - What is Rust? (2) (E)
Emphasis on performance:
- Zero cost abstractions mean that high-level implementations are just as performant as their low-level counterparts. 
- Little runtime performance overhead compared to languages like C

Borrow checker instead of garbage collector:
- works by tracking object ownership and lifetimes at compile-time.

## Slide 9 - What is Rust? (3) (E)
Declarative macros
- unimportant for us, simple pattern matching
Procedural macros
- Multiple types, but they can be function-like (which is what we're interested in)
- we can access the macro input as a token/character stream, and can generate and run arbitrary rust code from that. 
- that means we can write a parser here!

## Slide 10 - Evaluating Rust for Building DSLs (1) (K)
**Supportability**
- goes first because - it's pretty much a prerequisite for all the other requirements
- describes some of the more technical requirements..
- can we support all intricacies of the syntax of the DSL
- can we enforce all the domain constraints? (e.g. a host may only have one IP address assigned to it at a time
- are we able to debug DSL code, get feedback on where errors occur, etc?
**Quality**
- Memory safety, any aspect of the host language the removes non-domain specific "dangerous"
- hygienic expansion?
**Integrability**
- Can interact with the host language duh
**Simplicity/readability**
- modularity, importing and exporting modules, straightforward to implement and use. Supports the other requirements.

## Slide 11 - Evaluating Rust for Building DSLs (2) (K)
**Supportability**
- It's definitely possible, we can support DSLs in Rust and implement the syntax in whatever way we want
- We can let our parser catch errors using Rust's panic! macro, where we can then pass any string payload
- BUT rust specific messages will appear
- We can nevertheless output stack traces.
- we can enforce the language/domain constraints
	- e.g. a book in a library can only be borrowed by one person at a time 
**Quality**
- the DSL inherits the high performance speeds of Rust
- the DSL inherits the safety features of Rust concerning concurrency and memory safety
- HOWEVER, procedural macros are not hygienic
	- declarative macros do support hygienic expansion but procedural don't
	- e.g. variable shadowing... existing variable bindings hidden from a macro 
**Integrability**
- High level of integrability
- Diverse compilation targets
	- this means arm, x86 and whatnot... for different hardware
- embedded systems, command-line tools, web applications and more
**Simplicity**
- Powerful module system
- Straightforward to implement and use
- Procedural macros must be defined in their own module, so they can't be delivered together with the semantics in one module. 

## Slide 12 (E)

## Slide 13 (E)

## Slide 14 (E)