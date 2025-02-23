---
obsidianUIMode: preview
---

```dataviewjs
const entries = dv.pages('"BrainDB"')
    .where(a => !a.file.folder.includes("_attachments"))
    .sort(a => a.file.path, "asc")

function getDir(path) {
	const segments = path.split("/")
	segments[0]="."
	segments.pop()
	const dir = segments.join("/")
	return dv.el(
		"span", 
		dir, 
		{attr: {style: "color:".concat(getColor(dir))}}
	)
}

function getShortenedDate(date) {
	const dayMonthYear = [date.c.day, date.c.month, date.c.year]
	return dayMonthYear.join(".")
}

const colors = ["white", "mediumpurple", "lightgreen", "steelblue", "darkturquoise", "indianred", "goldenrod"]
let lastPath = null
let colorIdx = 0

function getColor(path) {
	lastPath ?? path
	let color = colors[colorIdx]
	if (path !== lastPath) {
		if (++colorIdx >= colors.length) {
			colorIdx = 0
		}
		color = colors[colorIdx]
		console.log(path, colorIdx, color)
	}
	lastPath = path
	return color
}

dv.table(["Dir", "Name", "Modified", "Size"], entries.values.map(v => [getDir(v.file.path), v.file.link, getShortenedDate(v.file.cday), v.file.size]))

setTimeout(() => {
	const headers = document.getElementsByTagName('th');
	for (let header of headers) {
		header.setAttribute("align", "left")
	}
}, 300)
```

