**In Bold: A tool-assisted approach**
## General understanding
---
Hygienic expansion:  identifiers contained in the source must be distinct from macro-generated identifiers in binding positions. As such, it eliminates the need to explicitly protect against accidental interference between the macro’s lexical scopes and those of its use contexts – that is, yet another programming pattern from macro code. **use example in text? or something else**
- procedural macros used in Rust for DSLs
	- Only writing parsers here
	- not hygenic, therefore not perfect for dsl 👎
## Macro system requirements

### Quality
---
**"Rust allows low-level memory management and safe parallelism by a set of rules checked by the compiler based on the concept of ownership. That way, Rust does not rely on a garbage collector. The ownership system can be resumed as follows: each value is owned by at most one variable at a time and when the owner goes out of scope, the value is dropped. Those attractive properties are useful in DSL development: strong typing, memory safety and multiple deployment targets."**

gemini's version:
Rust achieves low-level memory management and safe parallelism through a compiler-enforced ownership system. This system eliminates the need for garbage collection. In essence, ownership dictates that each data value has a unique owner (variable) at any given time. When the variable's scope concludes, the associated data is automatically "dropped" (deallocated). This ownership paradigm, along with Rust's strong typing guarantees and memory safety, makes it particularly well-suited for domain-specific language (DSL) development, enabling cross-platform deployment.


### Supportability
---
language extension provides only a false sense of a purpose-tailored language. On one hand, a programmer who uses a bunch of macro-based language extensions as if it were a self-contained DSL must code with an extreme degree of self-discipline. On the other hand, the macro system fails to support some of the traditional advantages of using DSLs: catching mistakes in the parsing or type-checking stage; exploiting constraints to generate optimized code; or link with/target tailor-made run-time functions. -> <mark style="background: #BBFABBA6;">debugging/quality</mark>

Rust type constraints -> domain constraints
#### Syntax
"Thus, defining a consistent and error-free abstract syntax in Rust is a difficult task, especially when aiming for a metamodel-based one. While specific design patterns exist to overcome these difficulties, they remain laborious to implement."


"The central piece of a DSL is the abstract syntax of the language, which formally defines the rules to create a syntactically valid model. One way to define an abstract syntax is to create a metamodel using a metamodeling language such as using Ecore from the Eclipse Modeling Framework (EMF) [ 12 ]. To supplement the abstract syntax, a DSL can rely on a set of editing operators. These editing operators can be used to create and connect instances of the concepts of the abstract syntax, and are typically used to define a proper model editor for the DSL."

parser, able to do non-rust-like syntax. can do anything with procedural macros
### Simplicity
---
"the implementor of a DSL will almost certainly wish
to hide these run-time values and even some of the auxiliary compile-time transformations. All of this suggests that macros, micros and vocabularies should go into a module, and such modules should make up a DSL implementation."

"The goal was to create a module
system where a developer could write down each module in a DSL that fit the problem
domain and where a module could export/import individual macros to/from other modules –
and this second point forced them to reconsider the first-class nature of modules."

"Using macros, programmers can tailor the language to a domain. Because programs in such tailored languages sit within host programs, they can easily communicate with the host and each other. In short, creating, using, and composing DSLs looks easy."

### Integrability
---
 By contrast, Lispers think of their language extensions and imagine that DSL programmers may wish to escape into the underlying host language or even integrate constructs from different DSL-like extensions at the expression level. The question is whether a macro-micro based approach can move away from the “whole program” thinking of ordinary DSLs and realize a Lisp-ish approach of deploying languages for small units of code

**As Rust is oriented towards network services, embedded systems, command line tools, and web applications, it has multiple compilations targets and can run on almost all platforms4. Rust provides helpful features to create a command-line application, such as automatically generated documentation5, quick packaging and distributing thanks to the Cargo package manager6, and flexible logging configuration7. For the development of applications running on embedded systems, Rust emphasizes interoperability and portability: it can be integrated into an existing C codebase8 and it provides an efficient**

Gemini's version:
Targeted towards network services, embedded systems, command-line tools, and web applications, Rust exhibits high portability across various platforms due to its diverse compilation targets. The language offers a suite of functionalities conducive to command-line application development. These include, but are not limited to, automatic documentation generation, streamlined packaging and distribution facilitated by the Cargo package manager, and versatile logging configuration options. When developing for embedded systems, Rust prioritizes interoperability and portability. It seamlessly integrates with existing C codebases and delivers efficient memory management, making it well-suited for resource-constrained environments.


## back to requirements???
---
Conventionally, the creation of DSLs demands a pipeline of compiler passes:
1. a parser, based on explicit specification of a domain-specific vocabulary and a grammar, that <mark style="background: #FF0000;">reports errors at the DSL’s source level</mark>; (==Supportability==)
   Error messages not limited to the DSL, but supports most error reporting features such as stacktrace etc. Rust is well known for its good error messages as is...
2. a static semantics, because one goal of migrating from an application interface to a DSL is to enforce certain constraints statically; (==Quality==)
3. a code generation and optimization pass, because another goal of introducing DSLs is to exploit the static or linguistic constraints for improved performance; and, (==Quality==)
4. a run-time system, because (1) the host language may lack pieces of functionality or (2) the target language might be distinct from the host language.
Scheme macros per se do not support the creation of such pipelines or its proper encapsulation

# What can Rust actually do?
Function like procedural macros...
![[Pasted image 20240512141541.png]]


# let's revise the order...
1. Supportability. This outlines most of the **technical** requirements such as parsing, error reporting, syntax.
2. Quality. if we have parsing, we should provide proper debugging, safety...
3. Integrability. Interaction with tools outside the DSL. Interaction with host language and other DSLs
4. Simplicity. Building on the other aspects. Modularity, which helps with integrability. Readability.