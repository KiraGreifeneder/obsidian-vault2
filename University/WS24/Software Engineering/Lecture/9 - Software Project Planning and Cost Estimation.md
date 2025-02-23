---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Software Engineering/Lecture]]"
completion-status: Complete
---
## Lecture material
![](_attachments/09.pdf)
## Summary/Notes
### Key points
- No simple relationship between the price charged for a system and its development costs
- Factors affecting productivity include individual skills and abilities, domain experience, project characteristics, project size, tool support and the working environment
- Different cost techniques should be used to increase confidence in the accuracy of the estimation 
### Project Planning
Typical questions in project planning are
- How much **effort** is required to complete a project?
- How much **calendar time** is needed to complete a project?
- How much **staff** is needed for a project?
- What is the **total cost** of the project?
### Software Cost Categories
Typically most of the costs arise from
- Personell
- Hardware and software
- Travel and training
- Overheads
	- Building, heating, lighting
	- Networking and communications
	- Shared facilities
#### Costing vs Pricing
relevant? i daut it! #software-eng-todo 

### Measuring (Software) Productivity
Software productivity refers to the rate at which individual engineers produce software and associated artifacts.
-> Amount of software functionality produced per unit of time
##### Lines of Code (LOC)
This is a **size based productivity measure**.

We can try to measure productivity by how much code is produced, but this comes with come common issues:
- The lower level the language, the more productive a programmer will appear.
- Higher verbosity would equate to higher productivity
- Rewards quantity rather than quality. But quality is essential, so what are we doin' here...
##### Function points
This is a **function-based productivity measure**.
This measure is based on a combination of program characteristics:
- External inputs and outputs
- User interactions
- External interfaces
- Files used by the system

Each of these have an associated **weight**, from which the function point count can be computed using the following formula:
$$UFC = \sum ((\text{\# of elements of given type}) \times (weight))$$
##### Estimating SLOC (Source Lines Of Code) with FPs
Using the Function Points, we can estimate the lines of code neede/written based on the language. This is based on the average number of SLOC per FP.
![400](_attachments/Pasted%20image%2020250114184839.png)
#### Use Case Points
Points based on how many use cases have been imlemented, along with weights for the complexity of the use case.
![](_attachments/Pasted%20image%2020250114185556.png)
#### Story Points
Based on relative difficulty rather than absolute durations ("person hours")
#### Velocity
Compute the expected remaining duratin of a project. Not based on any preferred unit of measurement.
![300](_attachments/Pasted%20image%2020250114185838.png)
### Factors Affecting Productivity
- Application domain experience
	- Engineers who already understand the domain are likely to be the most productive
- Process quality
	- The development process used can have a significant effect on productivity
- Project size
	- Bigger projects require more time for communication within/between teams.
	- Less time for development
- Technology support
	- Good support technology can improve productivity
- Working environment
	- A quiet working environment with private work areas contributes to improved productivity
### Challenges of Estimation Techniques
In the beninging- In the begigin... In the beniging, we don't have enough information about the requirements to come up with accurate estimates.

Additionally, the software may run on **unfamiliar computers** or use **new technology**. The people in the project may be **unknown,** and metrics that focus on volume and time may not take into account the **quality** of the produced code.

As time goes on, the estimate becomes more and more certain.
### Estimation Techniques
#### Algorithmic Cost Modelling
Cost is estimated as a mathematical function of the follwing:
- product
- project
- process attributes 
	- value of these is estimated by project managers
$$Effort = A \times Size^B \times M$$
- The size estimate and be LOC or FP
- A is an organisation-dependent constant
- B reflects the disproportionate effort for large projects (scale factor)
- M is a multiplier reflecting product, process and people attributes.

#### Example: COCOMO II
This model uses 4 base attributes to determine costs
- Product
- Hardware
- Personell
- Project
http://softwarecost.org/tools/COCOMO/
![](_attachments/Pasted%20image%2020250114192252.png)
COCOMO's scale factors revolve around
- Precedentedness
	- Previous experience of the organization and its members. 
	- The higher the score, the more familiar they already are with the subject
- Development flexibility
	- The higher the score, the more general the client's goals are
- Architecture/risk resolution
	- The higher the score, the more thorough the risk analysis.
- Team cohesion
	- The higher the score, the better the team can work together
- Process maturity
	- Based on the Capability Maturity Model (idk what that really means)
