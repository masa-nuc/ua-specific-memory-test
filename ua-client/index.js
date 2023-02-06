const { app, BrowserWindow } = require('electron');

app.commandLine.appendSwitch('ignore-certificate-errors')

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1600,
    height: 1000,
    webPreferences: {},
  })

  if (process.argv.length === 3 && process.argv[2] === 'co') {
    mainWindow.loadURL('https://localhost:3000/co');
    console.log('open https://localhost:3000/co');
  } else {
    mainWindow.loadURL('https://localhost:3000/');
    console.log('open https://localhost:3000/');
  }

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', function () {
  app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
