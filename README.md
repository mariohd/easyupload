# EasyUploader

A tinyMCE plugin to help uploading files to the server. It uses jquery fileupload to handle the upload to the server. 
---

## Config

1. In _dialog.htm, in the root folder, add the correct path for bootstrap and jquery in project, if needed.
2. Copy easyupload folder to tinyMCE's plugins folder.
3. Reference the plugin on tinymce.init using 'easyupload'.
4. Config the url parameter on the tinymce.init with 'easyupload_url' value.
5. Add in the Menu or in the toolbar the plugin, adding 'easyupload' string.
6. Ready to use!

--- 
### Customizing
#### easyupload_templates
Override the default templates to show in the tinyMCE editor, passing the parameter 'easyupload_templates' on tinymce.init. The defaults templates are those ones, follow the template and everything should be fine.

```javascript
templates: {
		video: '<video controls><source src="{url}"></video>',
		audio: '<audio controls><source src="{url}"></audio>',
		image: '<img src="{url}">',
		attachment: '<a href="{url}" target="_blank">{filename}</a>'
	}
```
In server's response, the plugin expects the `url` to be sended. 
If you have a different response from the server, **you have to customize** the templates, adding your response within brackets, like this '{ **your custom url**}'


#### Langs
Currently there's only `pt_BR` and `en` languages. If you want to add your own languages, just add the file in the `langs` folder. Use as example one of the currently langs in the project.

---

### Events

##### `easyupload_beforeSend (params: request)`
Called before the files were uploaded to the server. Receives the `request` as parameter.

##### `easyupload_success (params: event, data)`
Called after the files were uploaded to the server and the request was succesfull. Receives the `event` from jqueryuploader plugin and `data` from jqueryupload as parameters. The response is in `data.result`.

##### `easyupload_fail (params: event, data)`
Called when the upload fails. Called when tried to upload to the server and the request failed. Receives the `event` from jqueryuploader plugin and `data` from jqueryupload as parameters.

##### `easyupload_progressall (params: event, data)`
Called during the upload. Called during the upload files are occurring, used to show a progress bar. Receives the `event` from jqueryuploader plugin and `data` from jqueryupload as parameters.


