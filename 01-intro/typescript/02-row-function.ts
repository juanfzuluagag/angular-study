(() =>{

    const myFunction = function(a : string){
        return a.toUpperCase();
    }

    const myFunctionF = (a : string) => a.toUpperCase();

    const myFunctionAdd = function(a : number, b : number){
        return a + b;
    }

    const myFunctionAddF = (a : number, b : number) => a + b;

    const hulk = {
        nombre : 'Hulk',
        smash() {

            setTimeout(() =>{
                console.log(`${ this.nombre } smash!!!!`);
            }, 1000);
        }
    }
    
    hulk.smash();

    console.log(myFunction("Normal"));
    console.log(myFunctionF("flecha"));

    console.log(myFunctionAdd(1, 2));
    console.log(myFunctionAddF(3, 6));

})();