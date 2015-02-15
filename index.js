'use strict';

var gui = require('nw.gui'); // Load native UI library
var win = gui.Window.get(); // Get the current window
var menuFabric = require('./menuFabric');

var isBreak = false;

var menu = menuFabric(gui)(null, [
	['Start break', function () {
		if (isBreak) {
			win.hide();
			menu.items[0].label = 'Start break';
			isBreak = false;
		} else {
			win.show();
			menu.items[0].label = 'End break';
			isBreak = true;
		}
	}],
	['Settings', function () {

	}],
	['Exit', function () {
		gui.App.quit();
	}]
]);

var tray = new gui.Tray({icon: 'icon.png'});

tray.menu = menu;

win.on('minimize', function () {
	this.hide();
});