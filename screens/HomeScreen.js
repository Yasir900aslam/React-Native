import React from 'react';
import {Text} from 'react-native-elements'
import {OPEN_WEATHER_API} from '@env'


/**
 * api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}
 * */

/**
 * Example Response
 {
  "coord": {
    "lon": -122.08,
    "lat": 37.39
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
  },
  "visibility": 16093,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 420006353,
  "name": "Mountain View",
  "cod": 200
  }

    Required Field:
  weather.main
  weather.description
  main.temp_min  in Metric Celcius
  main.temp_max  in Metric Celcuis

 * */
const weatherRequest = () => {
    let parameters = {
        city: "Lahore",
        stateCode: "56004"
    }

// Make a request for a user with a given ID
    axios.get("api.openweathermap.org/data/2.5/weather?q=${parameters.city},${parameters.stateCode}&units=metric&appid=${OPEN_WEATHER_API}")
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

//pass down weather JSON to children.
const HomeScreen = ()=>{
    return <Text>Home Screen</Text>;
};

export default HomeScreen;