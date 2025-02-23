---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Software Engineering/Lecture]]"
completion-status: Complete
---
## Lecture material
![](_attachments/07-1.pdf)
## Summary/Notes
### Key points
- Software process models define the activities involved in producing and evolving software systems.
- Examples of process models include the waterfall model, spiral development, agile methods, and DevOps.
- Important activities are specification, design and implementation, validation and evolution.
### Common Process Areas
- Requirements engineering - developing a software specification
- Design and implementation - transforming a specification to an executable program
- Verification and validation (V&V) - checking if a system meets its specification and user needs
- Evolution - modifying a system already in use
### 1. Waterfall Model
The waterfall model is defined by its separate/distinct phases of specification of development. I would call it "linear".
![500](_attachments/Pasted%20image%2020250114135540.png)
The main issue with this model is the **inflexible partitioning:** It is difficult to accomodate to changing customer requirements due to there being distinct stages

The waterfall model is **only appropriate when the requirements are well understood and any changes will be fairly limited** during the design process.
- This is rarely ever the case though, especially in real business systems
- Mainly used for large systems engineering projects where a system is developed at several sites
### 2. Spiral Development
The main points of spiral development are:
- Risk-driven
	- Risks determine the next course of action
	- Risks determine the level of effort on activities and level of detail of artifacts.
- Continuous integration
- Frequent, executable releases
- Continuous stakeholder involvement
	- Understand objectives, constraints and alternatives in each cycle
- Lifecycle anchor points: Intermediate commitment points
- Emphasis on system activities/artifacts
	- Avoids premature suboptimization on hardware, software, or development considerations
	- "suboptimization": a reduced level of output that results from an inefficient or ineffective process or system

**The original spiral model**
![](_attachments/Pasted%20image%2020250114142144.png)

**The Incremental Commitment Spiral Model**
![](_attachments/Pasted%20image%2020250114142223.png)

The whole process is represented as sprial (lmao) rather than a sequence of activities. 

- Each cycle in the spiral represents an **iteration** in the process.
- Risks are explicitly assessed and resolved throughout the process
- No fixed stages (such as specification or design).
	- Sprial cycles are chosen depending on what is required
	- The model is more of a **"process generator"** rather than a process

**Phases of the spiral model**
![](_attachments/Pasted%20image%2020250114142725.png)

**Emphasis of different process areas throughout phases**
![500](_attachments/Pasted%20image%2020250114143643.png)
- Business Modeling and requirements mainly at the beginning
- Analysis and Design during the Elaboration Phase
- Implementation starts in the Elaboration phase and ends when construction ends (implementation kinda **is** construction).
- Testing takes place periodically throughout the entire process
- Deployment done in small parts during elaboration and construction, mainly at the end of/after construction though
- Config and change management stays relatively active throughout, even in transition
- Environment is handled at the beginning of eahc phase

#### Boehm's Top 10 Software risks
Every project will have to keep its own list of risks. For example, at a restaurant we might have "Personnel shortfall". 

Boehm's Top 10 encompasses common issues to look out for when it comes to software risks.
1. Schedules, budgets, process
2. Requirements Changes
3. Personnel Shortfalls
4. Requirements Mismatch
5. Rapid change
6. Architecture, performance, quality, distribution/mobility
7. COTS, external components
8. Legacy Software
9. Externally-performed tasks
10. User interface mismatch

**Comparison to waterfall model:**
![](_attachments/Pasted%20image%2020250114140737.png)
### 3. Agile (Can I Be Your Scrum Master?)
**Manifesto for the cult of Agile:**
![300](_attachments/Pasted%20image%2020250114150059.png)
#### Plan-driven vs Agile processes
Plan-driven:
- Large systems requiring multi-year development work
- Systems with long lifetimes (e.g. aircraft control)
- Geographically dispersed teams
- Controlled and rigorous development required

Agile processes:
- Rapid software development is essential
- Focus on delivering functionality quickly
- Responding to changing product specifications

Next we'll get into some common Agile methods...
#### Extreme Programming
- Embracing changing requirements, technology, people, and the environment
- Heavily involves users and customers
- Delivering features is prioritized by business value
- "Pay as you go" process, rather than a high up-fron investment
- Frequent release and test automation
#### Scrum
- Framework for agile project organization and planning
- Plans always change so only short-term plans are reliable
- Scrum doesn't mandate any specific technical practices

**The scrum porcess**
![300](_attachments/Pasted%20image%2020250114151501.png)
- **Product owner** 
	- responsible for identifying product features and attributes. 
	- Reviews the work that is done and helps testing the product.
- **Product backlog**: 
	- Bugs, features and product improvements that still need to be done by the team.
- **Development team**: 
	- 5-8 people responsible for developing the product
- **Sprint**: 
	- Short fixed time periods (2-4 weeks) in which a product increment is developed 
- **Scrum**
	- A daily team meeting to review progress and work to be done.
- **ScrumMaster**
	- A team coach who guides the team in effective use of Scrum. 
	- aka 'there for the vibes'
- **Potentially shippable product increment**
	- Output of a sprint
	- should be of high enough quality to be deployed

**Comparison of Waterfall, Iterative and Xtreme Programming**
![600](_attachments/Pasted%20image%2020250114145858.png)
#### From Agile to DevOps
![500](_attachments/Pasted%20image%2020250114152957.png)
Rapid evolution of products or services requires close collaboration between opertions engineers and development engineers. This should happen all the way from design through development to production support.

**Essential DevOps practices**
- Version control, configuration management
- Automated testing
- Pro-active monitoring and metrics
- Agile methods
- Incident management
- CI/CD
- Virtualization/Cloud/Containers
- Tool chains