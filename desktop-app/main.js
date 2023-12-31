const { app, BrowserWindow} = require('electron/main')
const ipc = require('electron').ipcMain;
const path = require('path');
//stores weather the window is maximized
var winState = { maximized: true };

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

const nativeImage = require('electron').nativeImage;
    var image = nativeImage.createFromPath(__dirname + '/res/app-icon.png'); 
 // where public folder on the root dir

    image.setTemplateImage(true);

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({ 
        width: 1000,
        height: 800,
        transparent: true, 
        frame: false, 
        resizable: true,  
        fullscreenable: false,
        fullscreen: false ,
        icon: image,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            webviewTag: true
        }
    })

    win.setMinimumSize(500,500);

    // and load the index.html of the app.
    win.loadFile('./pages/main.html')

    // Open the DevTools
    win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})

//IPC handler for app controls these are being called by app-controls.js
ipc.on('maximizeWindow', function(event){
    //checks is the window is maximized and act acordingly
    if(winState.maximized == true){
      winState.maximized = false;
      win.setSize(1000, 800, false);
      console.log("Window un maximized");
    } else{
      winState.maximized = true;
      win.maximize();
      console.log("window maximized")
    }
})

ipc.on('closeWindow', function(event){
    win.close();
})

ipc.on('minimizeWindow',function(event){
    win.minimize();
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.