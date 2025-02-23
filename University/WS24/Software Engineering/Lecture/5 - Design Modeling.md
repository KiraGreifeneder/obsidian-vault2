---
type: university-lecture-note
lecture-note-course: "[[Lecture|University/WS24/Software Engineering/Lecture]]"
completion-status: Complete
---
## Lecture material
![](_attachments/05%20Design%20Modeling-1.pdf)
## Summary/Notes
Design is the process of deciding how a requirement should be implemented, whereas modeling is the process of creating an abstract representation of the domain or the system.

### Why UML?

The goal of UML is to provide a visual modeling language that should do the following:
- Ready to use
- Expressive
- Independent of the development process
- Extensible
- Supportive of higher-level concepts such as frameworks, patterns etc.
- Integrates the best practices

Unlike a programming language such as Java, UML adds concepts such as scenarios, actors and cardinalities, which would otherwise not be represented. It also becomes easier to understand the big picture from different points of view. Most importantly, UML is readable to the user, architect and other stakeholders.

### Use Case Diagrams
The following is based on the UE. Example from my homework (E1):
```plantuml
skinparam dpi 100
	
'===== Definitions: Use cases
(UC4: Structural fire fighting) as uc4 
(SC1: Activate and arm) as sc1
(SC5: End flight) as sc5
(SC6: Flight authorization) as sc6
(SC8: Image capture) as sc8
(SC10: Lease airspace) as sc10

'===== Definitions: Actors
:Drone Commander: as droneComm
:Semi-autonomous UAVs: as uav
:RPIC: as rpic
:DroneResponse: as droneRes
:Technicians: as tech
:Mission Commander: as missComm
:Onboard vision model: as visMod
:Air Traffic Control: as atc

'===== Primary use case actors
droneComm --> uc4
uav --> uc4

'===== Primary use case connecting to supporting use cases
uc4 ..> sc1 : <<include>>
uc4 ..> sc5 : <<include>>
uc4 ..> sc6 : <<include>>
uc4 ..> sc8 : <<include>>
uc4 ..> sc10 : <<include>>

'===== Actors connected to supporting use cases
sc1 <-- rpic
sc1 <-- droneRes
sc1 <-- tech
uav --> sc1

droneComm --> sc5
uav --> sc5

sc6 <-- rpic
uav --> sc6

uav --> sc8
sc8 <-- missComm
sc8 <-- visMod

uav --> sc10
sc10 <-- atc

```
All actors, whether they are primary or secondary actors, are represented equally. Interactions with supporting use cases are marked with dashed arrows going **from the main use case to the supporting use case**, and should have the "<\<include>>" label to denote this relationship. 

Arrows can be imagined as "input" going from one actor/use case to another use case. Arrows can also go from a use case to an actor, if information is given back to the actor.

Example from the lecture slides:
![500](_attachments/Pasted%20image%2020250111002912.png)

### Class Diagrams
There are three different **types of classes:**
- Conceptual Classes: Should capture domain entities with no regard to the actual implementation.
- Design Classes: Should capture design entities without overly committing to implementation details
- Implementation Classes: Should capture the physical model (e.g. strongly influenced by programming language)

Class diagrams describe the **static relationships** between classes of a system. These relationships must always be true. Classes can even represent physical entities (e.g. the drones themselves), but that doesn't always have to be the case. 

The following is based on the UE. Example from my homework (E3). I don't know how we got full points for it, because we used the wrong arrows everywhere.
- (Bullet points to allow for folding)
	- ![](_attachments/Group01_Assignment3%20-%20converted.pdf)

The connectors represent the passing of messages or method invocations, e.g. associations, aggregation or generalization. The simple connectors should also have cardinalities. The different arrow types are listed below:
![](_attachments/Pasted%20image%2020250111004426.png)
While aggregation and composition both refer to a part-of relationship, there is one important difference: In an aggregation, the child can exist independent from its parent, whereas in a composition, the child only exists for the lifetime of the parent.

Classes should look as follows:
![](_attachments/Pasted%20image%2020250111004541.png)
#### Examples from the lecture slides
![](_attachments/Pasted%20image%2020250111004238.png)
A Domain Class example
![](_attachments/Pasted%20image%2020250111004400.png)
A Design Class example
![](_attachments/Pasted%20image%2020250111004603.png)
An Implementation Class example
![](_attachments/Pasted%20image%2020250111004623.png)
#### Additional Concepts in Classes
**Constraint rules** allow for the modeling of post conditions and invariants, for example: 
![200](_attachments/Pasted%20image%2020250111004810.png)
**Derived associations and attributed** are sometimes denotes as follows:
![150](_attachments/Pasted%20image%2020250111005243.png)
**Interfaces and abstract classes** can be marked as such:
![200](_attachments/Pasted%20image%2020250111005331.png)
**Qualified Associations** have a qualifier that is used to select and object (or objects) from a larger set of related objects.
![500](_attachments/Pasted%20image%2020250111005630.png)
**Association classes** can be used to denote that a class is related to an association rather than an actual class.
![500](_attachments/Pasted%20image%2020250111005806.png)
**Parameterized classes** may also be marked as follows:
![300](_attachments/Pasted%20image%2020250111005918.png)
The following concepts were also mentioned, but never given examples: Instantiated Class, Utility Class, Meta-Class, Visibility (public, private, protected).
### Sequence Diagrams
The following example is from our homework (E3). Note that we received the following feedback: all sync messages (arrowheads filled in black) need return messages (dotted lines).
![](_attachments/Group01_Assignment3%20-%20converted-2.pdf)
**alt** defines a conditional. In the above example, objectDetectedEvent() is called if \[objDetectionConfidence > VisionDetection_Threshhold] (as defined in the Dronology). What's missing here is the return message, a simple arrow with an "ack" would suffice. 

An "else" block can be defined by splitting the alt block into two parts, separated by a dotted line, in addition to a second condition in the else block. Such a case is shown in the example from the UE slides further down.

**loop** defines a loop (who would have thunk). The condition for the loop to remain active is given in square brackets. Everything in the loop box is considered to be within the loop.

Every arrow typically represents a function call. For example, UAV calls the FlightManagementService's objectDetectedEvent() method.

The components were defined in the UE as follows:
![500](_attachments/Pasted%20image%2020250111013425.png)
Additional notes:
- The bar, described as "Activations" above, should represent the time that the class remains active. 
- Actors should only be represented by a stick figure if they aren't an actual system component. In our Homework, UAV was provided as a main actor, but UAV is a component in Dronology and was therefore represented as such.
- It is possible to use dotted arrows to describe streams/continuous responses.
- Responses can also go "forwards" if a function call triggers a call to another component.

Example from the UE slides:
![](_attachments/Pasted%20image%2020250111014046.png)
### State Machine Diagram
This example is from our homework, and was given full marks:
![500](_attachments/Pasted%20image%2020250111013821.png)
In the UE, the different parts were described as follows:
![500](_attachments/Pasted%20image%2020250111013920.png)
Example from the UE:
![500](_attachments/Pasted%20image%2020250111014001.png)
### Other diagrams
The following diagrams were not covered in the Exercises.

**Collaboration diagrams** are useful for understanding the static connection/configuration of objects, instead of just the sequence.
![500](_attachments/Pasted%20image%2020250111015115.png)
**Package Diagrams** help in breaking down large software systems into smaller pieces. Think of packages in Java. Packages are used
![500](_attachments/Pasted%20image%2020250111015314.png)
**Activity diagrams** 
![500](_attachments/Pasted%20image%2020250111015407.png)
**Deployment Diagrams**
![500](_attachments/Pasted%20image%2020250111015505.png)