---
obsidianUIMode: preview
---

```dataviewjs
const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object
dv.el("button", "Add problem").addEventListener('click', tp.user.create_leetcode_problem)
```
<br>

---
---

```dataview
TABLE WITHOUT ID
link(file.path, number + ". " + file.name) AS "Name",
sa + difficulty + se AS "Difficulty",
sa + choice(status, "✅", "❌") + se AS "Status",
sa + hints-used + se AS "hints",
sa + runtime-beats + se AS "Runtime beats [%]",
sa + memory-beats + se AS "Memory beats [%]"
FROM "Leetcode"
WHERE file.name != "Leetcode" AND file.folder != "Leetcode/_attachments"
SORT number ASC

FLATTEN "<span style='display:flex; justify-content: center;'>" AS sa
FLATTEN "</span>" AS se
```
 ---
 ---
 
```dataview
TABLE WITHOUT ID
styleStart 
+ round(sum(map(rows, (r) => default(r.runtime-beats, 0)))/length(rows), 2) 
+ styleEnd 
AS "Avg. Runtime beats",

styleStart 
+ round(sum(map(rows, (r) => default(r.memory-beats, 0)))/length(rows), 2) 
+ styleEnd 
AS "Avg. Memory beats"

FROM "Leetcode"
WHERE file.name != "Leetcode" AND file.folder != "Leetcode/_attachments"
GROUP BY true

FLATTEN "<span style='display:flex; justify-content: center;  font-size: 30px'>" AS styleStart
FLATTEN "%</span>" AS styleEnd
```
