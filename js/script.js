var sugguestionsSunny = ["sunglasses", "suncreen", "hat"];

var suggestionRain = ["umbrella", "rainboots", "rain poncho"];


// $.ajax({
//         url:"http://api.openweathermap.org/data/2.5/weather?q="+userInput+"&APPID=083239ab6de14c2379d19581628b2c16",
//         type: "GET",
//         success: function(suggestionRain) {
//             $('body').append(suggestionRain.name, suggestionRain.weight, suggestionRain.height);
//             $('body').append(suggestionsSunny.name, suggestionsSunny.weight, suggestionsSunny.height);
//         }
// )};
let weatherResult;
$("#button2").hide();
$("#button1").click(function() {
    let userInput = $("#city").val();
    // const weatherIcons = [
    //     "http://chittagongit.com/download/157274", // Thunder
    //     "https://iconfree.net/uploads/icon/2017/8/29/rainy-weather-rain-icon-7502-512x512.png", // rain or drizzle
    //     "https://image.flaticon.com/icons/png/512/53/53565.png", // Clear or sunny
    //     "https://ui-ex.com/images/vector-sky-black-and-white-4.png", // partialcloudy
    //     "http://icons.iconarchive.com/icons/icons8/ios7/256/Logos-Skydrive-Copyrighted-icon.png", //cloudy
    // ];


    $.ajax({
        url:"https://api.openweathermap.org/data/2.5/weather?q="+userInput+"&APPID=083239ab6de14c2379d19581628b2c16",
        type: "GET",
        success: function(response) {
            weatherResult = response.weather[0].main;
            console.log(weatherResult)
            let humidity = response.main.humidity;

            $("#result").html("<div>"+calculateFahrenhiet(response.main.temp)+"°F"+"</div>");
            $("#result").append("<div>"+"<p>High</p>"+calculateFahrenhiet(response.main.temp_max)+"°F" +"</div>");
            $("#result").append("<div>"+"<p>Low</p>"+calculateFahrenhiet(response.main.temp_min) +"°F"+"</div>");
            $("#result").append("<div>"+"<p>Humidity</p>"+humidity+"%"+"</div>");
            $("#result").append("<div id='weather'>"+weatherResult+"</div>");
            $("#result").append("<div>"+"<p>Pressure</p>"+calculate_inHg( response.main.pressure)+" inHg"+"</div>");
            if(weatherResult === "Rain"){
                $("#weather").append("<img src = 'https://iconfree.net/uploads/icon/2017/8/29/rainy-weather-rain-icon-7502-512x512.png'>")
            }else if(weatherResult === "Clear" || weatherResult === "Sunny"){
                $("#weather").append("<img src = 'https://image.flaticon.com/icons/png/512/53/53565.png'>")
            }else if(weatherResult === "Clouds"){
                $("#weather").append("<img src = 'http://icons.iconarchive.com/icons/icons8/ios7/256/Logos-Skydrive-Copyrighted-icon.png'>")
            }else if(weatherResult === "Mist"){
                $("#weather").append("<img src = 'https://image.flaticon.com/icons/png/512/130/130712.png'>")
            }
            // $("#button2").show();
            return weatherResult
        }

    });


});

let celsuis = 0;
let fahrenhiet = 0;

function calculateFahrenhiet(kelvin){  
    parseInt(kelvin);  
    celsuis = kelvin - 273.15;
    fahrenhiet = celsuis * 1.8;
    fahrenhiet = fahrenhiet + 32;
    fahrenhiet = Math.round(fahrenhiet);
    return fahrenhiet

}

let inHg = 0;

function calculate_inHg(hPa){
    hPa = hPa / 33.864
    inHg = Math.floor(hPa)
    return  inHg
}
$("#button2").click(function(){
    console.log(weatherResult);
    if(weatherResult === "Rain"){
        $("#suggestions").append("<h1>We suggest you bring</h1>")
        suggestionRain.forEach(function(object){
            $().append()
        });
    }

});
//http://api.openweathermap.org/data/2.5/weather?q=Manhattan&APPID=083239ab6de14c2379d19581628b2c16
