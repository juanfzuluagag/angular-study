function imprimirConsola( constructorClase: Function){
    console.log( constructorClase );
}

@imprimirConsola
export class Xmen {

    constructor(
        public nombre: string,
        public clave : string
    ){ }

    imprimir(){
        console.log(`Nombre: ${ this.nombre }\nClave: ${this.clave}`);
    }
}