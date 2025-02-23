module.exports = async () => {
    const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object

    const assignmentTemplate = tp.file.find_tfile('lectureNote')
    if (assignmentTemplate == null) return;

    let assignmentFolder = app.workspace.getActiveFile()?.parent
    if (assignmentFolder == null) return;

    await tp.file.create_new(assignmentTemplate, null, true, assignmentFolder)
}
