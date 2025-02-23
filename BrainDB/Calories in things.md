---
obsidianUIMode: preview
---
```dataviewjs
const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object

const path = dv.io.normalize("_data/calories.json")
const jsonString = await dv.io.load(path)
let calorieData = JSON.parse(jsonString) ?? []
console.log(jsonString)

async function forceNonEmptyPrompt(text) {
	const res = await tp.system.prompt(text)
	if (!res) throw new Error("Input cannot be empty")
	return res
}

dv.el("button", "➕ Add an item").addEventListener('click', async () => {
	try {
		const name = await forceNonEmptyPrompt("Name of food item:")
		const amount = await forceNonEmptyPrompt("Amount (include unit):")
		const calories = await forceNonEmptyPrompt("Calories [kcal] in " + amount + ":")
		calorieData.push({name: name, amount: amount, calories: calories})
		console.log(JSON.stringify(calorieData))
			await this.app.vault.adapter.write(path, JSON.stringify(calorieData))
		new Notice("Saved to file.")
	} catch (e) {
		new Notice(e)
	}
})

dv.el("span", "&nbsp;&nbsp;&nbsp;&nbsp;")

dv.el("button", "❌ delete an item").addEventListener('click', async () => {
	try {
		const itemToDelete = await tp.system.suggester(calorieData.map(x => x.name.concat(", ", x.amount, ", ", x.calories)), calorieData)

		let newData = []
		for (let data of calorieData) {
		console.log(data)
			if (data.name !== itemToDelete.name
				&& data.amount !== itemToDelete.amount
				&& data.calories !== itemToDelete.calories
			) { newData.push(data) }
		}
		
		calorieData = newData;
		await this.app.vault.adapter.write(path, JSON.stringify(calorieData))

		new Notice("Deleted item. May require a refresh of the page.")
	} catch {
		new Notive("Something went wrong while deleting the item.")
	}
})

dv.table(["Item", "Amount", "kcal"], 
	calorieData
		.sort((a, b) => a.name.localeCompare(b.name))		 
		.map(x => [x.name, x.amount, x.calories])
)

// make table headers left-aligned
const headers = document.getElementsByTagName('th');
for (let header of headers) {
	header.setAttribute("align", "left")
}
```
