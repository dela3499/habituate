
defaultViewModel = {
	"daily": {
		"currentPeriodTitle": "6/1",
		"previouosPeriodTitle": "5/31",
		"habits": {
			0: {
				"id": 0,
				"title": "start walking by 6am",
				"currentPeriod": "complete",
				"previousPeriod": "complete"
			},
			1: {
				"id": 1,
				"title": "meditate 10m",
				"currentPeriod": "complete",
				"previousPeriod": "complete"
			},
			2: {
				"id": 2,
				"title": "business ideas 10m",
				"currentPeriod": "incomplete",
				"previousPeriod": "complete"
			},
			3: {
				"id": 3,
				"title": "read 10m",
				"currentPeriod": "incomplete,
				"previousPeriod": "complete"
			},
			4: {
				"id": 4,
				"title": "ship new product",
				"currentPeriod": "incomplete",
				"previousPeriod": "complete"
			},
			5: {
				"id": 5,
				"title": "newsletter",
				"currentPeriod": "incomplete",
				"previousPeriod": "complete"
			},
			6: {
				"id": 6,
				"title": "workout/stretch 10m",
				"currentPeriod": "incomplete",
				"previousPeriod": "complete"
			},
			7: {
				"id": 7,
				"title": "todos 10m",
				"currentPeriod": "incomplete",
				"previousPeriod": "complete"
			},
			8: {
				"id": 8,
				"title": "ship bioage",
				"currentPeriod": "incomplete",
				"previousPeriod": "incomplete"
			},
			9: {
				"id": 9,
				"title": "in bed by 11pm",
				"currentPeriod": "incomplete",
				"previousPeriod": "complete"
			}
		}
	}
}

function join(strings) {
	result = ""
	for (var i = strings.length - 1; i >= 0; i--) {
		result = result + strings[i] + " "
	}
	return result
}

function viewSection(sectionModel) {
	var header = [ 
		m('tr', 
			[ m('th', sectionModel['previousPeriodTitle']), 
			  m('th', sectionModel['currentPeriodTitle'])
			]
		)]
	
	var rows = [0,1,2,3,4,5,6,7,8,9].map(function (habitID) {
		var habit = sectionModel['habits'][habitID]
		var warning = habit['currentPeriod'] == "incomplete" & habit['previousPeriod'] == "incomplete"
		var warningText = warning ? "!" : ""
		var previousPeriodClasses = join(['previousPeriod', habit['previousPeriod']])
		var currentPeriodClasses = Join(['currentPeriod', habit['currentPeriod']])

		return m("tr",
			[ m('td', {class: previousPeriodClasses}, ""),
		      m('td', {class: currentPeriodClasses}, warningText)
			])

	})

	return m('div', 
		{class: "section"},
		[ m('table', header.concat(rows)) ]
	)
}