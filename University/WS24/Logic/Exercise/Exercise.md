---
type: university-course
course-id: "338.002"
course-type: Exercise
course-allocation: Direct
course-attendance: Mandatory
course-lecturers: Martina Seidl
etcs: 1.5
---
# `=link(this.file.path, regexreplace(this.file.folder, "^University\/[^\/]+\/([^\/]+)\/[^\/]+$", "$1"))`

## Evaluation
Weekly excercise sheet, presentations.

## On Absence
Nothing special to do, attendance is always optional for the quiz, exercise, etc.

## Course to-do
- [x] Watch newest logik VL + do exercise
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

```dataviewjs
setTimeout(() => {
	// make table headers left-aligned
	const headers = document.getElementsByTagName('th');
	for (let header of headers) {
		header.setAttribute("align", "left")
	}
}, 500)
```
The assingments in here are the bonuses and labs. The ungraded practice exercises can be found in the VL part.