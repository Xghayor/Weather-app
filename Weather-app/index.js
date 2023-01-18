document.querySelector("#myForm button").addEventListener("click", function () {
  var x = $("form").serializeArray();
  $.each(x, function (i, field) {
    var place = field.value;

    const apiKey = "500d8896c9f22504fa8586dea352e7f1";

    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      place +
      " &units=metric&appid=" +
      apiKey +
      "";

    async function fetching(url) {
      const response = await fetch(url);
      var weatherData = await response.json();

      const desc = weatherData.weather[0].description;
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const humidity = weatherData.main.humidity;
      const speed = weatherData.wind.speed;

      let imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png ";
      let images = "https://source.unsplash.com/1600x900/?landscape";

      $("#weather")
        .addClass("weather-upd")
        .html("Weather in " + place);
      $("#temp")
        .html(+temp + "<span>&#8451;</span>")
        .addClass("temp-upd ");
      $("#images2")
        .addClass("  clouds-upd ")
        .html("<img  src=" + imageUrl + "/>" + desc);
      $("#humidity")
        .html("Humidity  : " + humidity)
        .addClass("humidity-upd");
      $("#windspeed")
        .html("Wind speed : " + speed)
        .addClass("windspeed-upd");
      let d = new Date();
      $("#bg-img").attr("src", images + "?" + d.getTime());
    }

    fetching(url);
  });
});
