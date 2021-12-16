const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { json } = require('express');

const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});


console.log('working')
var data1


function getData() {
    return new Promise(function (resolve, reject) {
        url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
        axios.get(url, {
                qs: {
                    'start': '1',
                    'limit': '5000',
                    'convert': 'USD'
                },
                    headers:{
                        'X-CMC_PRO_API_KEY': '8840b0c8-0d0d-4ab0-8210-6910ce02ca88'
                    }
                })
                .then(response => {
                    resolve (response.data)
                })
                .catch(error => {
                    // process error object
                    reject(error)
                })
    });
}



async function main(){

    var lel = await getData()
    console.log(JSON.stringify(lel))
    exports.data = JSON.stringify(lel)
    
}

main();



