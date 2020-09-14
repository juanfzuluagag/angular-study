"use strict";
(() => {
    const myFunction = function (a) {
        return a.toUpperCase();
    };
    const myFunctionF = (a) => a.toUpperCase();
    const myFunctionAdd = function (a, b) {
        return a + b;
    };
    const myFunctionAddF = (a, b) => a + b;
    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!!`);
            }, 1000);
        }
    };
    hulk.smash();
    console.log(myFunction("Normal"));
    console.log(myFunctionF("flecha"));
    console.log(myFunctionAdd(1, 2));
    console.log(myFunctionAddF(3, 6));
})();
