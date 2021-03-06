L.mapbox.accessToken = 'pk.eyJ1IjoibWluYW1lbG9zaCIsImEiOiJjajl5bmg5NGExNjVxMnhtZGtqemh0dXpxIn0.YjhWR-UHUFpZk0PB0Q_JAg';

// var map = L.mapbox.map('map', 'mapbox.streets')
//   .setView([3-122.157929, 37.437890], 12)

// var myLayer = L.mapbox.featureLayer().addTo(map);

var markers = [{“place” : {“store” : “Goodwill Industries Thrift Store”,“address” : “4085 El Camino Way, Palo Alto, CA 94306”,“Rating” : “3.33”,“Ratings” :“Rated by 3 Thrifter(s)”},
“place” : {“store” :“Goodwill Boutique”,“address” : “711 Santa Cruz Ave., Menlo Park, CA 94025”,“Rating” : “4”,“Ratings” : “Rated by 1 Thrifter(s)”},
“place” : {“store” : “American Cancer Society Discovery Shop”,“address” : “748 Santa Cruz Ave., Menlo Park, CA 94025”,“Rating” : “3.4”,“Ratings” : Rated by 1 Thrifter(s)},
“place” : {“store” :American Cancer Society Discovery Shop,“address” : “243 Main St., Los Altos, CA 94022”,“Rating” : “4.6”,“Ratings” : Rated by 1 Thrifter(s)},
“place” : {“store” : “Goodwill Industries Thrift Store”,“address” : “855 E. El Camino Real Mountain View, CA 94040”,“Rating” : “3.4”,“Ratings” : Rated by 2 Thrifter(s)”},
“place” : {“store” : “St. Vincent de Paul Thrift Store”,“address” : “2406 El Camino Real, Redwood City, CA 94063”,“Rating” : “3.8”,“Ratings” : “Rated by 2 Thrifter(s)”},
“place” : {“store” : “Savers”,“address” : “875 Main St., Redwood City, CA 94063”,“Rating” : “3”,“Ratings” : “Rated by 1 Thrifter(s)”},
“place” : {“store” : “St. Vincent de Paul Thrift Store”,“address” : “2406 El Camino Real Redwood City, CA 94063”,“Rating” : “Not Rated”,“Ratings” : Not Rated”},
“place” : {“store” :  “Nearly New Shop”,“address” : 225 E. Maude Ave., Sunnyvale, CA 94085”,“Rating”:  “4.8”,“Ratings” : "Rated by 1 Thrifter(s)" }}]

var myLayer = L.mapbox.featureLayer().addTo(map);
myLayer.setGeoJSON(markers);