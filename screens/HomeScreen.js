import React from 'react';
import {Text} from 'react-native-elements'
import {OPEN_WEATHER_API} from '@env'

const weatherRequest = () => {
// Make a request for a user with a given ID
    axios.get('/user?ID=12345')
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