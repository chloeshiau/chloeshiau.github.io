/**
 * This example uses pulsating circles CSS by Kevin Urrutia
 * http://kevinurrutia.tumblr.com/post/16411271583/creating-a-css3-pulsating-circle
 */

var map = AmCharts.makeChart("chartdiv", {
    type: "map",
    "theme": "none",
    path: "http://www.amcharts.com/lib/3/",

    imagesSettings: {
        rollOverColor: "#089282",
        rollOverScale: 3,
        selectedScale: 3,
        selectedColor: "#089282",
        color: "#13564e"
    },

    areasSettings: {
        unlistedAreasColor: "#15A892"
    },

    dataProvider: {
        map: "worldLow",
        images: [{
            zoomLevel: 5,
            scale: 0.5,
            title: "Brussels",
            latitude: 50.8371,
            longitude: 4.3676
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Paris",
            latitude: 48.8567,
            longitude: 2.3510
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "London",
            latitude: 51.5002,
            longitude: -0.1262,
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Shanghai",
            latitude: 31.2,
            longitude: 121.5
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Thailand",
            latitude: 13.75,
            longitude: 100.4833
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Hong Kong",
            latitude: 22.2783,
            longitude: 114.1747,
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Italy",
            latitude: 41.9,
            longitude: 12.4833
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Switzerland",
            latitude: 46.8333,
            longitude: 8.3333
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Ontario",
            latitude: 50,
            longitude: -85
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "California",
            latitude: 37,
            longitude: -120
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Washington DC",
            latitude: 38.8921,
            longitude: -77.0241
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Florida",
            latitude: 28.1,
            longitude: -81.6
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Washington",
            latitude: 47.5,
            longitude: -120.5
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Oahu",
            latitude: 21.2752,
            longitude: -157.8312
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Alaska",
            latitude: 64,
            longitude: -150
        }, {
            zoomLevel: 5,
            scale: 0.5,
            title: "Vancouver",
            latitude: 49.2827,
            longitude: -123.1207
        }]
    }
});

// add events to recalculate map position when the map is moved or zoomed
map.addListener("positionChanged", updateCustomMarkers);

// this function will take current images on the map and create HTML elements for them
function updateCustomMarkers (event) {
    // get map object
    var map = event.chart;
    
    // go through all of the images
    for( var x in map.dataProvider.images) {
        // get MapImage object
        var image = map.dataProvider.images[x];
        
        // check if it has corresponding HTML element
        if ('undefined' == typeof image.externalElement)
            image.externalElement = createCustomMarker(image);

        // reposition the element accoridng to coordinates
        image.externalElement.style.top = map.latitudeToY(image.latitude) + 'px';
        image.externalElement.style.left = map.longitudeToX(image.longitude) + 'px';
    }
}

// this function creates and returns a new marker element
function createCustomMarker(image) {
    // create holder
    var holder = document.createElement('div');
    holder.className = 'map-marker';
    holder.title = image.title;
    holder.style.position = 'absolute';
    
    // maybe add a link to it?
    if (undefined != image.url) {
        holder.onclick = function() {
            window.location.href = image.url;
        };
        holder.className += ' map-clickable';
    }
    
    // create dot
    var dot = document.createElement('div');
    dot.className = 'dot';
    holder.appendChild(dot);
    
    // create pulse
    var pulse = document.createElement('div');
    pulse.className = 'pulse';
    holder.appendChild(pulse);
    
    // append the marker to the map container
    image.chart.chartDiv.appendChild(holder);
    
    return holder;
}