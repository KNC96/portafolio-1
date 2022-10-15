let workerContador;


function iniciar_contador(){
    workerContador = new Worker('./worker1.js');
    workerContador.onmessage = function (evento){
        document.getElementById('contador').innerText = evento.data;
        binance();
    }
}

function binance(){
    axios({
        method: 'GET' ,
        url: 'https://api.binance.com/api/v3/klines?symbol=BTCBUSD&interval=1m&limit=2'
    }).then(res =>{
        let datos = (res.data)[1];
        let close = parseFloat(datos[4]).toFixed(2);
        document.getElementById('precio').innerText = (close)+" USD";
    })
}