const argv = require('./config/yargs');
const getLugarLatLng = require('./lugar/lugar');
const getClima = require('./clima/clima');

// getLugarLatLng(argv.direccion)
//     .then(dir => {
//         getClima(dir.lat, dir.lon)               
//     })
    

// getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async (direccion) => {

    try{
        const coords = await getLugarLatLng(direccion);
        const temp = await getClima(coords.lat, coords.lon);
        
        console.log(`El clima de ${direccion} es de ${temp}`);
    }
    catch(e){
       console.log(`No se pudo determinar el clima de ${direccion}`);
    }
}

getInfo(argv.direccion);



