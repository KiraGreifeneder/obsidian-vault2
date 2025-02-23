---
type: university-assignment
assignment-course: "[[Exercise|Software Engineering (Exercise)]]"
assignment-status: Closed
assignment-deadline: 2025-01-14T23:59:00
---
```dataviewjs
dv.el("span", 
	  (dv.el("div", "Kira Greifeneder (k12242829)"), dv.el("div", new Date().toLocaleString("de"))),
	  {attr: {style: "padding-top:100px"}}
)
```
</br>
## Instructions
![](_attachments/E8%20-%20Test%20Case%20Design.pdf)
## Solutions

Case 1: Adding UAVs to a mission
```gherkin
Feature: Mission Planning

Scenario: Successfully adding a UAV to a mission
	Given a mission is being edited in the Mission Planning window
	And a new mission has been defined in the Mission Planning window
	When a UAV is added to the mission
	# create a new box in which other commands such as "Take Off" can 
	# be assigned to a drone
	Then a new timeline should be created
	And the name of the UAV should be at the top of the timeline
```

Case 2: Successfully saving a mission
```gherkin
Feature: Mission Saving

Scenario: Successfully save a mission
	Given a mission is being edited in the Mission Planning window
	And all value entries in the mission are valid
	When the RPIC presses the "Save Mission" button
	Then the mission is saved to the system
	# sidebar listing missions in database
	And the mission appears in the sidebar 
```

Case 3: Inputting invalid values
```gherkin
Feature: Mission Planning Sync

Scenario: Invalid value entered for "Sync (Delay) Points"
	Given a mission is being edited in the Mission Planning window
	And a "Sync (Delay)" block has been assigned to a UAV
	When an invalid value is entered for the "Sync (Delay)" field 
	Then an error message is displayed indicating the value is invalid 
	# user either needs to cancel or enter a valid value
	# therefore the box remains open for the user to try again
	And the modal remains open
```
