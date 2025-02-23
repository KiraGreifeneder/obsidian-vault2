---
type: university-course
course-id: "340.300"
course-type: Lecture
course-allocation: Direct
course-attendance: Optional
course-lecturers: Alois Ferscha
etcs: 3
---
# `=link(this.file.path, regexreplace(this.file.folder, "^University\/[^\/]+\/([^\/]+)\/[^\/]+$", "$1"))`

## Evaluation


## On Absence


## Course to-do
- [x] Watch algodat lecture video 1
- [x] Watch algodat lecture video 2
## Lecture notes

```dataviewjs
const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object
dv.el("button", "New Lecture Note").addEventListener('click', () => tp.user.create_lecture_note())
```

```dataview
TABLE WITHOUT ID 
styleStart + link(file.name) + styleEnd AS "Lecture",
styleStart + completion-status + styleEnd  AS "Status"
WHERE file.folder = this.file.folder AND type = "university-lecture-note"
SORT file.name ASC

FLATTEN "<span style='display:flex; justify-content: center;'>" AS styleStart
FLATTEN "</span>" AS styleEnd
```
## Notes

