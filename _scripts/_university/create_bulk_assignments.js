module.exports = async () => {
    const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object

    const assignmentTemplate = tp.file.find_tfile('expectedAssignment')
    if (assignmentTemplate == null) return;

    let assignmentFolder;

    const semester = await tp.user.get_current_semester()

    const universityFolder = app.vault.getAbstractFileByPath('University');
    if (universityFolder == null) return;

    const courseFolderRegex = /^University\/[^\/]+\/([^\/]+)\/([^\/]+)$/
    const courseFolders = []

    tp.obsidian.Vault.recurseChildren(universityFolder, folder => {
        if (folder instanceof tp.obsidian.TFolder && courseFolderRegex.test(folder.path) && folder.path.split('/')[1] === semester)
            courseFolders.push(folder)
    })

    assignmentFolder = await tp.system.suggester(folder => folder.path.replace(courseFolderRegex, '$1 ($2)'), courseFolders)

    if (assignmentFolder == null) return;

    const dataFolderFiles = []
    tp.obsidian.Vault.recurseChildren(app.vault.getAbstractFileByPath('_data'), folder => {
        if (folder instanceof tp.obsidian.TFile)
            dataFolderFiles.push(folder)
    })

    let dates = await tp.system.suggester(folder => folder.path, dataFolderFiles)
    dates = await app.vault.read(dates)
    dates = JSON.parse(dates)

    for (let date of dates) {
        console.log("working on", date)
        const file = await tp.file.create_new(assignmentTemplate, null, true, assignmentFolder)   
        app.fileManager.processFrontMatter(file, (fm) => {
            fm['assignment-deadline'] = date;
        })
    }
}
