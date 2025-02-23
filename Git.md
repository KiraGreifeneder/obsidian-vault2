---
log-num: "20"
obsidianUIMode: source
---
---
## Actions
### Windows

```dataviewjs
const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object

dv.el("button", "Pull").addEventListener('click', async () => {
	new Notice("Pulling, please wait...")
	const res = await tp.user.ps({Cmd: "git pull | Out-String"})
	document.getElementById("console").textContent = res
})

dv.el("span", "&nbsp;&nbsp;&nbsp;&nbsp;")

dv.el("button", "Commit").addEventListener('click', async () => {
	let message = await tp.system.prompt("Add a commit msg:")
	if (message === '') message = "vault backup"
	await tp.user.ps({Cmd: "git add ."})
	let res = await tp.user.ps({Cmd: "git commit -m '" + message + "' 2>&1 | Out-String"})
	document.getElementById("console").innerHTML = res
})

dv.el("span", "&nbsp;&nbsp;&nbsp;&nbsp;")

dv.el("button", "Push").addEventListener('click', async () => {
	new Notice("Pushing, please wait...")
	let res = await tp.user.ps({Cmd: "git push -q 2>&1 | Out-String"})
	if (res === "") res = "Vault is backed up."
	document.getElementById("console").innerHTML = res
})
```

<code id="console" >
> output will show up here
</code>
---
## Commit history
```dataviewjs
const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object

let logs = await tp.user.sh({Cmd: "'flatpack run com.visualstudio.code'"})

```

logs = logs.split("\n")
logs.length = parseInt(await tp.user.get_prop("log-num", "Git.md"))

const regex = /(\w+ \w+ \d+) (\d+:\d+):\d+ \d+ \+\d+ ([^\n]+)/
	
dv.table([], 
	logs.map(l => [
		l.match(regex)[1], 
		l.match(regex)[2], 
		l.match(regex)[3]
	])
)


```dataviewjs
const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object

let logs = await tp.user.ps({Cmd: "git log --format='%cd %s' | Out-String"})
logs = logs.split("\n")
logs.length = parseInt(await tp.user.get_prop("log-num", "Git.md"))

const regex = /(\w+ \w+ \d+) (\d+:\d+):\d+ \d+ \+\d+ ([^\n]+)/
	
dv.table([], 
	logs.map(l => [
		l.match(regex)[1], 
		l.match(regex)[2], 
		l.match(regex)[3]
	])
)

```

ther is 