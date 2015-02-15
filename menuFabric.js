'use strict';

var _ = require('underscore');
var gui;

function menuFabric(menuInstance, menuConf) {
	if (!menuInstance) {
		menuInstance = new gui.Menu();
	}

	_.each(menuConf, function (menuItem) {
		var item = new gui.MenuItem({label: menuItem[0], click: menuItem[1]});

		menuInstance.append(item);
	});

	return menuInstance;
}

module.exports = function (nwGui) {
	gui = nwGui;

	return menuFabric;
};