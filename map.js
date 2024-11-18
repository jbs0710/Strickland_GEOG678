// Dojo is a Javascript library used to construct dynamic web user interfaces.
// Think of it as an additional set of Javascript functions we can use to accomplish tasks without us having to create that funcionality.

// Everytime you add an additional esri module, you need to add that module to the parameter list in the function below; order does matter here.

// We define Maps as an object that holds a particular set of layers, mainly a basemap. Maps on their own do not display anything to the user. 
// We then use a MapView to display a Map. 
// The MapView is a link between the Map and the HTML container.
// We can add a basic map to our page by adding the Map and MapView to our map.js file.

function main() {
    require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer",
        "esri/widgets/LayerList",
        // Added from the advanced module lecture (lecture 2)
        // Using a print widget from ESRI JS and the URL to a print geoprocessing server, we can generate a sweet .pdf of our web map's current extent.
        "esri/widgets/Print",
        "dojo/domReady!"
      ], function(Map, MapView, FeatureLayer, layerList, Print) {
        var map = new Map({
          basemap: "streets"
        });


        var view = new MapView({
          container: "mapid",  // Reference to the DOM node that will contain the view
          map: map,             // References the map object created in step 3
          // We add the following options to our MapView construction and we will end up with a web map that focuses in on College Station.
          zoom: 13,
          center: [-96.336335, 30.616988]
        });

        // All we need to do after this is create a LayerList object and give it a reference to our MapView object.
        // We then add that LayerList to our MapView, define where we want the layer list, and we should be good.

        // !!!!MY MAP IS NOT LIKING THESE LINES OF CODE - TAKE OUT IF YOU NEED ADDITIONAL TESTING!!!!!

        var layerList = new layerList({
          view: view
        });
        view.ui.add(layerList, {
          position: "top-right"
        })
        
        // Then add the PopupTemplate class to our function parameters.
        // This object has three properties: title, content, and fieldInfos.
        var constructionTemplate = {
          title: "Construction",
          content: "<b>Project Name:</b> {Name}<br><b>Start Date:</b> {StartDate}<br><b>End Date:</b" +
          "> {EndDate}",
          fieldInfos: [{
              fieldName: "StartDate",
              format: {
                  dateFormat: "long-date"
              }
          }, {
              fieldName: "EndDate",
              format: {
                  dateFormat: "long-date"
              }
          }]
      };
      
      // With the Print module added, we can then create the following code to initialize a new Print widget.
      // We then add the print widget to our MapView using the the add() method.
      var url = "https://gis.tamu.edu/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task";
          var print = new Print({
            view: view,
            printServiceUrl: url
          });
          view.ui.add(print, {
            position: "top-left"
          })

      // At this point we can now create FeatureLayer objects and add those to our Map object. We will be using TAMU construction data to use in our FeatureLayer.
        const constructionLayer = new FeatureLayer({
          url: "https://gis.tamu.edu/arcgis/rest/services/TS/TS_Main/MapServer/3",
          title: "Construction",
          popupTemplate: constructionTemplate
      })
      map.add(constructionLayer);
      });
}