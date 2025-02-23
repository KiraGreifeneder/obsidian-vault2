---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Software Engineering/Lecture]]"
completion-status: Complete
---
## Lecture material
![](_attachments/SWE-JKU-Lecture06-Design%20Choices.pdf)
## Summary/Notes
### A Case Study: KWIC
Believe it or not, the information in this entire section/lecture is VERY relevant for the exam, and honestly not even sufficient (yet) #software-eng-todo 

KWIC stands for "Key Word In Context". 
- The KWIC index system accepts an ordered set of lines:
- Each line is an ordered set of words
- Each word is an ordered set of characters
-  Any line may be "circularly shifted" by repeatedly removing the first word and appending it at the end of the line
- The KWIC index system outputs a listing of all circular shifts of all lines in alphabetical order.

In other words, KWIC reads in text, and transforms it as shown in this example:
```
// Input text
Hello World 
I Am Yoda

// Circular shift variants that KWIC finds
Hello World
World Hello
I Am Yoda
Am Yoda I
Yoda I Am

// Final KWIC output (lines have been sorted by their first letter)
Am Yoda I
Hello World
I Am Yoda
World Hello
Yoda I Am
```
#### Different Architecture approaches for KWIC
##### Pipe-&-Filter
![400](_attachments/Pasted%20image%2020250111020648.png)
Pros:
- Intuitive structure and processing flow
- Support for reuse, since filters operate in isolation
- Changeability (easy to insert new filters)

Cons:
- Impossible to evolve into an interactive system, since deleting a user-selected line would require shared storage, and that violates approach (?)
- Bad efficiency, since each filter copies all data to its output ports
##### Functional with Shared Data
![400](_attachments/Pasted%20image%2020250111022706.png)
Pros:
- Efficient due to the use of shared data, the data representation, and the sequential data access.
- Intuitive structure

Cons:
- Not easy to change, since the data format isn't abstracted away and the functional elements are dependent on the data representation
- Bad support for reuse
##### ADT (Abstract Data Types)
![400](_attachments/Pasted%20image%2020250111022949.png)
Defines operations and behaviors for a data type without specifying how these are implemented or how data is stored.

Pros:
- Intuitive structure
- Changeability: The data format is abstracted away inside ADTs
- Support for reuse: There are fewer assumptions about the rest of the system

Cons:
- Not easy to expand on functionality
##### Implicit Invocation
![400](_attachments/Pasted%20image%2020250111023336.png)
Pros:
- Intuitive Structure
- Data format abstracted away and "activated"
- Easy to change, computation is separate from data representation
- Easy to reuse, since the modules only rely on events, not other modules

Cons:
- Processing order (not expanded on) #software-eng-todo 
- Not very efficient,  the data driven solution leads to a bigger footprint
##### Comparison
![400](_attachments/Pasted%20image%2020250111024015.png)

### Key (Architecture) Design Principles
Architecture-Based Software development exists to break one big problem space into, smaller problem spaces. There are 7 key principles to guide this process.
#### 1. Rigor and formality
- **Rigor** refers to the quality of being very exact, careful, or strict. Any systematic approach is rigorous.
- **Formality** is rigor at the highest degree, typically mathematical methods.

Even creative activities such as design and programming must be practiced systematically.

Examples (product):
- systematic (rigorous) transformation of models
- systematic (rigorous) construction of test cases
- mathematical (formal) program correctness proofs

Examples (process):
- documentation of development steps
- cleanroom software development
#### 2. Separation of concerns
This approach is also known as "divide and conquer". The idea is to develop software in a way that issues can be addressed one at a time. It also supports the parallelization of efforts/tasks and separation of responsibilities.

Examples (product): protocol stack, model-view-controller architecture
Examples (process): waterfall model, lazy code optimization
#### 3. Modularity
Modularity is the **separation of functional concerns**. Typically this is done through **modules**, which enforce logical boundaries and separate the interface from the implementation.

Modular languages support separate compilation and deployment of modules (modules as components). Informally, it means decomposition into subprograms and tasks.

Modules should have
- **high cohesion**: items in a module should be closely related to one another, and understandable as a meaningful unit.
- **low coupling**: modules have low interactions with others, and be understandable separately.

#software-eng-todo  cohesion levels are listed here, but I am going to assume that they are irrelevant for the exam. Marked for future reference.

Modularity is the cornerstone of software design.
#### 4. Abstraction
- Abstraction is the **separation of hierarchical concerns**
- Abstraction **ignores details**
- Abstraction **produces models**
- **Procedural abstraction** refers to step-wise refinement
- **Data abstraction** allows us to find hierarchy in the data

**Information hiding** then refers to the combination of abstraction and modularity. The world should not see the inner workings of a module, only an interface. Everything else should be hidden.
#### 5. Design for change
Design things in such a way so that the following is possible:
- Change of algorithms
- Change of data representation
- Change of underlying hardware or abstract machine
- Change of "social" environment, such as a new tax regime (lmao?)
#### 6. Generality
- Whenever a problem has a solution that can be reused in other cases
- Balance generality against performance and cost
- General problems may be easier to solve than specific ones
#### 7. Incrementality
- Developments should proceed incrementally. 
- We can deliver subsets of a system early to get feedback, then add more features incrementally
- Deal with functionality first, then performance
- Deliver a prototype and then incrementally add effort to turn it into a product