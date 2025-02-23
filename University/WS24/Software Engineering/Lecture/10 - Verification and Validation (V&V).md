---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Software Engineering/Lecture]]"
completion-status: Complete
---
## Lecture material
![](_attachments/10-2.pdf)
## Summary/Notes
### Key Points
- Verification shows conformance with specification
- Validation shows that the program meets the customer‘s needs.
- Both static and dynamic V&V approaches
- Program code in inspections is systematically checked by a small team to locate software faults
- Static program analysis can discover anomalies which may be an indication of faults in the code
- Determining what is “good enough” in V&V is important
### Terminology
Verification
- Are we building the product right?
- Does the software conform to its specification?
Validation
- Are we building the right product?
- Does the software actually do what the user requires?

V&V should be applied in each stage of the software process, from requirements to models to source code.
### Examples of V&V activities for different items

| Item                                 | Verification                                                                                       | Validation                                                                                                 |
|--------------------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| Software component written in Java   | - Static analysis with tools<br> - Unit testing (e.g., JUnit)<br> - Peer reviews or inspections   | - Integration testing to check compatibility with other components<br> - Functional testing to ensure compliance with requirements<br> - System testing as part of the larger application |
| Requirements document (use cases)    | - Document reviews for consistency and completeness<br> - Use checklists or templates to ensure all sections (e.g., actors, flows) are present | - Walkthroughs with stakeholders to ensure alignment with user needs<br> - Prototypes or mockups to validate requirements with users |
| UML state diagram                    | - Check for syntactic correctness (e.g., transitions, states) using UML standards<br> - Use tools for consistency checks | - Review with domain experts to ensure the diagram reflects expected system behavior<br> - Simulate the state diagram to validate transitions and logic |
| User interface design (sketched)     | - Verify against usability guidelines (e.g., consistency, accessibility)<br> - Check alignment with design specifications or style guides | - Conduct usability testing with real users<br> - Gather feedback via surveys, interviews, or focus groups |
| System deployed in cloud infrastructure | - Perform audits for infrastructure as code<br> - Audit configurations for security, resource limits, and redundancy | - Conduct performance testing under realistic loads to validate scalability<br> - Perform disaster recovery testing and end-to-end functional testing |
### Static vs dynamic V&V
Static V&V focuses on:
1. Inspections, examining specific artefacts of a system to discover problems (from requirements to source code)
2. Static Program Analysis: Analyzing source code to discover errors, code smells, violations of coding conventions and more.

Dynamic V&V:
1. Software testing
2. Runtime Monitoring, observing the system during operation to discover unusual behavior
### Software Inspections
- A formalised approach for conducting reviews
- Effective technique for discovering anomalies and defects
- Can be applies to requirements, design, code, or any other stage
- Doesn't require existing implementation/execution of the program
#### Classical Inspection Process
![](_attachments/Pasted%20image%2020250114210713.png)
- **Planning**: Define what we're inspecting, teams involved etc.
- **Overview**: Presenting the system to the inspection team
- **Individual** preparation: Inspectors scrutinize the object and write down potential defects
- **Inspection** meeting: Team discusses these defects, agrees on actual defects
- **Rework**: Authors make changes to fix the actual defects
- **Follow**-**up**: Optional re-inspection or meeting
#### Inspection Pre-conditions
- A precise **specification** should already be availble
- Team members should be **familiar** with the organisation's **standards**
- **Syntactically correct code** or other representations should be available
- An existing error checklist
- Management support
### Requirement Inspections
Inspection of requirements allows us to get early feedback on the quality of the requirements. Any defects discovered here will greatly reduce costs down the line.

These inspections can be guided and supported by the following:
- Checklists focusing on specific quality areas
- Specific reading techniques provide guidelines for the inspector
- Perspective-based and scenario-based reading:
	- guidelines for reading requirements from different perspectives
	- understanding requirements from the perspective of a user, designer, tester etc.
- Collaborative tools and groupware support
### Code Inspection Checks
**Data faults**  
- Are all program variables initialized before their values are used?  
- Have all constants been named?  
- Should the upper bound of arrays be equal to the size of the array or Size -1?  
- If character strings are used, is a delimiter explicitly assigned?  
- Is there any possibility of buffer overflow?  

**Control faults**  
- For each conditional statement, is the condition correct?  
- Is each loop certain to terminate?  
- Are compound statements correctly bracketed?  
- In case statements, are all possible cases accounted for?  
- If a break is required after each case in case statements, has it been included?  

**Input/output faults**  
- Are all input variables used?  
- Are all output variables assigned a value before they are output?  
- Can unexpected inputs cause corruption?  

**Interface faults**  
- Do all function and method calls have the correct number of parameters?  
- Do formal and actual parameter types match?  
- Are the parameters in the right order?  
- If components access shared memory, do they have the same model of the shared memory structure?  

**Storage management faults**  
- If a linked structure is modified, have all links been correctly reassigned?  
- If dynamic storage is used, has space been allocated correctly?  
- Is space explicitly de-allocated after it is no longer required?  

**Exception management faults**  
- Have all possible error conditions been taken into account?  
### Static Program Analysis
With this type of analysis, we try to reason about a program without executing it. Analysing source code to discover errors, error-prone situations, code smells, and violations of coding conventions. These should complement code inspections.

What defects can **static** analysis catch?
- Security issues
	- Buffer overruns, improperly validated input...
	- Memory safety: Null dereference, uninitialized data
	- Resource leaks: Memory, OS resources
	- API Protocols: Device drivers; real time libraries, GUI frameworks
	- Exceptions: Arithmetic/library/user-defined
	- Encapsulation: Accessing internal data, calling private functions
	- Race conditions
### Runtime Monitoring
Necessary because large scale systems can't be fully tested. The full behavior only emerges during operation. 
#### Example: Event-based Monitoring
uhhhh #software-eng-todo 
### Determining "Good Enough"
While V&V should ensure that the software is fit for purpose, software also has to be "good enough" for its intended use. Depending on where it is used, the degree of confidence has to be higher.

How do we determine "good enough"?
- Software function
	- The level of confidence depends of how critical the software is to an organization
- User expectations
	- Different level sof expectations for different kinds of software
- Business environment
	- Getting a product to market early may be more important than dinging all defects in a program

Here's a risk exposure profile illustrating different levels of "good enough". Working on it until it's 
"perfect" will lead to losses. It is often better to ship much sooner with a few more defects. 
![](_attachments/Pasted%20image%2020250114222030.png)
