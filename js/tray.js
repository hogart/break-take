'use strict';
var gui = require('nw.gui'); // Load native UI library
var win = gui.Window.get(); // Get the current window
var menuFabric = require('./js/menuFabric');

var menu = menuFabric(null, [
	{
		'Start break': function () {
			win.show();
			//win.enterFullscreen();
		}
	}
]);

var tray = new gui.Tray({icon: 'icon.png'});

tray.menu = menu;

win.on('minimize', function () {
	this.hide();
});