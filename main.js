const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const {ipcMain} = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow (indexName, isTransparent) {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: isTransparent
    //titleBarStyle: 'hidden'
    //frame: false
  })

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/` + indexName)

  mainWindow.setAlwaysOnTop(true);
  // Open the DevTools.
  //mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
  return mainWindow
}

function readyHandler(){
  var mainWindow = createWindow('main_index.html', true)
  var controlWindow = createWindow('control_index.html', false)
  ipcMain.on('my-msg', function(event, arg) {
    // receive msg from control window and send it to main window
    mainWindow.webContents.send('my-msg', arg);
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', readyHandler)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    readyHandler()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
