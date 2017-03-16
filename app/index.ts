/// <reference types="electron" />
import { app, BrowserWindow, Menu, Tray, autoUpdater, dialog } from "electron";
import { menuTemplate } from "./menu";
import * as child_process from "child_process";
import * as path from "path";
import * as url from "url";
const spawn = child_process.spawn;
const version = require("../package.json").version;

// set application title
let appTitle = `Desktop Grimoire v${version}`;
let win;

app.setName(appTitle);

function createWindow() {
    win = new BrowserWindow({
        width: 1000,
        height: 750,
        backgroundColor: "#2e2c29",
        title: app.getName()
    });

    const menu = Menu.buildFromTemplate(menuTemplate);
    win.setMenu(menu);

    win.loadURL(url.format({
        pathname: "localhost:4000",
        protocol: "http:",
        slashes: true
    }));
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    // kill jekyll server somehow
});