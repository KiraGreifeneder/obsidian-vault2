---
obsidianUIMode: preview
current-semester: SS25
---
---
---
## Courses this semester

```dataviewjs
const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object
dv.el("button", "New Course").addEventListener('click', tp.user.create_course)
```

```dataview
TABLE WITHOUT ID	
	regexreplace(file.folder, "^University\/[^\/]+\/([^\/]+).*$", "$1") AS "Name",
    styleStart + link(file.path, course-id) + styleEnd AS "ID",
    styleStart + course-type + styleEnd AS "Type",
    styleStart + course-attendance + styleEnd AS "Attendance",
    course-lecturers AS "Lecturers",
	styleStart + etcs + styleEnd AS "ETCS"
FROM "University"
WHERE type = "university-course" AND regexreplace(file.folder, "^University\/([^\/]+)\/[^\/]+.*$", "$1") = this.current-semester
SORT Name DESC, Type DESC

FLATTEN "<span style='display:flex; justify-content: center;'>" AS styleStart
FLATTEN "</span>" AS styleEnd
```

```dataview
TABLE WITHOUT ID
styleStart + sum(map(rows, (r) => default(r.etcs, 0))) + styleEnd AS "Total planned ETCS for this semester"
FROM "University"
WHERE type = "university-course" AND regexreplace(file.folder, "^University\/([^\/]+)\/[^\/]+.*$", "$1") = this.current-semester
GROUP BY true

FLATTEN "<span style='display:flex; justify-content: center;  font-size: 50px'>" AS styleStart
FLATTEN "</span>" AS styleEnd
```
---
---
## Assignments
Note: assignments should either be Expected, New, Active, Resolved, or Closed.

```dataviewjs
const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object
dv.el("button", "New Assignment").addEventListener('click', () => tp.user.create_assignment(true))

dv.el("span", "&nbsp;&nbsp;&nbsp;&nbsp;")

dv.el("button", "Create Assignments in bulk from JSON").addEventListener('click', () => tp.user.create_bulk_assignments())
```
```dataviewjs

```

```dataviewjs
const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object
const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000; 
const currentSemester = await tp.user.get_current_semester();
	
const groups = dv.pages('"University"')
    .where(a => a['type'] === 'university-assignment' && isRelevant(a)
	)
    .groupBy(a => a['assignment-course'])

for (const group of groups) {
	const regex = /([^/]+)\/[^/]+\/[^/]+$/; 
	const courseName = group.key.path.match(regex);
    dv.header(3, courseName[1])
    dv.table([], group.rows
        .sort(a => a.file.name)
        .map(a => formatAssignment(a) ?? []))
}

function formatAssignment(assignment) {
    const status = assignment['assignment-status']
    const deadline = assignment['assignment-deadline']

    let statusColor = ''
    if (status === 'Expected')  statusColor = '❔'
    if (status === 'New')  statusColor = '🔲'
    if (status === 'Active')   statusColor = '🟦'
    if (status === 'Resolved') statusColor = '🟨'
    if (status === 'Closed') statusColor = '🟩'

    return [ assignment.file.link, statusColor + status, getDeadlineString(deadline, status) ]
}

function isRelevant(a) {
	const semesterRegex = "^University\/([^\/]+)\/[^\/]+.*$"
	const isInCurrentSemester = a.file.path.match(semesterRegex)[1] === currentSemester
	
	const isClosed = a['assignment-status'] === 'Closed'
	const millisSinceDeadline = Date.now() - a['assignment-deadline']
	const isInRange = (millisSinceDeadline < oneWeekInMilliseconds) // within last 7 days or future

	return !isInCurrentSemester && !isClosed || isInCurrentSemester && isInRange
		
}

function getDeadlineString(deadline, status) {
	let now = new Date()
	let deadlineString = 'unknown'
    if (deadline != null) deadlineString = 
dv.tryEvaluate('dateformat(deadline, "dd.MM.yy, HH:mm")', { deadline })

	let color = 'orange'
	let daysUntil = "-"
	let hoursUntil = ""
    if (deadline != null) {
	    hoursUntil = Math.round(
			(new Date(deadline).getTime() - now) / 1000 / 60 / 60
		)
		daysUntil = Math.round(hoursUntil / 24)
	    if (deadline <= now) {
		    color = status === 'Closed' ? 'green' : 'red'
	    } else if (daysUntil > 7) {
		    color = 'gray'
	    } else {
			switch (status) {
				case 'Closed': color = "lightgreen"; break;
				case 'Resolved': color = "yellow"; break;
				default: color = 'orange'; break;
			}
	    }
    }
	return `<span style='display:flex;justify-content:right;color:${color}'>${deadlineString} (${daysUntil}d, ${hoursUntil % 24}h)</span>` 
}
```

<br>

---
---
## To-do
```dataviewjs
const tasks = dv.pages('"University"')
	.file.tasks
	.where(t => !t["checked"])
dv.taskList(tasks)

const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object

let hasBeenClicked = false
dv.el("button", "Show past tasks").addEventListener('click', () => {
	if (hasBeenClicked) return
	
	hasBeenClicked = true
	
	dv.header(3, "Past tasks")
	const tasks = dv.pages('"University"')
		.file.tasks
		.where(t => t["checked"])
	dv.taskList(tasks)
})

dv.el("br")
dv.el("br")

```
---
---
## Exam dates

## All courses

```dataview
TABLE WITHOUT ID	
	styleStart + regexreplace(file.folder, "^University\/([^\/]+)\/.*$", "$1") + styleEnd AS "Semester",
	regexreplace(file.folder, "^University\/[^\/]+\/([^\/]+).*$", "$1") AS "Name",
	
    styleStart + link(file.path, course-id) + styleEnd AS "ID",
    
    styleStart + course-type + styleEnd AS "Type"
    
FROM "University"
WHERE type = "university-course"
SORT substring(regexreplace(file.folder, "^University\/([^\/]+)\/.*$", "$1"), 2, 4) ASC, substring(regexreplace(file.folder, "^University\/([^\/]+)\/.*$", "$1"), 0, 2) ASC

FLATTEN "<span style='display:flex; justify-content: center;'>" AS styleStart
FLATTEN "</span>" AS styleEnd
```

