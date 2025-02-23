---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Software Engineering/Lecture]]"
completion-status: Complete
---
## Lecture material
![](_attachments/SWE-JKU-Lecture08-Design%20Evolution-1.pdf)
## Summary/Notes
Software can have different internal and external qualities. The most important external quality is functional suitability and usability, while important internal ones may be maintainability, portability, or even just security. Overall though, internal qualities have "less value" than external ones.

**Software change is inevitable**.
- New requirements emerge when the software is used.
- The business environment changes
- Errors must be fixed
- New computers and equipment is added to the system
- Performance improvements need to be mande

Implementing and managing changes to their existing software is a big problem for organizations.

**Maintenance is inevitable**
- System requirements will change as system is being developed
- Systems are tightly coupled with their environment, changes to them affect requirements
- Systems must be maintained in order to stay useful

### Evolution 
Why is evolution important?
- Organizations have huge investments in their software systems. They are critical business assets.
- The value of these assets needs to be maintained, and that requires changes and updates.
- The majority of the software budget in large companies is devoted to evolving existing software rather than developing new software.

**Spiral model of evolution**
![400](_attachments/Pasted%20image%2020250114161700.png)
### Software maintenance
Has to do with modifying software after its release/while it is in use. We don't expect major changes here.

**Types of maintenance,** ranked by how common they are (most common first):
- Perfective maintenance
	- Enhancements where new operations and refinements are added to existing functins
	- This is evolution
- Adaptive maintenance
	- Modifying the application to meet new operational circumstances
- Corrective maintenance
	- Bug fixes
	- Eliminating errors in functionality
- Preventive maintenance
	- Improving future maintainability
	- Refactoring etc.

### Software maintenance/evolution process
The process is defined as follows:
![](_attachments/Pasted%20image%2020250114162239.png)
Some steps will be analyzed further below:
#### Change Impact Analysis
This is the first step after change requests have been made.
- Should provide an accurate understanding of the **implications of the requested change**, which helps with making decisions on which changes to approve.
- Identify components that may have to be **created, modified or discarded**
- Estimate the effort required

Impact Analysis How-To:
- Understand possible implications
	- Change may produce ripple effect
	- Watch out for performance losses
	- Look at effects it may have on the schedule
	- Estimate costs
	- Identify benfits, penalties and risks compared to other requests
- Identify all files, models and documents that may have to be modified
- Identify tasks/developers required to implement the change
	- Estimate the required effort
	- Identify the sequence of tasks
	- Determine if the changes are on the **critical path** (affect completion date)
- Report the analysis results to all stakeholders, who then get to approve or reject the change request.
### Change Implementation
This is the iteration of the development process where revisions to the system are designed, implemented and tested.

Key point here is that there wil be a stage where **program understanding** needs to be gained first. This is especially difficult if the developers working on the change weren't involved in the original system. 
#### Urgent change requests
For these kinds of changes, we may not have the time to go through all stages of the software engineering process. These kinds of changes are usually
- serious system faults
- unexpected effects produced by the environment (e.g. OS upgrade cause program to crash)
- business changes that require a quick response (e.g. release of a competing product)

In these cases, our process will be limited to the following:
![](_attachments/Pasted%20image%2020250114165013.png)
### Traceability
There are many kinds of traceability
- Requirements traced to code
- Requirements traced to models
- Models traced to test scenarios

There are also many kinds of applications and situations, which all need to be accounted for.
#### Traceability for impact analysis
Traceability data that links requirements to other downstream deliverables (e.g. tasks, modules?) is a great assist in impact analysis.

On complex projects with thousands of artifacts, manually determining **what (artifacts)** and **who (people)** is affected by a change would be very time consuming and error-prone.
### Maintenance costs
- Usually, maintenance costs are greater than development costs
- Maintenance costs are affected by both technical and non-technical factors
- They increase as the software is maintained
- Aging software can have high support costs
#### Technical cost factors
- Code complexity
- Changes in programming languages
	- Imagine trying to maintain a bank system written in COBOL lmao
- Changes in software infrastructure (libraries, middleware)
	- Remember that one time this guy deleted his NPM package and the world fell into chaos?
- Quality of code formatting and style
- Program age and structure
	- As programs age, changes start to degrade their structure. 
	- Affects changeability and understandability
#### Human cost factors
- Team stability
	- Maintenance costs are higher if the original devs aren't available
