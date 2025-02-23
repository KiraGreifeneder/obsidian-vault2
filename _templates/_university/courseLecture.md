<% '---' %>
type: university-course
course-id: <% `"${await tp.system.prompt('Course ID:')}"` %>
course-type: <% tp.file.title %>
course-allocation: <% await tp.system.suggester(x => x, ['Direct', 'Priority', 'Sequential', 'Manual']) %>
course-attendance:
course-lecturers:
etcs: <% `"${await tp.system.prompt('ETCS:')}"` %>
<% '---' %>
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
<% tp.file.content %>

```dataviewjs
setTimeout(() => {
	// make table headers left-aligned
	const headers = document.getElementsByTagName('th');
	for (let header of headers) {
		header.setAttribute("align", "left")
	}
}, 500)
```