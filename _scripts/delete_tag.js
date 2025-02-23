module.exports = async () => {
    const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object

    const include = tp.system.suggester(x => x === 'include', ['include', 'exclude'])

    const path = tp.system.prompt(`Enter the path where tags should ${!include && "not"} be deleted.`)

    const tag = tp.system.prompt("Enter the name of the tag that should be deleted.")
}