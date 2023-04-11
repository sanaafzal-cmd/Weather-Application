$(document).ready(function(){
 
    let long;
    let latt;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            latt = position.coords.latitude;
        
        console.log(long);
        console.log(latt);

   request = $.ajax({
        url:"https://api.openweathermap.org/data/2.5/onecall",
        type: "GET",
        data: {
            
            lat:latt,
            lon:long,

            appid: 'ad6691a23c86728f445a0829f4430b9b' ,
            units: 'metric' 
                        
        }
    });

    request.done(function(response){
        formatSearch(response);
    })


function formatSearch(jsonObject){
    var cityName = jsonObject.timezone;
    const myArray = cityName.split("/");
   
    var timeDate = jsonObject.current.dt;
    var timeZone = jsonObject.timezone_offset;
    var s = new Date(timeDate*1000).toDateString("en-US");
    var t = new Date(timeDate*1000).toLocaleTimeString("en-US");
    var cityWeather = jsonObject.current.weather[0].description;
    var cityTemp = Math.round(jsonObject.current.temp);
    var tempIcon = jsonObject.current.weather[0].icon;

    var icon = ("<img src='http://openweathermap.org/img/wn/" + tempIcon + "@4x.png'>");
   

    $(".location-timezone").text(myArray[1]);
    $(".temperature-description").text(cityWeather);
    $(".temperature-degree").text(cityTemp);
    $(".current-Icon").html(icon);
    $(".date-day").text(s);
    $(".currentTime").text(t);
    var sunriseTime = new Date(jsonObject.current.sunrise*1000).toLocaleTimeString("en-US");
    $(".sunrise").text(sunriseTime);
    var sunsetTime = new Date(jsonObject.current.sunset*1000).toLocaleTimeString("en-US");
    $(".sunset").text(sunsetTime);
    $(".latitude").text(jsonObject.lat);
    $(".longitude").text(jsonObject.lon);
    $(".atm-pressure").text(jsonObject.current.pressure);
    $(".humidity").text(jsonObject.current.humidity);
    $(".cloudiness").text(jsonObject.current.clouds);
    $(".dew-point").text(jsonObject.current.dew_point);
    $(".uv-index").text(jsonObject.current.uvi);
    $(".visibility").text(jsonObject.current.visibility * 0.001);
    $(".wind-speed").text(jsonObject.current.wind_speed);
    $(".wind-direction").text(jsonObject.current.wind_deg);

    $('.faren-heit').click(function(){
        var far = ((9/5) * cityTemp) + 32;
        $(".temperature-degree").text(Math.trunc(far));
        $(".toggle-temp").text('°F');
    })

    $('button').click(function(){
        window.location.href('searchbyCity.html');
        return false;
    })
    

    var timeDate0 = jsonObject.hourly[0].dt;
    var s0 = new Date(timeDate0*1000).toDateString("en-US");
    var t0 = new Date(timeDate0*1000).toLocaleTimeString("en-US");

    $(".day0").text(s0);
    $(".date0").text(t0);
    $(".location0").text(cityName);
    $(".num0").text(jsonObject.hourly[0].temp);
    var tempIcon0 = jsonObject.hourly[0].weather[0].icon;
    var icon0 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon0 + "@4x.png'>");
    $(".forecast-icon0").html(icon0);

  
  

    //Day 1


    var wtimeDate1 = jsonObject.daily[0].dt;
    var w_day1 = new Date(wtimeDate1*1000).toDateString("en-US");
    
    var w_temp1_mor = Math.trunc(jsonObject.daily[0].temp.day);
    var w_temp1_eve = Math.trunc(jsonObject.daily[0].temp.night);
    var w_desc1 = jsonObject.daily[0].weather[0].description;
    
    var w_icon1 = ("<img src='http://openweathermap.org/img/wn/" + jsonObject.daily[0].weather[0].icon + "@2x.png'>");
    var min1 = Math.trunc(jsonObject.daily[0].temp.min);
    var max1 = Math.trunc(jsonObject.daily[0].temp.max);
   var sunrise1 =  new Date(jsonObject.daily[0].sunrise*1000).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: true});
    var sunset1 = new Date(jsonObject.daily[0].sunset*1000).toLocaleTimeString("en-US",  {hour: '2-digit', minute: '2-digit', hour12: true});

    $('#w-day1').text(w_day1);
    $('#w-temp1-mor').text(w_temp1_mor);
    $('#w-temp1-eve').text(w_temp1_eve);
    $('#w-desc1').text(w_desc1);
    $('#w-icon1').html(w_icon1);
    $('#w-mintemp1').text(min1);
    $('#w-maxtemp1').text(max1);
    $('#w-sunrise1').text(sunrise1);
    $('#w-sunset1').text(sunset1);

    // Day 2

    var wtimeDate2 = jsonObject.daily[1].dt;
    var w_day2 = new Date(wtimeDate2*1000).toDateString("en-US");
    var w_temp2_mor = Math.trunc(jsonObject.daily[1].temp.day);
    var w_temp2_eve = Math.trunc(jsonObject.daily[1].temp.night);
    var w_desc2 = jsonObject.daily[1].weather[0].description;
    
    var w_icon2 = ("<img src='http://openweathermap.org/img/wn/" + jsonObject.daily[1].weather[0].icon + "@2x.png'>");
    var min2 = Math.trunc(jsonObject.daily[1].temp.min);
    var max2 = Math.trunc(jsonObject.daily[1].temp.max);
   var sunrise2 =  new Date(jsonObject.daily[1].sunrise*1000).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: true});
    var sunset2 = new Date(jsonObject.daily[1].sunset*1000).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: true});

    $('#w-day2').text(w_day2);
    $('#w-temp2-mor').text(w_temp2_mor);
    $('#w-temp2-eve').text(w_temp2_eve);
    $('#w-desc2').text(w_desc2);
    $('#w-icon2').html(w_icon2);
    $('#w-mintemp2').text(min2);
    $('#w-maxtemp2').text(max2);
    $('#w-sunrise2').text(sunrise2);
    $('#w-sunset2').text(sunset2);

    //Day 3

    var wtimeDate3 = jsonObject.daily[2].dt;
    var w_day3 = new Date(wtimeDate3*1000).toDateString("en-US");
    var w_temp3_mor =Math.trunc(jsonObject.daily[2].temp.day);
    var w_temp3_eve = Math.trunc(jsonObject.daily[2].temp.night);
    var w_desc3 = jsonObject.daily[2].weather[0].description;
    
    var w_icon3 = ("<img src='http://openweathermap.org/img/wn/" + jsonObject.daily[2].weather[0].icon + "@2x.png'>");
    var min3 = Math.trunc(jsonObject.daily[2].temp.min);
    var max3 = Math.trunc(jsonObject.daily[2].temp.max);
   var sunrise3 =  new Date(jsonObject.daily[2].sunrise*1000).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: true});
    var sunset3 = new Date(jsonObject.daily[2].sunset*1000).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: true});

    $('#w-day3').text(w_day3);
    $('#w-temp3-mor').text(w_temp3_mor);
    $('#w-temp3-eve').text(w_temp3_eve);
    $('#w-desc3').text(w_desc3);
    $('#w-icon3').html(w_icon3);
    $('#w-mintemp3').text(min3);
    $('#w-maxtemp3').text(max3);
    $('#w-sunrise3').text(sunrise3);
    $('#w-sunset3').text(sunset3);

    //Day 4

    var wtimeDate4 = jsonObject.daily[3].dt;
    var w_day4 = new Date(wtimeDate4*1000).toDateString("en-US");
    var w_temp4_mor = Math.trunc(jsonObject.daily[3].temp.day);
    var w_temp4_eve = Math.trunc(jsonObject.daily[3].temp.night);
    var w_desc4 = jsonObject.daily[3].weather[0].description;
    
    var w_icon4 = ("<img src='http://openweathermap.org/img/wn/" + jsonObject.daily[3].weather[0].icon + "@2x.png'>");
    var min4 = Math.trunc(jsonObject.daily[3].temp.min);
    var max4 = Math.trunc(jsonObject.daily[3].temp.max);
   var sunrise4 =  new Date(jsonObject.daily[3].sunrise*1000).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: true});
    var sunset4 = new Date(jsonObject.daily[3].sunset*1000).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: true});

    $('#w-day4').text(w_day4);
    $('#w-temp4-mor').text(w_temp4_mor);
    $('#w-temp4-eve').text(w_temp4_eve);
    $('#w-desc4').text(w_desc4);
    $('#w-icon4').html(w_icon4);
    $('#w-mintemp4').text(min4);
    $('#w-maxtemp4').text(max4);
    $('#w-sunrise4').text(sunrise4);
    $('#w-sunset4').text(sunset4);

    //Day 5

    var wtimeDate5 = jsonObject.daily[4].dt;
    var w_day5 = new Date(wtimeDate5*1000).toDateString("en-US");
    var w_temp5_mor = Math.trunc(jsonObject.daily[4].temp.day);
    var w_temp5_eve = Math.trunc(jsonObject.daily[4].temp.night);
    var w_desc5 = jsonObject.daily[4].weather[0].description;
    
    var w_icon5 = ("<img src='http://openweathermap.org/img/wn/" + jsonObject.daily[4].weather[0].icon + "@2x.png'>");
    var min5 = Math.trunc(jsonObject.daily[4].temp.min);
    var max5 = Math.trunc(jsonObject.daily[4].temp.max);
   var sunrise5 =  new Date(jsonObject.daily[4].sunrise*1000).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: true});
    var sunset5 = new Date(jsonObject.daily[4].sunset*1000).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: true});

    $('#w-day5').text(w_day5);
    $('#w-temp5-mor').text(w_temp5_mor);
    $('#w-temp5-eve').text(w_temp5_eve);
    $('#w-desc5').text(w_desc5);
    $('#w-icon5').html(w_icon5);
    $('#w-mintemp5').text(min5);
    $('#w-maxtemp5').text(max5);
    $('#w-sunrise5').text(sunrise5);
    $('#w-sunset5').text(sunset5);

     //Day 6

     var wtimeDate6 = jsonObject.daily[5].dt;
     var w_day6 = new Date(wtimeDate6*1000).toDateString("en-US");
     var w_temp6_mor = Math.trunc(jsonObject.daily[5].temp.day);
     var w_temp6_eve = Math.trunc(jsonObject.daily[5].temp.night);
     var w_desc6 = jsonObject.daily[5].weather[0].description;
     
     var w_icon6 = ("<img src='http://openweathermap.org/img/wn/" + jsonObject.daily[5].weather[0].icon + "@2x.png'>");
     var min6 = Math.trunc(jsonObject.daily[5].temp.min);
     var max6 = Math.trunc(jsonObject.daily[5].temp.max);
    var sunrise6 =  new Date(jsonObject.daily[5].sunrise*1000).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: true});
     var sunset6 = new Date(jsonObject.daily[5].sunset*1000).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: true});
 
     $('#w-day6').text(w_day6);
     $('#w-temp6-mor').text(w_temp6_mor);
     $('#w-temp6-eve').text(w_temp6_eve);
     $('#w-desc6').text(w_desc6);
     $('#w-icon6').html(w_icon6);
     $('#w-mintemp6').text(min6);
     $('#w-maxtemp6').text(max6);
     $('#w-sunrise6').text(sunrise6);
     $('#w-sunset6').text(sunset6);

       //Day 7

       var wtimeDate7 = jsonObject.daily[6].dt;
       var w_day7 = new Date(wtimeDate7*1000).toDateString("en-US");
       var w_temp7_mor = Math.trunc(jsonObject.daily[6].temp.day);
       var w_temp7_eve = Math.trunc(jsonObject.daily[6].temp.night);
       var w_desc7 = jsonObject.daily[6].weather[0].description;
       
       var w_icon7 = ("<img src='http://openweathermap.org/img/wn/" + jsonObject.daily[6].weather[0].icon + "@2x.png'>");
       var min7 = Math.trunc(jsonObject.daily[6].temp.min);
       var max7 = Math.trunc(jsonObject.daily[6].temp.max);
      var sunrise7 =  new Date(jsonObject.daily[6].sunrise*1000).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: true});
       var sunset7 = new Date(jsonObject.daily[6].sunset*1000).toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: true});
   
       $('#w-day7').text(w_day7);
       $('#w-temp7-mor').text(w_temp7_mor);
       $('#w-temp7-eve').text(w_temp7_eve);
       $('#w-desc7').text(w_desc7);
       $('#w-icon7').html(w_icon7);
       $('#w-mintemp7').text(min7);
       $('#w-maxtemp7').text(max7);
       $('#w-sunrise7').text(sunrise7);
       $('#w-sunset7').text(sunset7);

       //Hour 1

       var timeDate1 = jsonObject.hourly[1].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t1 = new Date(timeDate1*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour1").text(t1);
       var tempIcon1 = jsonObject.hourly[1].weather[0].icon;
       var icon1 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon1 + "@2x.png'>");
       $("#icon1").html(icon1);
       $("#temp1").text(jsonObject.hourly[1].temp);

       //Hour 2
   
   
       var timeDate2 = jsonObject.hourly[2].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t2 = new Date(timeDate2*1000).toLocaleTimeString("en-US", {hour: '2-digit', hour12: true});
       $("#hour2").text(t2);
       var tempIcon2 = jsonObject.hourly[2].weather[0].icon;
       var icon2 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon2 + "@2x.png'>");
       $("#icon2").html(icon2);
       $("#temp2").text(jsonObject.hourly[2].temp);

       //Hour 3
   
   
       var timeDate3 = jsonObject.hourly[3].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t3 = new Date(timeDate3*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour3").text(t3);
       var tempIcon3 = jsonObject.hourly[3].weather[0].icon;
       var icon3 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon3 + "@2x.png'>");
       $("#icon3").html(icon3);
       $("#temp3").text(jsonObject.hourly[3].temp);

       //Hour 4

       var timeDate4 = jsonObject.hourly[4].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t4 = new Date(timeDate4*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour4").text(t4);
       var tempIcon4 = jsonObject.hourly[4].weather[0].icon;
       var icon4 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon4 + "@2x.png'>");
       $("#icon4").html(icon4);
       $("#temp4").text(jsonObject.hourly[4].temp);

       //Hour 5

       var timeDate5 = jsonObject.hourly[5].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t5 = new Date(timeDate5*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour5").text(t5);
       var tempIcon5 = jsonObject.hourly[5].weather[0].icon;
       var icon5 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon5 + "@2x.png'>");
       $("#icon5").html(icon5);
       $("#temp5").text(jsonObject.hourly[5].temp);

       //Hour 6

       var timeDate6 = jsonObject.hourly[6].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t6 = new Date(timeDate6*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour6").text(t6);
       var tempIcon6 = jsonObject.hourly[6].weather[0].icon;
       var icon6 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon6 + "@2x.png'>");
       $("#icon6").html(icon6);
       $("#temp6").text(jsonObject.hourly[6].temp);

       //Hour 7

       var timeDate7 = jsonObject.hourly[7].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t7 = new Date(timeDate7*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour7").text(t7);
       var tempIcon7 = jsonObject.hourly[7].weather[0].icon;
       var icon7 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon7 + "@2x.png'>");
       $("#icon7").html(icon7);
       $("#temp7").text(jsonObject.hourly[7].temp);

       //Hour 8

       var timeDate8 = jsonObject.hourly[8].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t8 = new Date(timeDate8*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour8").text(t8);
       var tempIcon8 = jsonObject.hourly[8].weather[0].icon;
       var icon8 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon8 + "@2x.png'>");
       $("#icon8").html(icon8);
       $("#temp8").text(jsonObject.hourly[8].temp);

       //Hour 9

       var timeDate9 = jsonObject.hourly[9].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t9 = new Date(timeDate9*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour9").text(t9);
       var tempIcon9 = jsonObject.hourly[9].weather[0].icon;
       var icon9 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon9 + "@2x.png'>");
       $("#icon9").html(icon9);
       $("#temp9").text(jsonObject.hourly[9].temp);

       //Hour 10

       var timeDate10 = jsonObject.hourly[10].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t10 = new Date(timeDate10*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour10").text(t10);
       var tempIcon10 = jsonObject.hourly[10].weather[0].icon;
       var icon10 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon10 + "@2x.png'>");
       $("#icon10").html(icon10);
       $("#temp10").text(jsonObject.hourly[10].temp);

       //Hour 11

       var timeDate11 = jsonObject.hourly[11].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t11 = new Date(timeDate11*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour11").text(t11);
       var tempIcon11 = jsonObject.hourly[11].weather[0].icon;
       var icon11 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon11 + "@2x.png'>");
       $("#icon11").html(icon11);
       $("#temp11").text(jsonObject.hourly[11].temp);

       //Hour 12

       var timeDate12 = jsonObject.hourly[12].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t12 = new Date(timeDate12*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour12").text(t12);
       var tempIcon12 = jsonObject.hourly[12].weather[0].icon;
       var icon12 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon12 + "@2x.png'>");
       $("#icon12").html(icon12);
       $("#temp12").text(jsonObject.hourly[12].temp);

       //Hour 13

       var timeDate13 = jsonObject.hourly[13].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t13 = new Date(timeDate13*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour13").text(t13);
       var tempIcon13 = jsonObject.hourly[13].weather[0].icon;
       var icon13 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon13 + "@2x.png'>");
       $("#icon13").html(icon13);
       $("#temp13").text(jsonObject.hourly[13].temp);

       //Hour 14

       var timeDate14 = jsonObject.hourly[14].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t14 = new Date(timeDate14*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour14").text(t14);
       var tempIcon14 = jsonObject.hourly[14].weather[0].icon;
       var icon14 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon14 + "@2x.png'>");
       $("#icon14").html(icon14);
       $("#temp14").text(jsonObject.hourly[14].temp);

       //Hour 15

       var timeDate15 = jsonObject.hourly[15].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t15 = new Date(timeDate15*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour15").text(t15);
       var tempIcon15 = jsonObject.hourly[15].weather[0].icon;
       var icon15 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon15 + "@2x.png'>");
       $("#icon15").html(icon15);
       $("#temp15").text(jsonObject.hourly[15].temp);

       //Hour 16

       var timeDate16 = jsonObject.hourly[16].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t16 = new Date(timeDate16*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour16").text(t16);
       var tempIcon16 = jsonObject.hourly[16].weather[0].icon;
       var icon16 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon16 + "@2x.png'>");
       $("#icon16").html(icon16);
       $("#temp16").text(jsonObject.hourly[16].temp);

       //Hour 17

       var timeDate17 = jsonObject.hourly[17].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t17 = new Date(timeDate17*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour17").text(t17);
       var tempIcon17 = jsonObject.hourly[17].weather[0].icon;
       var icon17 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon17 + "@2x.png'>");
       $("#icon17").html(icon17);
       $("#temp17").text(jsonObject.hourly[17].temp);

       //Hour 18

       var timeDate18 = jsonObject.hourly[18].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t18 = new Date(timeDate18*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour18").text(t18);
       var tempIcon18 = jsonObject.hourly[18].weather[0].icon;
       var icon18 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon18 + "@2x.png'>");
       $("#icon18").html(icon18);
       $("#temp18").text(jsonObject.hourly[18].temp);

       //Hour 19

       var timeDate19 = jsonObject.hourly[19].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t19 = new Date(timeDate19*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour19").text(t19);
       var tempIcon19 = jsonObject.hourly[19].weather[0].icon;
       var icon19 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon19 + "@2x.png'>");
       $("#icon19").html(icon19);
       $("#temp19").text(jsonObject.hourly[19].temp);

       //Hour 20

       var timeDate20 = jsonObject.hourly[20].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t20 = new Date(timeDate20*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour20").text(t20);
       var tempIcon20 = jsonObject.hourly[20].weather[0].icon;
       var icon20 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon20 + "@2x.png'>");
       $("#icon20").html(icon20);
       $("#temp20").text(jsonObject.hourly[20].temp);

       //Hour 21

       var timeDate21 = jsonObject.hourly[21].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t21 = new Date(timeDate21*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour21").text(t21);
       var tempIcon21 = jsonObject.hourly[21].weather[0].icon;
       var icon21 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon21 + "@2x.png'>");
       $("#icon21").html(icon21);
       $("#temp21").text(jsonObject.hourly[21].temp);

       //Hour 22

       var timeDate22 = jsonObject.hourly[22].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t22 = new Date(timeDate22*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour22").text(t22);
       var tempIcon22 = jsonObject.hourly[22].weather[0].icon;
       var icon22 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon22 + "@2x.png'>");
       $("#icon22").html(icon22);
       $("#temp22").text(jsonObject.hourly[22].temp);

       //Hour 23

       var timeDate23 = jsonObject.hourly[23].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t23 = new Date(timeDate23*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour23").text(t23);
       var tempIcon23 = jsonObject.hourly[23].weather[0].icon;
       var icon23 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon23 + "@2x.png'>");
       $("#icon23").html(icon23);
       $("#temp23").text(jsonObject.hourly[23].temp);

       //Hour 24

       var timeDate24 = jsonObject.hourly[24].dt;
       //var s1 = new Date(timeDate1*1000).toDateString("en-US");
       var t24 = new Date(timeDate24*1000).toLocaleTimeString("en-US",{hour: '2-digit', hour12: true});
       $("#hour24").text(t24);
       var tempIcon24 = jsonObject.hourly[24].weather[0].icon;
       var icon24 = ("<img src='http://openweathermap.org/img/wn/" + tempIcon24 + "@2x.png'>");
       $("#icon24").html(icon24);
       $("#temp24").text(jsonObject.hourly[24].temp);

       //Chart

       var xValues = [w_day1, w_day2, w_day3, w_day4, w_day5, w_day6, w_day7];
       var yValues = [w_temp1_mor, w_temp2_mor, w_temp3_mor, w_temp4_mor, w_temp5_mor, w_temp6_mor, w_temp7_mor ];
       var barColors = ["red", "green","blue","orange","brown" , "pink", "black"];
       
       new Chart("myChart", {
         type: "line",
         data: {
           labels: xValues,
           datasets: [{
             fill:false,
             backgroundColor: "rgba(0,0,255,1.0)",
             borderColor: "rgba(0,0,255,0.1)",
             data: yValues
             
           }]
         },
         options: {
           legend: {display: false},
           title: {
             display: true,
             text: "Temperature Fluctuation throughout the week"
           }
         }

         //Chart
         

         
         
       });





















       




















}
        })
    }
});
