( function () {
	'use strict';
	function indetifyExtension(file) {
		if (_image(file)) return 'image';
		if (_video(file)) return 'video';
		if (_audio(file)) return 'audio';
		else return 'attachment';
	}

	function _image(file) {
		return /(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i.exec(file);
	}

	function _video(file) {
		return /(\.mp4|\.avi|\.mkv|\.h264|\.webm|\.ogg|\.wmv)$/i.exec(file);
	}

	function _audio(file) {
		return /(\.mp3|\.wav|\.ogg)$/i.exec(file);
	}

	String.prototype.interpolate = String.prototype.interpolate || function(props) {
		return this.replace(/\{(\w+)\}/g, function(match, expr) {
			return (props || window)[expr];
		});
	};

	$('#dialog_text').text(top.tinymce.i18n.data[top.tinymce.i18n.getCode()]['easyupload.DIALOG_TEXT']);

	var editor = top.tinymce.activeEditor,
		defaults = {
			templates: {
				video: '<video controls><source src="{url}"></video>',
				audio: '<audio controls><source src="{url}"></audio>',
				image: '<img src="{url}">',
				attachment: '<a href="{url}" target="_blank">{filename}</a>'
			}
		},
		fileName = "";

	defaults.templates = $.extend({}, defaults.templates, editor.getParam('easyupload_templates'));

	$('#easyupload_input').fileupload({
		url: editor.getParam('easyupload_url'),
		dataType: 'json',
		beforeSend: function (request) {
			if (typeof editor.getParam('easyupload_beforeSend') === "function") {
				editor.getParam('easyupload_beforeSend')(request);
			}
		},
		done: function (e, data) {
			if (typeof editor.getParam('easyupload_success') === "function") {
				editor.getParam('easyupload_success')(e, data);
			} else {
				editor.insertContent(
					defaults.templates[indetifyExtension(fileName)]
						.interpolate({url: data.result.url, filename: fileName}));
			}
		},
		fail: function (e, data) {
			if (typeof editor.getParam('easyupload_fail') === "function") {
				editor.getParam('easyupload_fail')(e, data);
			}
		},
		progressall: function (e, data) {
			if (typeof editor.getParam('easyupload_progressall') === "function") {
				editor.getParam('easyupload_progressall')(e, data);
			} else {
				$('#progress .progress-bar').css(
					'width',
					progress + '%'
				);
			}
		}
	});

	$('#easyupload_input').bind('fileuploadadd', function (e, data) {
		$.each(data.files, function (index, file) {
			fileName = file.name;
		});
	});
})();