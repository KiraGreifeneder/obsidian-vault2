---
type: university-course
course-id: "336.032"
course-type: Lecture
course-allocation: Direct
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


## Lecture notes

```dataviewjs
const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object
dv.el("button", "New Lecture Note").addEventListener('click', () => tp.user.create_lecture_note())
```

```dataview
TABLE WITHOUT ID 
link(file.name) AS "Lecture",
c + completion-status + e AS "Status"
WHERE file.folder = this.file.folder AND type = "university-lecture-note"
SORT file.ctime ASC

FLATTEN "<span style='display:flex; justify-content: center;'>" AS c
FLATTEN "</span>" AS e

FLATTEN "<span style='display:flex; justify-content: left;'>" AS l
```
## Notes

