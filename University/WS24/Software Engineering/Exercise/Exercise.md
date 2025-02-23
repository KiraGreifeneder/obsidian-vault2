---
type: university-course
course-id: "343.001"
course-type: Exercise
course-allocation: Direct
course-attendance: Optional
course-lecturers: 
etcs: 1.5
---
# `=link(this.file.path, regexreplace(this.file.folder, "^University\/[^\/]+\/([^\/]+)\/[^\/]+$", "$1"))`

## Evaluation
8 exercises, grade is the mean value of all points
Assignment 1, 6-8: individual
2 - 5: team

Everyone will be graded on an individual subset of the work

No grace period, unless you let them know in advance.
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
### UE01 slides
![](_attachments/SWE2425%20Introduction.pdf)

### UE02 slides
![](_attachments/E2-Tracing%20Use%20Cases%20to%20EARS%20Requirements.pdf)