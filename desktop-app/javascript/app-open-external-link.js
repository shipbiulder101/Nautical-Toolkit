window.require = parent.window.require;
const { shell } = require('electron');
var link;
function openLink(link){
shell.openExternal(link);
}