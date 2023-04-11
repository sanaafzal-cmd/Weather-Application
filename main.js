$(document).ready(function(){
    
  
   
    $("#form-submit").submit(function(event){
        performSearch(event);
        $('#send').attr('disabled',true);
        toastr.info('Search is being performed. Please wait...');
    });


function performSearch(event){
    var request;
    event.preventDefault();

   request = $.ajax({
        url:"https://api.openweathermap.org/data/2.5/weather",
        type: "GET",
        data: {
            q:  $("#city").val(),
            appid: 'ad6691a23c86728f445a0829f4430b9b' ,
            units: 'metric' 
        }
    });

    request.done(function(response){
        formatSearch(response);
    })
}
    



function formatSearch(jsonObject){
    
    var cityName = jsonObject.name;
    var timeDate = jsonObject.dt;
    var timeZone = jsonObject.timezone;
    var s = new Date(timeDate*1000).toDateString("en-US");
    var t = new Date(timeDate*1000).toLocaleTimeString("en-US");
    var cityWeather = jsonObject.weather[0].main;
    var cityTemp = Math.trunc(jsonObject.main.temp);
    var tempIcon = jsonObject.weather[0].icon;
    var mintemp =Math.trunc(jsonObject.main.temp_min);
    var maxtemp = Math.trunc(jsonObject.main.temp_max);
    var humidity = jsonObject.main.humidity;
    var windSpeed = jsonObject.wind.speed;
    var aPressure = (jsonObject.main.pressure) / 100;
    var cloudiness = jsonObject.clouds.all;
    var visibility = jsonObject.visibility / 1000;
    var feelsLike = Math.trunc(jsonObject.main.feels_like);




    var icon = ("<img src='http://openweathermap.org/img/wn/" + tempIcon + "@4x.png'>");
   

    $(".location-timezone").text(cityName);
    $(".temperature-description").text(cityWeather);
    $(".temperature-degree").text(cityTemp);
    $(".current-Icon").html(icon);
    $(".date-day").text(s);
    $(".currentTime").text(t);
    $('#humidity').text(humidity);
    $('#wind-speed').text(windSpeed);
    $('#min-temp').text(mintemp);
    $('#max-temp').text(maxtemp);
    $('#pressure').text(aPressure);
    $('#cloud-iness').text(cloudiness);
   $('#feels-like').text(feelsLike);
    $('#visibility').text(visibility);



    console.log(jsonObject.coord.lon);
    console.log(jsonObject.coord.lat);

   

    $('#send').attr('disabled',false);  

}
});

