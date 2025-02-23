---
type: university-course
course-id: "338.001"
course-type: Lecture
course-allocation: Direct
course-attendance: Optional
course-lecturers: Martina Seidl
etcs: 3
---
# `=link(this.file.path, regexreplace(this.file.folder, "^University\/[^\/]+\/([^\/]+)\/[^\/]+$", "$1"))`

## Evaluation
Joint grade: same lecture for VO and UE

Option 1:
- Weekly tests (for every lecture)
	- Can do a bonus exercise before quiz, worth one point that counts towards the quiz (but can't be more than 5 on the quiz)
	- Quiz worth 5 points, closed book
- Each module needs to be passed
- Lab exercises if you fuck up the test (one lab every module or 3 lectures/tests)

If option 1 doesn't work out:
- Big exam at the end of the semester, all content (moodle exam)
## On Absence
Nothing special to do, attendance is always optional for the quiz, exercise, etc.
## Course to-do
- [x] Watch second lecture for Logic [due::21.10.2024]
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
Lectures are a "live exercise class", whereas the UEs are just quizzes? 
It is expected that we watch the lecture video in advance.

