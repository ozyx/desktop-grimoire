/// <reference types="electron" />
import { app, BrowserWindow, Menu, Tray, autoUpdater, dialog } from "electron";

const version = require("../package.json").version;


// set application title
let appTitle = `Desktop Grimoire v${version}`;
app.setName(appTitle);



app.on("ready", () => {
    let mainWindow = new BrowserWindow({
        width: 1000,
        height: 750,
        backgroundColor: "#2e2c29",
        title: app.getName()
    });

    mainWindow.once("ready-to-show", () => {
        mainWindow.loadURL("localhost:4000");
        mainWindow.show();
        mainWindow.focus();
    });
});
