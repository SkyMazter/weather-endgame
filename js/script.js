// var sugguestionsSunny = ["sunglasses", "suncreen", "hat"];

// var suggestionRain = ["umbrella", "rainboots", "rain poncho"];



// var length;
// for (var count = 0; count < suggestionRain.length; count++) {
//     $("#button2").append("<p> You should have " + suggestionRain[count] + " with you </p>");

// }

$("#button1").click(function() {
    let userInput = $("#city").val();
    const weatherIcons = [
        "http://chittagongit.com/download/157274", // Thunder
        "https://iconfree.net/uploads/icon/2017/8/29/rainy-weather-rain-icon-7502-512x512.png", // rain or drizzle
        "https://image.flaticon.com/icons/png/512/53/53565.png", // Clear or sunny
        "https://ui-ex.com/images/vector-sky-black-and-white-4.png", // partialcloudy
        "http://icons.iconarchive.com/icons/icons8/ios7/256/Logos-Skydrive-Copyrighted-icon.png", //cloudy
    ];


    $.ajax({
        url:"http://api.openweathermap.org/data/2.5/weather?q="+userInput+"&APPID=083239ab6de14c2379d19581628b2c16",
        type: "GET",
        success: function(response) {
            let weatherResult = response.weather[0].main;
            let humidity = response.main.humidity;

            $("#result").html("<div>"+calculateFahrenhiet(response.main.temp)+"°F"+"</div>");
            $("#result").append("<div>"+calculateFahrenhiet(response.main.temp_max)+"°F" +"</div>");
            $("#result").append("<div>"+calculateFahrenhiet(response.main.temp_min) +"°F"+"</div>");

            $("#result").append("<div>"+humidity+"%"+"</div>");
            $("#result").append("<div>"+weatherResult+"</div>");
            $("#result").append("<div>"+calculate_inHg( response.main.pressure)+" inHg"+"</div>");
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
//http://api.openweathermap.org/data/2.5/weather?q=Manhattan&APPID=083239ab6de14c2379d19581628b2c16
