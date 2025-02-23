function getParentFolder() {
    const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object
    const folders = tp.file.folder(true).split('/')
    return folders[folders.length - 2]
}
module.exports = getParentFolder;