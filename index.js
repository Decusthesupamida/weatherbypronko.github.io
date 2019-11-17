function getCityForm() {
  document.getElementById('WeatherOnCity').style.display = "block"
  document.getElementById('WeatherOnCapital').style.display = "none"
  document.getElementById('authentOnCapital').style.display = "none"

}
function getCapitaleForm() {
  getListCountry();
  document.getElementById('WeatherOnCity').style.display = "none"
  document.getElementById('WeatherOnCapital').style.display = "block"
}
function getListCountry() {
let select = document.getElementById('exampleFormControlSelect');
  $.ajax({
    type: "GET",
    url: `https://restcountries.eu/rest/v2/all`,
    success: function(response)
    {
      for(var elem of response){
      var opt = document.createElement('option');
      opt.value = elem.capital;
      opt.innerHTML = `${elem.name} - ${elem.capital} `;
      select.appendChild(opt);
    }
  }
  });
}

function searchDeviceByCity()
{
  const API_KEY = "8e6781bf6ac889aa2efb5b2b8383b096";
  let city = $("#listCity").val();

  $.ajax({
    type: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
    success: function(response)
    {
      $("#name").html(response.name);
      $("#temp").html(`Temperature ${Math.round(response.main.temp - 272)} °`);
      for(var elem of response.weather ){
        $("#weather").html(elem.main);
        $("#imgweather").attr('src', `http://openweathermap.org/img/wn/${elem.icon}@2x.png`);
      }


      // $("#search_results").html(response);
    },
    error: function(response)
    {
      $("#name").html("Wrong info");
    }
  });
}
function searchDeviceByCapital()
{
  const API_KEY = "8e6781bf6ac889aa2efb5b2b8383b096";
  let city = $("#exampleFormControlSelect").val();

  $.ajax({
    type: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
    success: function(response)
    {
      $("#nameforcapitale").html(response.name);
      $("#tempforcapitale").html(`Temperature ${Math.round(response.main.temp - 272)} °`);
      for(var elem of response.weather ){
        $("#weatherforcapitale").html(elem.main);
        $("#imgweatherforcapitale").attr('src', `http://openweathermap.org/img/wn/${elem.icon}@2x.png`);
      }


      // $("#search_results").html(response);
    },
    error: function(response)
    {
      $("#name").html("Wrong info");
    }
  });
}
