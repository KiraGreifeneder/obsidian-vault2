## Requirements for DSL implementation
---
### DSL properties / requirements

[Lessons learned from real DSL Experiments](https://pdf.sciencedirectassets.com/271600/1-s2.0-S0167642300X01104/1-s2.0-S0167642304000310/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIH2jn1YeMgj1lasYWGLQnmnt%2BJoJrms71NNwUmoWLbmKAiEAsQXkJCf5xbwvd%2FFZbmTsNr47zSNnA9O4ljYhEBsYT6cqswUINhAFGgwwNTkwMDM1NDY4NjUiDCtC6tDEiWcve2ANxCqQBcPWCPaeKdhYSTgUJ00Qi1CIGSOD3ZuKcth19TovMLh7GsM%2B%2BDNxMccsu1lQEzubGBJwlluyotp3e3%2FR4QBLvFETN1vAQurHmcHIeQ04KoG4wzK15FuaLQnpLr%2FcnKYg6e8EOY2bjcNLDi17hbRJMvXHRgqp7dLw1ymWaZESX%2FQN6YvyRAeZ2rdisSRmFnC3exPV78g1Nv8vpxix9S743edcylpsxZIZVRsLpn9DsPgutWef9%2FV1w0ALuhoAbQNjsFFU1RaPa%2FHMjsCr3rfV0ERDSAGIjZWehqy5Nila1PUELWOFF4A9osCl6NjPn5Xhk92bwKYAy8k1XGz%2BIhMF567tw13k1SLkFR8g0as6ZPYVoK%2F1vxmt8H55nnosaAFlb6GHc5RaRYmXy%2BO4FiVu3rhmJFcm0emoIGh1mFXT8xo5x4v7malCb%2FMsuIkNm26xZEpFBNcuogFHvnof1kHNT%2BE1WIOZgBE2zLzDS3QUy7lv3Do%2FZP5xmN360oHp1ntvJpd8DhUNLbnEg34TNl37cKnvvhbPHXMka0nMmvzwtAPLvTg7EtBjpFx4OBSxo2qzgVCNc9Xd2l27WTaP5A6kgAyYq6RmYmPoE9K%2B%2B9Fev3vMDD%2BlAq3OI7%2B2mbQak8Hq9isYP29clJccQy6sDBTzZz9iMmz2imPLIuRH58Deb6%2Bo6gpQnjMuw5xNR6q8253GETfW9OkpXWqqBy0A01OuIq6t%2BV0HKyXwSakqW%2FtZYRx8EsKmKpOeHG1BdpR4NZiSfjRs1VsGQXEE1dcfntmN%2BNOls6cLlW2nTR9UKYQE3Fcq9YyKXoM2q%2BnM0ry5r1Oqdt7nVhaCt4n4ztHogW%2BUh6SFDIoQXmcrQrScPw8sINcSMPSF%2BrEGOrEBH6jEY8RU9UtL19sDRxS3pOU1zALFuO2W20MunpO9G9MS6BAYm5KzHg%2FhVld5FLofhYZW%2BwgujLzwAEXX3ikeNpvgkG%2FVR7tDujebuyGf3oOmv5JXrgnntJoMf6NXYPHlpC2Q8PJHawCPqyONAvDP86rtF4GQDrNT9%2FATB0PVZR4dehIZ3IzVmFU4xr%2FNXocU9ViLadQb9C9yHggLrtpI0wRkw2PZf9axvJzoSrIvjm1c&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240510T215538Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYQOVU5OFH%2F20240510%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ffbe3a34b48962f0adeddb428372220db9825eb371005b84b22f0a498cd026ce&hash=f58d670dd6c51dadb1a7d4034fe5e221360db0d8ed8284d13898335b7de3e5a8&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S0167642304000310&tid=spdf-5506c80a-1f20-4efa-8b84-05047d2a49c2&sid=2feab6f76c6a83442a5a9f7-6655791ad930gxrqb&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=1b155e5e51045c0c0253&rr=881d2cb37d86c2ca&cc=at)
- First experiment may be of interest. Talks about what was important for  DSLs.
[Hints on programming language design](https://apps.dtic.mil/sti/tr/pdf/AD0773391.pdf)
- Design, requirements


Program design: The design also needs to make it clear how it is run, and what it is intended to accomplish. -> simplicity, readability

Debugging: "A good programming language will give maximum assistance in this (debugging)". Notations should be designed to reduce as far as possible the scope for coding error, or at least guarantee that such errors can be detected by the compiler. Simplicity and design precede this / are a prerequisite. Domain specific constraints etc..

Efficient object code and fast translation are also components one should consider to maximize.

Fast translation: instead of constructing a fast translator, programmers used to turn to independent compilation (to only recompile those files which have changes). But this is a poor substitute for fast compilation... I don't think why "why" is necessary, but rust probably is a good host in fulfilling this

Efficient object code: Efficiency loss of maybe 10-40% is tolerable, but above that it is problematic. Reasons given in text. 

Readibility: I suppose implementing a DSL should be intuitive and the resulting implementation should be as readable as the DSL itself. We can evaluate Rust based on how clear the implementation is and how clear the usage of the resulting DSL is. 

Syntax. How can we define syntax, what possibilities do we have... any limitations? Fixed format or certain free format techniques (like a finite state machine) can be used to define the assembly or characters into symbols, and context-free grammars to define the structure. Can use FORTRAN example with the venus probe.

[Requirements of Domain-specific languages](https://d1wqtxts1xzle7.cloudfront.net/76557260/req_dsls-libre.pdf?1639717980=&response-content-disposition=inline%3B+filename%3DRequirements_for_domain_specific_languag.pdf&Expires=1715436790&Signature=a1DEqMn7k-SpGuRPnzIgyRUxIuC8OhmiXyKmOxKwVrmd0GwwSG7AY-fJvWEvKleLpA0xoVxjMLawIvNJsUC-T1xof6IWEIOP1F632nQa2FkyD3B0hF5Q5oFQcNIrmWRc3JHbP7Mnn2xD6WqOSrlM1LogjluLO9YrMXErVbjCyqJ7LRbpF0nxcSppfWYxwKaC1cYliCBezT2Z40klmKMvstXsxHDxVPFNSRJJpiSDgVbvIDcOjSzqe~WY9NG-sUbofn4gXLv97h73WwwUNSUTIYBo6fpCJxvkLbkDqh5b6NrEJgZBDsxO79ZfMauq79pUYZ18oA5p~l1ctbCikKzASA__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA)
Integrability: "the language and its tools can be used to concert with other languages and tools with minimal effort". Alternatively, one can look at extensibility, i.e. that the DSL and its tools can be extended to support additional constructs and concepts.

Supportability: "It must be feasible to provide DSL support via tools, for typical model and program management.". ->  See if there are any DSLs Rust **can't** implement.

Quality -> security, safety, improving reliability
the language shall provide general mechanisms for building quality systems. This may include (but is not limited to) language constructs for improving reliability (e.g., pre- and postconditions), security, safety, etc.

It seems that the requirements for a DSL begin with those of a normal programming language. It begins largely with Simplicity/modularity/orthogonality, then security (this is where Rust proves to be a great advantage) etc...
Scalability quickly becomes an issue, while the domain may be small the systems built with them may not.
Usability is of course at the forefront of DSL development and usage. Rust needs to be able to make it easy to use the language.

Integrability: the language, and its tools, can be used in concert with other languages and tools with minimal effort. This is essential to integrate the DSL with other facilities used in the engineering process. An alternative requirement for DSLs is extensibility, i.e., that the DSL (and its tools) can be
extended to support additional constructs and concepts. However, we suggest that integrability is to be preferred as a requirement for DSLs as it preserves semantic coherence of the DSL, as well as the desirable requirements of conformity and orthogonality.
- copilot rephrasing: The DSL, along with its tools, can harmoniously interact with other languages and tools, requiring minimal effort. This is crucial for integrating the DSL into the broader engineering process. Another potential requirement for DSLs is extensibility, meaning the DSL and its tools can be expanded to accommodate more constructs and concepts. However, we propose that integrability should be prioritized as a DSL requirement. This is because it maintains the DSL’s semantic consistency and upholds the desirable requirements of conformity and orthogonality.

Simplicity: this is a generally desirable language requirement: a language
should be as simple as possible in order to express the concepts of interest and
to support its users and stakeholders in their preferred ways of working.

Security has to do with 

Supportability: it is feasible to provide DSL support via tools, for typical
model and program management, e.g., creating, deleting, editing, debugging,
transforming

[When and how to implement DSLs](https://dl.acm.org/doi/pdf/10.1145/1118890.1118892)
"DSL development techniques are more
varied than those for GPLs, requiring
careful consideration of the factors in-
volved."

[An Approach for the Systematic Development of Domain-Specific Language](https://dsg.tuwien.ac.at/team/zdun/publications/spe09.pdf)

"The language model constraints, also referred to as (additional) static semantics, are essentially a part of the
DSL language model (see Figure 1). They express invariants on elements of the core language model and/or on
relations between those elements and thereby define semantics that cannot be expressed directly in the (graphical)
core language model. An example from the access control domain would be an invariant which defines that two
mutual exclusive roles must never be assigned to the same user (see also Section 7). Usually, constraints are
provided in a formal constraint language. If the core language model is defined using the UML, for example, such
constraints can be specified using the Object Constraint Language (OCL) [48]. Please note that some language
model constraints can also be given as informal text, for instance if it is impossible to express a certain constraint
with a particular formal constraint language. The downside of this option is that we then cannot use software tools
for an automatic handling and checking of such informal constraints.

The “Language Model Driven Process” is initiated by selecting the target domain of the DSL. The first activity
is to define an (initial) core language model and corresponding language model constraints for this target domain."

The language model of a DSL describes all relevant domain abstractions, which are elements of the DSLs target domain, and specifies the relations between these. Therein lie the language model constraints, which defines semantics that cannot be expressed directly in the core language model. For example, in the domain of access control, two mutually exclusive roles must never be assigned to the same user.
#### Reqs we chose and what we derive from them
- Readability/simplicity
	- is using the DSL simple and readable i guess
- Quality
	- security and safety, reliability
	- memory safe
	-  invalid domain states should become unrepresentable
		- Domain constraints in DSLs, language model constraints
- Integrability
	- the properties of Rust's memory and concurrency model can be leveraged to facilitate the development of intricate multi-language systems.
- Supportability 
	- feasability, syntax, anything we can't implement?
- Scalability
	- performance
- Debugging 

maybe make debugging and syntax their own two categories? or merge them
### Macro system specifications

[From Macros to DSLs: The Evolution of Racket](https://drops.dagstuhl.de/storage/00lipics/lipics-vol136-snapl2019/LIPIcs.SNAPL.2019.5/LIPIcs.SNAPL.2019.5.pdf)
[notes](obsidian://open?vault=University&file=PAT%2FPrep%2C%20drafts%20and%20snippets%2FFrom%20Macros%20to%20DSLs)

## Additional examples
### Supportability
Example for providing support for language constraints through type constraints

Example: 
Imagine we have a DSL for configs. One option can take either an integer, or a vector. Rust allows for enums with different types, so for our implementation we can define a type enum that contains an int and a vector, and when we then work with this config object and set its values internally while developing the DSL parser, we will get an error if the values do not adhere to our enum. 
Rust will check if our type is a scalar and handle it one way, or a different way if it is a vector.

In the following example, we will explain how this could be beneficial to developers of a DSL: in the context of a DSL for configuring IP addresses, Rust’s enum construct allows for a clear and type-safe representation of IP address versions. By defining an `IpAddrKind` enum with variants `V4` and `V6`, we encapsulate the two major IP standards into a single data type. This enables functions like `route` to accept an `IpAddrKind` parameter and handle IP addresses uniformly, regardless of the version. Instances of `IpAddrKind::V4` and `IpAddrKind::V6` can be created and passed to such functions, ensuring that the code remains concise and focused on the logic pertinent to IP address handling, while the type system enforces the correctness of the values at compile time, 

In the following example, we will explain how this could be beneficial to developers of a DSL: In the context of a DSL for configuring IP addresses, Rust’s enum construct allows for a clear and type-safe representation of IP address versions. In Fig. 2 we show that IP address types can be grouped into a single 'IpAddrKind' type with V4 and V6 as variants. This enables uniform handling of IP addresses in functions such as route, ensuring type safety and simplicity in code that deals with IP configurations when writing the parser.

Fig. 2.
### Quality, safety, robustness
What issues do we face without hygenic expansion? Maybe elaborate on the example with accidental identifier overlaps?
### Integrability
Examples of how embedded rust DSLs are portable I guess
### Simplicity
Refer to Fig. 1?