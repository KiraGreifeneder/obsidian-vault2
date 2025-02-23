module.exports = async (promptCourse) => {
    const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object

    const assignmentTemplate = tp.file.find_tfile('assignment')
    if (assignmentTemplate == null) return;

    let assignmentFolder;

    const semester = await tp.user.get_current_semester()

    if (promptCourse) {
        const universityFolder = app.vault.getAbstractFileByPath('University');
        if (universityFolder == null) return;

        const courseFolderRegex = /^University\/[^\/]+\/([^\/]+)\/([^\/]+)$/
        const courseFolders = []

        tp.obsidian.Vault.recurseChildren(universityFolder, folder => {
            if (folder instanceof tp.obsidian.TFolder && courseFolderRegex.test(folder.path) && folder.path.split('/')[1] === semester)
                courseFolders.push(folder)
        })

        assignmentFolder = await tp.system.suggester(folder => folder.path.replace(courseFolderRegex, '$1 ($2)'), courseFolders)
    } else {
        assignmentFolder = app.workspace.getActiveFile()?.parent
    }

    if (assignmentFolder == null) return;

    await tp.file.create_new(assignmentTemplate, null, true, assignmentFolder)
}
