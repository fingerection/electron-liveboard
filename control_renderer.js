// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {ipcRenderer} = require('electron');
function sendIpcMsg(msg) {
   ipcRenderer.send('my-msg', msg);
}
$( "#target" ).submit(function( event ) {
  var inputContent = $('#user-input').val();
  //alert(inputContent);
  sendIpcMsg(inputContent);
  event.preventDefault();
});
