// function findTopLeft - maximum latitude and minimum longitude (Notes by James)
// function findTopRight - maximum latitude and maximum longitude (Notes by James)
// function findBottomLeft - minimum latitude and minimum longitude (Notes by James)
// function findBottomRight - minimum latitude and maximum longitude (Notes by James)

// function Run - new variable "boundingBox" - 4 objects, each with 1 value. Will print 2 lines (Notes by James)

// function findTopLeft - maximum latitude and minimum longitude (Notes by James)
function findTopLeft(pointList){
    var maxLat = null;
    var minLon = null;

    // using data from data.js located in same directory (Notes by James)
    pointList.data.forEach(
        point => {
            if (maxLat == null) { 
                maxLat = point.lat
                minLon = point.lon
            }
            else {
                if (point.lat > maxLat){ 
                    maxLat = point.lat
                }
                if (point.lon < minLon){
                    minLon = point.lon
            }
        }
    }
    )
    return {"pointID": 1, "lat": maxLat, "lon": minLon}
}

// function findTopRight - maximum latitude and maximum longitude (Notes by James)
function findTopRight(pointList){
    var maxLat = null;
    var maxLon = null;

    // using data from data.js located in same directory (Notes by James)
    pointList.data.forEach(
        point => {
            if (maxLat == null) {
                maxLat = point.lat
                maxLon = point.lon
            }
            else {
                if (point.lat > maxLat){ 
                    maxLat = point.lat
                }
                if (point.lon > maxLon){
                    maxLon = point.lon
            }
        }
    }
    )
    return {"pointID": 2, "lat": maxLat, "lon": maxLon}
}

// function findBottomLeft - minimum latitude and minimum longitude (Notes by James)
function findBottomLeft(pointList){
    var minLat = null;
    var minLon = null;

    // using data from data.js located in same directory (Notes by James)
    pointList.data.forEach(
        point => {
            if (minLat == null) {
                minLat = point.lat
                minLon = point.lon
            }
            else {
                if (point.lat < minLat){ 
                    minLat = point.lat
                }
                if (point.lon < minLon){
                    minLon = point.lon
            }
        }
    }
    )
    return {"pointID": 3, "lat": minLat, "lon": minLon}
}


// function findBottomRight - minimum latitude and maximum longitude (Notes by James)
function findBottomRight(pointList){
    var minLat = null;
    var maxLon = null;

    // using data from data.js located in same directory (Notes by James)
    pointList.data.forEach(
        point => {
            if (minLat == null) {
                minLat = point.lat
                maxLon = point.lon
            }
            else {
                if (point.lat < minLat){ 
                    minLat = point.lat
                }
                if (point.lon > maxLon){
                    maxLon = point.lon
            }
        }
    }
    )
    return {"pointID": 4, "lat": minLat, "lon": maxLon}
}


// function Run - new variable "boundingBox" - 4 objects, each with 1 value. Will print 2 lines (Notes by James)
function Run(){
    // get the corners by creating functions which select an item from the data which has the correct values
    var topLeftPoint = findTopLeft(data);
    var topRightPoint = findTopRight(data);
    var bottomLeftPoint = findBottomLeft(data);
    var bottomRightPoint = findBottomRight(data);

    // make an output object containing the corner points
    var boundingBox = 
        {
            topLeft: topLeftPoint,
            topRight: topRightPoint,
            bottomLeft: bottomLeftPoint,
            bottomRight: bottomRightPoint
        }

            // add my email (Notes by James)
    console.log("Bounding box computed for jbs0710@tamu.edu: ");
    console.log(boundingBox);
}
