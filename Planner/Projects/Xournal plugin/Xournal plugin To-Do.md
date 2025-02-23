- [ ] Automatic initial pdf conversion and linking in document
- [ ] Setting path of created xournal files 
## download files
taken from handwritten_notes repo
``` ts
/**
 * Initializes the templates folder if it doesn't exist.
 *
 * @param {Plugin} plugin - The obsidian plugin instance.
 * @throws Will throw an error if there's an issue in creating the folder.
 */
export async function initTemplatesFolder(plugin: Plugin): Promise<void> {
  const templatesFolder = normalizePath(plugin.manifest.dir + TEMPLATE_DIR);

  try {
    await plugin.app.vault.createFolder(templatesFolder);
  } catch (e) {
    // Ignore error if folder already exists
  }

  const defaultTemplatePath = normalizePath(templatesFolder + "/blank.pdf");
  if (await fileExists(plugin.app, defaultTemplatePath)) return;
  // Download default template if it doesn't exist
  const TEMPLATE_URL = "https://mag.wcoomd.org/uploads/2018/05/blank.pdf";
  await downloadFile(plugin.app, TEMPLATE_URL, defaultTemplatePath);
  // console.log("Downloaded template to " + defaultTemplatePath);
}
```
# Archived

- [x] Default template if none given, download. see notes below at [[#download files]] 🔒 [[2024-07-17]] 🕸️ Xournal plugin To-Do
- [x] revert name changes and tsc build files 🔒 [[2024-07-17]] 🕸️ Xournal plugin To-Do
- [x] Store template in code, convert instead of downloading 🔒 [[2024-07-17]] 🕸️ Xournal plugin To-Do
	- [x] createTemplate() in actions
		- [x] should convert the base64 to an arrayBuffer and create a file in the file system using the createBinary method
	- [x] store template as a string in a js file as base64
	- [x] remove download.ts
