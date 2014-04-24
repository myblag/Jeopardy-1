var require = {
	baseUrl: '/public/JS/',
	paths: {
		jquery: 'libs/jquery-1.7.2.min',
		jqueryui: 'libs/jquery-ui-1.9.1.custom.min',
		knockout: 'libs/knockout-2.1.0',
		komapping: 'libs/knockout.mapping-latest',
		domReady: 'libs/domReady',
		less: 'libs/less-1.3.0.min',
		shim: 'libs/es5-shim.min',
		sham: 'libs/es5-sham.min',
		highcharts: 'libs/highcharts-custom',
		linq: 'libs/linq'
	},
	deps: ['less'],
	shim: {
		'/socket.io/socket.io': {
			exports: 'io'
		},
		linq: {
			exports: 'Enumerable'
		},
		highcharts: {
			exports: 'highcharts'
		}
	},
	map: {
		'Scripts/Jeopardy': {
			'ViewModels/JeopardyViewModel': 'ViewModels/JeopardyViewModelNew'
		},
		'ViewModels/JeopardyViewModel': {
			'DataContext': 'DataContexts/JeopardyWebDataContext',
			'Modules/JeopardyGameModule': 'Modules/JeopardyGameModuleNew'
		},
		'ViewModels/JeopardyViewModelNew': {
			'DataContext': 'DataContexts/JeopardyWebDataContext',
			'Modules/JeopardyGameModule': 'Modules/JeopardyGameModuleNew'
		},
		'ViewModels/DataManagementViewModel': {
			'DataContext': 'DataContexts/DataManagementWebDataContext'
		},
		'Modules/JeopardyGameModule': {
			'DataContext': 'DataContexts/JeopardyDataContext'
		},
		'Modules/JeopardyGameModuleNew': {
			'DataContext': 'DataContexts/JeopardyWebDataContext'
		}
	}
}

var debug = true;