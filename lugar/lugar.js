const axios = require('axios');

const getLugarLatLng = async dir => {
    const encondedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encondedUrl}`,
        headers: {'X-RapidAPI-Key': '4bbdf91e1fmshee1feb1f390be9ep1a2d28jsne4c755ccdc35'}
    });

    const resp = await instance.get();
    const data = resp.data.Results[0];
    if(!data){
        throw new Error(`No hay resultados para ${dir}`);
    }
    else{
        const {name, lat, lon} = data;
        return{
            direccion: name,
            lat,
            lon
        }
    }  
}

module.exports = getLugarLatLng;
