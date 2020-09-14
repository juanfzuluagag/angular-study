"use strict";
(() => {
    console.log('Inicio...');
    //Arg, resolve for success response, and reject for error response
    const prom1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            //resolve('Se terminó el TimeOut sin problema...')
            reject('Se terminó el TimeOut con problemas...');
        }, 1000);
    });
    prom1
        .then(msg => console.log(msg))
        .catch(err => console.warn(err));
    console.log('Fin...');
})();
