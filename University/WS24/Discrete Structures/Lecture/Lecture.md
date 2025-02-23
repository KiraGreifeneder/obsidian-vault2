---
type: university-course
course-id: "510.505"
course-type: Lecture
course-allocation: Direct
course-attendance: Optional
course-lecturers: Stefan Rass
etcs: 3
---
# `=link(this.file.path, regexreplace(this.file.folder, "^University\/[^\/]+\/([^\/]+)\/[^\/]+$", "$1"))`

## Evaluation


## On Absence
Slides contain all material necessary.

## Course to-do

- do selbsttest [due::05.11.2024]
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
Should read slides before lecture i guess.
Exam:
- Multiple choice
- Moodle
- 90 mins
- Closed book

Points are given for finding mistakes in slides.

Blaue Folien -> Prüfungsrelevant
Rote Folien -> Nicht Prüfungsrelevant

Ty Imanuel for the best summary I have ever seen
![](_attachments/DiskrStr_Zsfg.pdf)