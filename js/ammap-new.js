var map = AmCharts.makeChart("mapdiv", {

	type: "map",

	handDrawn: true,
	dragMap: false,
	color: "#FFFFFF",
	projection:"winkel3",
	areasSettings: {
		autoZoom: false,
		rollOverOutlineColor: "#FFFFFF",
		selectedColor: "#FFFFFF",
		rollOverColor: "#FFFFFF",
		outlineAlpha: 1,
		outlineColor: "#FFFFFF",
		outlineThickness: 1,
		color: "#000000"
	},

	dataProvider: {
		map: "continentsLow",

		areas: [{
			"id": "africa",
			"title": "Africa",
			"pattern": {
				"url": "patterns/white/pattern1.png",
				width: 4,
				height: 4
			}
		}, {
			"id": "asia",
			"title": "Asia",
			"pattern": {
				"url": "patterns/white/pattern2.png",
				width: 4,
				height: 4
			}
		}, {
			"id": "australia",
			"title": "Australia",
			"pattern": {
				"url": "patterns/white/pattern3.png",
				width: 4,
				height: 4
			}
		}, {
			"id": "europe",
			"title": "Europe",
			"pattern": {
				"url": "patterns/white/pattern4.png",
				width: 4,
				height: 4
			}
		}, {
			"id": "north_america",
			"title": "North America",
			"pattern": {
				"url": "patterns/white/pattern5.png",
				width: 4,
				height: 4
			}
		}, {
			"id": "south_america",
			"title": "South America",
			"pattern": {
				"url": "patterns/white/pattern6.png",
				width: 4,
				height: 4
			}
		}]
	},
	zoomControl: {
		panControlEnabled: false,
		zoomControlEnabled: false
	}

});
