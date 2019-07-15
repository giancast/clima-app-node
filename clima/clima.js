const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=57eb2ea1cb7021a02dce8edfdb076505&units=metric`);

    return resp.data.main.temp;
}

module.exports = getClima;