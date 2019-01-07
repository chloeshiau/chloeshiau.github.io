var basic_choropleth = new Datamap({
  element: document.getElementById("map-wrapper"),
  projection: 'mercator',
  fills: {
    'USA': '#1f77b4',
    defaultFill: "#D0D0D0",
    authorHasTraveledTo: "#9FCBAC"
  },
  geographyConfig: {
    highlightFillColor: '#D0D0D0',
    highlightBorderColor: '#D0D0D0'
  },
  data: {
    USA: { fillKey: "authorHasTraveledTo" },
    JPN: { fillKey: "authorHasTraveledTo" },
    ITA: { fillKey: "authorHasTraveledTo" },
    THA: { fillKey: "authorHasTraveledTo", pictures: "no" },
    FRA: { fillKey: "authorHasTraveledTo" },
    CHN: { fillKey: "authorHasTraveledTo" },
    CAN: { fillKey: "authorHasTraveledTo" },
    MEX: { fillKey: "authorHasTraveledTo" },
    ESP: { fillKey: "authorHasTraveledTo" },
    GRC: { fillKey: "authorHasTraveledTo" },
    AUT: { fillKey: "authorHasTraveledTo" },
    GBR: { fillKey: "authorHasTraveledTo" },
    CHE: { fillKey: "authorHasTraveledTo" },
    BEL: { fillKey: "authorHasTraveledTo" },
    IDN: { fillKey: "authorHasTraveledTo" },
    SGP: { fillKey: "authorHasTraveledTo" },
    DEU: { fillKey: "authorHasTraveledTo", pictures: "no" }
  }
});

$(document).ready(function() {
  var getWrapper = document.getElementById("map-wrapper");
  getWrapper.style.width = "100%";
});
