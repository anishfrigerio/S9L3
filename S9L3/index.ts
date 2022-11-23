abstract class Lavoratore {
    codredd: number;
    redditoAnnnuoLordo: number;
    tasseInps: number;
    tasseIrpef: number;
    constructor(_codredd: number, _redditoAnnuoLordo: number, _tasseInps: number, _tasseIrpef: number) {
        this.codredd = _codredd;
        this.redditoAnnnuoLordo = _redditoAnnuoLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
    }
    getUtileTasse(): number {
        return (this.redditoAnnnuoLordo * this.codredd / 100)
    };

    getTasseinps(): number {
        return (this.getUtileTasse() * this.tasseInps / 100)
    };

    getTasseIrpef(): number {
        return (this.getUtileTasse() * this.tasseIrpef / 100)
    };

    getRedditoAnnuoNetto(): number {
        return this.redditoAnnnuoLordo - (this.getTasseinps() + this.getTasseIrpef())
    }
}

class Artigiano extends Lavoratore {
    constructor( _redditoAnnuoLordo: number ) {
        super(67, _redditoAnnuoLordo, 35, 15);
    }

}

let artigiano = new Artigiano(20000);
console.log('Artigiano');
console.log(artigiano.getUtileTasse());
console.log(artigiano.getTasseinps());
console.log(artigiano.getTasseIrpef());
console.log(artigiano.getRedditoAnnuoNetto());

class Professionista extends Lavoratore {
    constructor( _redditoAnnuoLordo: number) {
        super(78, _redditoAnnuoLordo, 25.72, 5);
    }

};

let professionista = new Professionista( 90000);
console.log('Professionista');
console.log(professionista.getUtileTasse());
console.log(professionista.getTasseinps());
console.log(professionista.getTasseIrpef());
console.log(professionista.getRedditoAnnuoNetto());

class Commerciante extends Lavoratore {
    constructor( _redditoAnnuoLordo: number) {
        super(40, _redditoAnnuoLordo, 35,15);
    }

};

let commerciante = new Commerciante(4000);
console.log('Commerciante');
console.log(commerciante.getUtileTasse());
console.log(commerciante.getTasseinps());
console.log(commerciante.getTasseIrpef());
console.log(`Questo e il tuo stipendio tassato ${commerciante.getRedditoAnnuoNetto()}£`);

