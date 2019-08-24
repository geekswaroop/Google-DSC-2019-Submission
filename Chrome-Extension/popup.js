function sendMessage() {
    chrome.runtime.sendMessage({action: "getCurrentForecast"}, function(response) {
        if (response == null) {
            setTimeout(sendMessage, 2000);
        } else {
            showResult(response);
        }
    });
}

function showResult(response) {
    var statusDiv = document.getElementById("status");
    var icoImg = document.getElementById("ico");
    var temperatureDiv = document.getElementById("temperature");
    var windSpeedDiv = document.getElementById("windSpeed")
    var pressureDiv = document.getElementById("pressure");
    var humidityDiv = document.getElementById("humidity");
    var nextWeekDiv = document.getElementById("nextweek");

    statusDiv.textContent = response.currently.summary;

    temperatureDiv.style.display = "block";
    temperatureDiv.textContent = response.currently.temperature.toString().split('.')[0] + "˚C";

    windSpeedDiv.style.display = "block";
    windSpeedDiv.textContent = response.currently.windSpeed.toString().split('.')[0]+ " km/hr Windspeed";

    pressureDiv.style.display = "block";
    pressureDiv.textContent = response.currently.pressure.toString().split('.')[0]+ " millibar Pressure";

    humidityDiv.style.display = "block";
    humidityDiv.textContent = response.currently.humidity.toString()+ " ratio out of 1";

    //nextWeekDiv.style.display = "block";
    //nextWeekDiv.textContent = response.daily.summary; 

    icoImg.style.display = "block";
    icoImg.src = chrome.extension.getURL("/" + response.currently.icon + ".png");

    nextWeekDiv.style.display = "block";
    nextWeekDiv.textContent = response.daily.summary;



}

document.addEventListener('DOMContentLoaded', sendMessage);