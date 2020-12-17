const electron = require('electron')
const BrowserWindow = electron.remote.BrowserWindow

document.getElementById('min-btn').addEventListener('click', () => {
    BrowserWindow.getFocusedWindow().minimize();
});

document.getElementById('max-btn').addEventListener('click', () => {
    var win = BrowserWindow.getFocusedWindow();
    if (win.isMaximized()) {
        win.unmaximize()
    } else {
        win.maximize();
    }
})

document.getElementById('close-btn').addEventListener('click', () => {
    BrowserWindow.getFocusedWindow().close();
})