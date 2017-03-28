/// <reference types="electron" />
import { app, BrowserWindow, Menu, Tray, autoUpdater, dialog } from "electron";
import { menuTemplate } from "./menu";
import * as child_process from "child_process";
import * as path from "path";
import * as url from "url";
const spawnSync = child_process.spawnSync;
const version = require("../package.json").version;

// set application title
let appTitle = `Desktop Grimoire v${version}`;
let win;

app.setName(appTitle);

function createWindow(): void {
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

/**
 * A crappy way to solve this problem but it's the best
 * solution I have right now...
 */
function killJekyll(): void {
    let ps = spawnSync("ps", ["-C", "jekyll", "-o", "pid="]);
    let pid: any = ps.stdout;
    if (pid) {
        process.kill(pid);
    }
}

app.on("ready", createWindow);
app.on("window-all-closed", killJekyll);