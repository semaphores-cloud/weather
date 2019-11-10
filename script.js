var cities = ["Los Angeles", "San Francisco", "New York"];

function displayWeather(){
    var city= $(this).attr("name");
    var queryURL ="https:api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=047ca20e0f1955a12883ad9f85ebc6be";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        var cityDiv= $("<div class='city'>");
        var des1 = $("<p>").text("Temp: " + temperature);
        cityDiv.append(des1);

        var humid = response.humid;
        var des2 = $("<p>").text("Humidity: " + humid);
        cityDiv.append(des2);
        $("#weather-view").prepend(cityDiv);
    });
}

function buttons(){
    $("#view").empty();
    for(var i= 0; i < cities.length; i++){
        var a = $("<div>");
        a.addClass("city-btn");
        a.attr("name", cities[i]);
        a.text(cities[i]);
        $("#view").append(a);
    }
}

$("#add-city").on("click", function(event) {
    event.preventDefault();
    var city= $("#city-input").val().trim();
    cities.push(city);
    buttons();
});
$(document).on("click", ".city-btn", displayWeather);
buttons();

