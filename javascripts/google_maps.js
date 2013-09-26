var init = function(){
    var myOptions = {
        zoom: 14,
        scrollwheel: false,
        zoomControl: false,
        streetViewControl: false,
        scaleControl: false,
        disableDefaultUI: true,
        mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP};
    var map = new google.maps.Map(document.getElementById("map"), myOptions);
        var pinkParksStyles = [
            {
                featureType: "all",
                stylers: [
                    { hue: "#123fff" },
                    { saturation: "-100" },
                    { lightness: "0" },

                ]
            },
            {
                featureType: "road",
                stylers: [
                    { hue: "#123000" },
                    { saturation: "-100" }
                ]
            }
        ];
map.setOptions({styles: pinkParksStyles});
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': 'Івано-Франківськ, Січових Стрільців 34'}, function(results, status){
        if (status == google.maps.GeocoderStatus.OK){
            var conf ={
                map: map,
                position: results[0].geometry.location,
            };

            if ($(window).width() < 650) {
                centerLatLng = results[0].geometry.location
            } else{
                var centerLatLng = new google.maps.LatLng(48.917316, 24.727083)
                conf.icon = 'https://dl.dropboxusercontent.com/u/1189063/marker.png'
            }

            map.setCenter(centerLatLng);
            var marker = new google.maps.Marker(conf);
        }
    })
};
google.maps.event.addDomListener(window, 'load', init());

$(document).ready(function(){
    if ($(window).width() > 650) {
        height = $('.slide4').height()/2 - 102 - 95;
        console.log(height)
        $('.map-data').css('top', height);
    }
})
