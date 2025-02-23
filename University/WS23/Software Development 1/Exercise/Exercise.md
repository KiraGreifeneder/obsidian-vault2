---
type: university-course
course-id: "339.163"
course-type: Exercise
course-allocation: Sequential
course-attendance: 
course-lecturers: 
etcs: 3
---
# `=link(this.file.path, regexreplace(this.file.folder, "^University\/[^\/]+\/([^\/]+)\/[^\/]+$", "$1"))`

## Evaluation


## On Absence
Nothing special to do.
E-Mail to lecturer@jku.at.
Always mention student id and course id in the subject line.

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
