tinymce.PluginManager.requireLangPack('easyupload');
tinymce.PluginManager.add('easyupload', function(editor, url) {
	
	function showDialog() {
		editor.windowManager.open({
			title: 'easyupload.DIALOG_TITLE',
			url: url + '/_dialog.htm',
			width: 350,
			height: 135,
			buttons: [{
				text: 'easyupload.CLOSE_WINDOW',
				onclick: 'close'
			}]
		});
	}
	
	// Add a button that opens a window
	editor.addButton('easyupload', {
		tooltip: 'easyupload.TOOLTIP',
		image: url + '/img/upload.png',
		onclick: showDialog
	});

	// Adds a menu item to the tools menu
	editor.addMenuItem('easyupload', {
		text: 'easyupload.MENU_TEXT',
		image: url + '/img/upload.png',
		context: 'insert',
		onclick: showDialog
	});
});
