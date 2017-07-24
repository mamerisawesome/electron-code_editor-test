const { app, BrowserWindow } = require('electron')
const { enableLiveReload } = require('electron-compile')

enableLiveReload();

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden-inset'
    })

    mainWindow.loadURL('file://' + __dirname + '/index.html')

    mainWindow.webContents.on('will-navigate', (e, url) => {
        e.preventDefault()

        mainWindow.webContents.send('open-file', url)
    })
})
