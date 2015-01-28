'use strict';

var _ = require('underscore');
var gui = require('nw.gui');

function menuFabric(menuInstance, menuConf) {
	if (!menuInstance) {
		menuInstance = new gui.Menu();
	}

	_.each(menuConf, function (callback, label) {
		var item = new gui.MenuItem({label: label, click: callback});

		menuInstance.append(item);
	});

	return menuInstance;
}