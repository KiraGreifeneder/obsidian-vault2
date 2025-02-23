---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Software Engineering/Lecture]]"
completion-status: Complete
---
## Lecture material
![](_attachments/11.pdf)
## Summary/Notes
### Key Points
- Testing can **show the presence of faults** in a system but cannot prove there are no faults.
- Component developers are responsible for **unit testing**.
- **Integration testing** is testing increments of the system. 
- **Release testing** involves testing a system to be released to a customer.
- Use experience and guidelines to define **test cases** in defect testing.
- **Test automation** plays an important role in agile and DevOps processes.
### Typical Testing and Debugging Cycle
- Software testing consists of a **dynamic verification**
- We verify that a program provides **expected behaviors**
- Uses a finite set of test cases

The main challenge lies in finding a subset of possible inputs to a system that will give us reasonable certainty that we have found the most important bugs.
### Definitions
- Software Testing: running tests on a system using a variety of inputs
- Faults: defects/bugs
- Test case: combination of input values that exercise some behavior of the SUT
- Test driver: automates the execution of a test case
- Test oracle: a way to check whether the behavior observed during test execution matches the expected behavior
### Types of Tests
![400](_attachments/Pasted%20image%2020250114225052.png)
### Testing Strategies
#### Black-box testing
- No knowledge about the internal workings of the system, only its interfaces
- Do the inputs produce the expected outputs?
- Cover typical cases, edge cases, invalid conditions...
#### White-box testing (Structural testing)
- Acess to the source code of the internal components of a system
- Knowledge about the implementation allows us to test all branches/conditions
- Every statement should have a test
- The test cases are derived from the program structure
#### Requirements-based testing
For each requirement, we should be able to derive a set of test cases.
### Levels of Functional Testing
- **Unit testing** tests program modules in isolation. All the code in a unit should be executed at least once by a test.
- **Feature testing** tests integrated code units
- **System testing** tests integrated features that form a (perhaps complete) version of a system.
- **Release testing** of the packaged system to be released to customers
#### Unit testing
- Test individual functions or methods within an object
- Test claseses with several attributes and methods
- Test composite components with defined interfaces used to access their functionality
- In Test Driven Development (TDD), the tests are written before the actual code
#### Feature Testing
Focused on testing features that are implemented through the use of multiple, interacting program units. 

- **Usefulness tests** determine that the feature implements what the users are likely to want.
- **Interaction tests** reveal misunderstandings and bugs that can only be found when integrating units.

There are two ways of testing features:
- **Top-down**
	- We develop the skeleton of the system
	- integrate system units one at a time until the entire system is integrated
- **Bottom-up**
	- Test the lowest-level units first
	- then use these to test higher-level components
#### System and Release Testing
- Testing the system as a whole, not just individual features
- Test if features work together effectively to support what users really want
- Discovering unexpected and unwanted interactions between the features
- Testing if the system operates as expected in different environments
- Testing quality attributes (responsiveness, throughput, security...)
#### Scenario-based Testing
- The scenarios we derived during the requirements engineering stage describe end to end pathways that users might follow while using the system -> we have sequences of action that users will follow
- Simulate real user scenarios from start to finish
- Fundamental for system-level testing
#### Release Testing
- Testing a release to be distributed to customers. By doing so we increase the confidence that the system meets its requirements.
- Usually black-box and functional testing based on the system specification. Test cases are selected without reference to the internal workings.
### Test Automation
![500](_attachments/Pasted%20image%2020250115003455.png)
Usually done as part of the CI/CD pipeline.