---
type: university-course
course-id: "344.023"
course-type: Exercise
course-allocation: Sequential
course-attendance: Mandatory
course-lecturers: 
etcs: 1.5
---
# `=link(this.file.path, regexreplace(this.file.folder, "^University\/[^\/]+\/([^\/]+)\/[^\/]+$", "$1"))`

## Evaluation
 5 Assigments with multiple tasks
 - practical programming in python
 - pen and paper problems
 - theory questions
 - 20 points per assignment
 
 Theory Quizzes - weekly? in person
 - Moodle quiz
 - closed book
 - If you did the programming ex you should be fine
 - 5 points per quiz
 - 5-10 mins

Grading:
- total of 100 points can be reached
- automatic tests and code reviews
- 87.5% = 1
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
