module.exports = async () => {
    const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object

    const courseName = await tp.system.prompt('Course Name:')
    if (courseName == null) return;

    const courseType = await tp.system.suggester(x => x, ['Lecture', 'Exercise', 'Combined'])
    if (courseType == null) return;

    const courseTemplate = courseType === 'Lecture' ? tp.file.find_tfile('courseLecture') : tp.file.find_tfile('course')
    if (courseTemplate == null) return;

    const semester = await tp.user.get_current_semester();

    const courseFolder = await app.vault.createFolder(`/University/${semester}/${courseName}/${courseType}/`);
    if (courseFolder == null) return;

    await tp.file.create_new(courseTemplate, courseType, true, courseFolder)
}
