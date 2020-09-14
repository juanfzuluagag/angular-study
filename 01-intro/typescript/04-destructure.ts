(function(){

    const avenger = {
        name: 'Steve',
        key: 'America Captain',
        power: 'Drogue'
    }

    const extract = ( {name, power}: any ) => {

        //const {name, key, power} = avenger;

        console.log(name);
        //console.log(key);
        console.log(power);

    }

    extract( avenger );

    const avengers: string[] = ['Spiderman', 'Thor', 'Ironman'];

    const [thor, ironman, spiderman] = avengers;

    console.log( thor)

    const extractAvengers = ( [thor, ironman, spiderman]: string[] ) => {

        console.log( '1. ' + thor );//console.log('1. ' + avengers[0]);
        console.log( '2. ' + ironman );//console.log('2. ' + avengers[1]);
        console.log( '3. ' + spiderman );//console.log('3. ' + avengers[2]);
    }
    
    extractAvengers(avengers);

})();