(() =>{
    
    interface Xmen {
        nombre: string,
        edad: number,
        poder?:string;
    }

    const enviarMision = (xmen : Xmen) => {

        console.log(`Enviando a ${xmen.nombre} a la misión`);
    }
    
    const wolwerine: Xmen = {
        nombre: 'Logan',
        edad: 60
    }

    enviarMision(wolwerine);

})();