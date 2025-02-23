module.exports = async () => {
    const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object
    return await tp.user.get_prop('current-semester', 'University/University.md')
}