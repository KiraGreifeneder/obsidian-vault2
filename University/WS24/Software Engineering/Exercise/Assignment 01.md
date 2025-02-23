---
type: university-assignment
assignment-course: "[[Exercise|Software Engineering (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2024-10-22T23:59:00
---
Kira Greifeneder (k12242829), Group 1

## Instructions

[Link to Assignment](https://moodle.jku.at/mod/assign/view.php?id=10661322&action=view)
## Part 1
### Q1 - What is Dronology about, and what are its two main goals? 
**What is Dronology about?:** Dronology is an open source system which aims to automate, control and most importantly coordinate drones. It has been used previously to successfully carry and drop a defibrillator, and demoed a search and rescue operation. 

**Goal 1:** To provide a research environment for software and systems engineering, mainly around aspects surrounding runtime monitoring, safety analysis, and product line development.

**Goal 2:** The system itself has a purpose outside of research as well. By providing a framework for controlling and coordinating drones, formations and swarms, Dronology can provide valuable support many fields. These include search-and-rescue, surveillance, and scientific data collection.
### Q2 - Layers of the Dronology architecture
The Dronology architecture consists of the following layers:
- Ground control station (GCS)
- CORE
- Services
- UI

All communication is bidirectional. More specifically:
- GCS <-> Core
- Core <-> Services
- Services <-> UI

The core of Dronology communicates with Ground Control Station through the GCS middleware, and the GCS handles connections to the drones and can then execute control over them. The CORE layer of the Dronology system also receives drone related data from the GCS.
### Q3 - Who are the Dronology stakeholders?
- The Kit is the Dronology system itself.
- Our System:
	- The drone pilots/users
	- In the search and rescue scenario: citizens in need of help, police
	- In the defibrillator project: first responders, person in need of defibrillator
- The containing system:
	- In rescue scenarios: medical system, hospital staff, emergency dispatchers
	- Local government
- Wider environment:
	- Developer
	- FAA Regulators
	- General public
	- Drone manufacturers

Negative stakeholders might be people who want to abuse the system to cause harm, e.g. start a wildfire or disrupt an event.
### Q4 - Which are the available artifacts for Dronology?
The following artifacts are available to us in the dataset:
#### Components
These components are shown in the architecture, and are the different parts of program that server a specific function. All the components together make up the whole system.

Examples: FlightRouteManager, AreaMappingService, UI - Route Assignment
#### Use cases
5 different use cases are available, which contain actors, stakeholders, and different scenarios for that specific use case. They describe how the system is used at an abstract level, and what outcomes and behaviors we expect from it.

Examples for the use Case "River Search and Rescue"
- Primary Actor: Drone Commander
- Main Success Scenario: UAVs are placed in their launch positions
#### Supporting use cases
These are smaller, more specific use cases that are a part of a bigger use case. They have the same structure as a normal use case, but the information tends to describe an action that is necessary for another bigger use case.
#### Requirements
Each requirement describes a very specific behavior or attribute that the system should have. These can pertain to functionality, performance, external interfaces and more. They usually come from the customer and other stakeholders, and must therefore be followed.
## Part 2 (UC4)
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
draw.io version below in case it is important for grading (since the slides said we had to use
it and I only realized after I had finished the HW)... Please look at the above plantUML
version though, I think it's easier to read, and the diagrams are the same otherwise. Sorry for the inconvenience.
![](_attachments/Untitled%20Diagram.drawio(1).png)