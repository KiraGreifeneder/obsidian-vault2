---
type: university-course
course-id: "510.509"
course-type: Exercise
course-allocation: Sequential
course-attendance: Mandatory
course-lecturers: Stefan Rass
etcs: 1.5
---
# `=link(this.file.path, regexreplace(this.file.folder, "^University\/[^\/]+\/([^\/]+)\/[^\/]+$", "$1"))`

## Evaluation
- 5 Übungsbeispiele Wöchentlich
- Freiwillige Präsentationen, Rass will solve the problem if no one wants to -> Punkte
- Beispiele sind unterschiedlich viele Punkte Wert.
- Only cross the things that you can present but oh well lmao
- Can even do as group
- Points will be removed if excercises are crossed that haven't been handed in.
- You need to be present for the points to count!
- 60 points for UE comes from VL, another 40 from UE

## On Absence
No need to do the exercise sheet, points will not be counted.
No e-mail necessary. When not present, you cannot send an e-mail to get crosses accepted. 
## Course to-do


## Assignments

```dataviewjs
const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object
dv.el("button", "New Assignment").addEventListener('click', () => tp.user.create_assignment(false))
```

```dataview
TABLE assignment-status AS "Status", assignment-deadline AS "Deadline"
WHERE file.folder = this.file.folder AND type = "university-assignment"
SORT file.name ASC
```

## Notes
## Point tracker
Blatt 1: 4 points
Blatt 7: 1 point mitarbeit
Blatt 10: I have no clue bc I messed up
Blatt 11: probably 2?



```dataviewjs
setTimeout(() => {
	// make table headers left-aligned
	const headers = document.getElementsByTagName('th');
	for (let header of headers) {
		header.setAttribute("align", "left")
	}
}, 500)
```