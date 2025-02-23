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