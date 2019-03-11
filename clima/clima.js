const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0c2affeee60d831037832331ba741735&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}