- Contractual responsibility
	- If the original devs weren't expected to be responsible for future changes, they had very little incentive to design for change
- Staff skills
	- Maintenance tasks are sometimes given to entry-level engineers, summer interns or low-skilled programmers. These tasks may take longer and have less reliable outcomes.
### Code Smells and Refactorings
Code smells are characteristics in the source code of a program that possibly indicate a deeper problem. They are results of poor or misguided programming.

For common code smells and refactoring techniques, refer to https://refactoring.guru/refactoring
### Common practices and tools
#### Modern Code Reviews
A Code Review is a quality assurance practice. Code changes are reviewed by one or more reviewers.
#### Bug tracking systems
A bug tracking system is a software application that keeps track of reported software bugs in
software development projects.
#### Regression Testing
Regression testing is a software testing practice that ensures an application still functions as
expected after any code changes, updates, or improvements.
### Legacy system evolution
Organizations that rely on legacy systems must choose a strategy for evolving these systems. They can choose to do one of the following:
- Scrap the system, modify business processes so that it is no longer needed
- Continue maintaining it
- Transform the system by re-engineering it to improve maintainability
- Replace the system with a new one
#### System re-engineering
- Re-structuring or re-writing parts of a legacy system without changing its functionality
- Applicable where some but not all sub-systems of a larger system require frequent maintenance
- Re-engineering requires additional effort to make them easier to maintain. 
- Re-documenting may also take place

Advantages
- Reduced risk
	- Re-engineering is a lot less risky than writing completely new software
- Reduced cost
	- Also much cheaper than writing new software

##### Processs activities
- Source code translateion
	- Converting the code into a more modern language
- Reverse engineering
	- Analyzing the program to understand it
- Program structure improvement
	- Restructure with understandability in mind
- Program modularization
	- Reorganize the program structure
- Data 
- re-engineering
	- Clean up and restructure system data

##### Cost factors
Depending on our budget, we can go the more automated or the more time-intensive route:
![500](_attachments/Pasted%20image%2020250114175732.png)
- The costs highly depend on available tools
- Quality of existing code
- Extent of the required data conversion
- Availability of expert staff
#### Software Modernization
Revolves around conversion, rewriting or porting of a legacy system to a modern programming language, architecture, software libraries, protocols or hardware platforms.
##### Example: Microservices 
The 'Microservification' of legacy systems comes with the following benefits:
- Team independence
- Flexibility of technology
- Optimized scalability
- Enable innovation in the cloud
### Prevention of maintenance
#### Program evolution dynamics
Program evolution dynamics studies how systems change/are changed.
-> "Program evolution dynamics is the study of the processes of system change."

##### Lehman's laws of software evolution
There are a number of "laws" (observations) that apply to all evolving systems (of large organizations).

1. Continuing Change
	- Software that is used in the real world must change
	- Otherwise it will become less and less useful in its environment
2. Increasing complexity
	- As an evolving program changes, it becomes more complex unless active countermeasures are taken.
3. Self regulation
	- Program evolution is a self-regulating process. 
	- System attributes such as size, timebetween releases, and the number of reported errors are about the same for each system release.
4. Conservation of Organizational Stability
	- Over a program's lifetime, its rate of development is approximately constant and independent of the resources devoted to its development.
5. Conservation of Familiarity
	- Over the lifetime of a system, the incremental system change in each release is approximately constant.
6. Continuing Growth
	- The functionality offered by systems has to continually increase to maintain user satisfaction.
	- We want updates!!!
7. Declining Quality
	- The quality of a system will appear to be declining unless it is adapted to changes in its operational environment.
8. Feedback System
	-  Evolution processes incorporate multi-agent, multi-loop feedback systems and you have to treat them as feedback systems to achieve significant product improvement.

#### Practices that can positively impact your project
1. DRY (Don’t repeat yourself) principle
2. YAGNI (You Ain't Gonna Need It) principle
3. Testing best practices
4. Version control
5. Pay attention to style guides
6. Naming conventions
7. Design before coding
8. Don’t push too many features
9. Maintain staging and production environments
10. 10.Carry out code reviews
#### Software dev change management best practices
1. Use a change management process
2. Manage the scope of your project
3. Create and manage a backlog
4. Prioritize your work
5. Make sure you have enough resources to complete your tasks
6. Track progress against your plan
7. Communicate early and often
8. Get feedback from stakeholders
9. Embrace change
10. 10.Learn from your mistakes