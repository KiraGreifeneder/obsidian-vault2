module.exports = async () => {
    const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object

    const name = await tp.system.prompt('name:')

    const template = tp.file.find_tfile('leetcodeProblem')
    
    await tp.file.create_new(template, name, true, "Leetcode")
}
