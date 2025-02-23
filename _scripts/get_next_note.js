module.exports = (format, placeholder, digits = 2) => {
    const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object
    const dv = app.plugins.plugins.dataview.api

    const regex = new RegExp(format.replace(placeholder, '(\\d+)'))
    let path = tp.file.folder(true)

    if (path.startsWith('/')) path = path.substring(1)

    const noteIndex = dv.pages(`"${path}"`)
        .map(page => {
            if (page.file.folder !== path) return null
            const result = page.file.name.match(regex)
            return result ? result[1] : null
        })
        .sort(x => x)
        .last()

    return format.replace(placeholder, `${Number(noteIndex ?? 0) + 1}`.padStart(digits, '0'))
}
