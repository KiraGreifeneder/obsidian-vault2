module.exports = async (propName, path) => {
    const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object
    const file = app.vault.getAbstractFileByPath(path)
    const fileContent = await app.vault.read(file)
    const frontmatterString = tp.obsidian.getFrontMatterInfo(fileContent).frontmatter
    const matches = frontmatterString.matchAll(/([\w-]+): "?([^\n]+)"?/gm)

    for (const match of matches) {
        if (match[1] === propName)
            return match[2]
    }
}