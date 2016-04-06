// center of map
var myCenter=new google.maps.LatLng(37.816570,-122.287447);

// map function
function initialize() {
  var mapProp = {
    center: myCenter,
    zoom:15,
    mapTypeId:google.maps.MapTypeId.HYBRID,
    scrollwheel: false
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
// calls map function when page loads
google.maps.event.addDomListener(window, 'load', initialize);

if (true) {
	
};