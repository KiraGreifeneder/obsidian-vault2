async function refresh_dv() {
    const tp = app.plugins.plugins['templater-obsidian'].templater.current_functions_object

    // uses the keyboard shortcut defined in dataview to refresh all tables. If the shortcut changes, this function needs to be changed too.
    var keyEvent = new KeyboardEvent("keypress", { key: "r", char: "r", ctrlKey: true });
    event_object.dispatchEvent(keyEvent);
}

module.exports = refresh_dv;