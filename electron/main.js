const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// Create the Electron window
let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    // Load the HTML file
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Open the DevTools (optional)
    win.webContents.openDevTools();

    // Handle the "ready-to-show" event
    win.once('ready-to-show', () => {
        win.show();
    });

    // Attach an event listener to the window
    win.on('closed', () => {
        win = null;
    });

    // Handle a button click event from the HTML page
    win.webContents.on('did-finish-load', () => {
        win.webContents.executeJavaScript(`
            const btn = document.getElementById('btn');
            const message = document.getElementById('message');

            // Add a click event listener to the button
            btn.addEventListener('click', () => {
                if (Math.random() < 0.5) {
                    // If the condition is true, change the message
                    message.textContent = 'You clicked the button! Condition is true.';
                } else {
                    // If the condition is false, change the message to something else
                    message.textContent = 'You clicked the button! Condition is false.';
                }
            });
        `);
    });
}

// Create the Electron window when the app is ready
app.on('ready', createWindow);

// Quit the app when all windows are closed (on macOS, it doesn't quit by default)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Create a new window when the app is activated (on macOS)
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
