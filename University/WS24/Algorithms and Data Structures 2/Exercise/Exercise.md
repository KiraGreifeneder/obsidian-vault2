---
type: university-course
course-id: "340.325"
course-type: Exercise
course-allocation: Sequential
course-attendance: Optional
course-lecturers: Markus Jäger
etcs: 1.5
---
# `=link(this.file.path, regexreplace(this.file.folder, "^University\/[^\/]+\/([^\/]+)\/[^\/]+$", "$1"))`

## Evaluation
5 UEs worth 20 points each, 50% required. UEs usually published on Wednesdays.
- 24h grace period, maximum of 6 points within this period
- tutor.algo2.cs@pervasive.jku.at for questions (use tutor name lmao)
- Interfaces must not be changed
- Allowed libraries will be announced
- Write comments
No UE exam.
## On Absence
Nothing special to do.
## Course to-do
- Enter first assignment [due:: 14.10.2024]

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
Forum questions that were answered in the UE will not be answered online.

Only hand in the java source files (.java), or PDF for pen and paper. 
Naming: k12242829-assignment01.zip

In the subject, mention "AD2 exercise CS: " to indicate that you are a CS student...