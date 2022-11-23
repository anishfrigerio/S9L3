"use strict";
class Lavoratore {
    constructor(_codredd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) {
        this.codredd = _codredd;
        this.redditoAnnnuoLordo = _redditoAnnuoLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
    }
    getUtileTasse() {
        return (this.redditoAnnnuoLordo * this.codredd / 100);
    }
    ;
    getTasseinps() {
        return (this.getUtileTasse() * this.tasseInps / 100);
    }
    ;
    getTasseIrpef() {
        return (this.getUtileTasse() * this.tasseIrpef / 100);
    }
    ;
    getRedditoAnnuoNetto() {
        return this.redditoAnnnuoLordo - (this.getTasseinps() + this.getTasseIrpef());
    }
}
class Artigiano extends Lavoratore {
    constructor(_redditoAnnuoLordo) {
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
    constructor(_redditoAnnuoLordo) {
        super(78, _redditoAnnuoLordo, 25.72, 5);
    }
}
;
let professionista = new Professionista(90000);
console.log('Professionista');
console.log(professionista.getUtileTasse());
console.log(professionista.getTasseinps());
console.log(professionista.getTasseIrpef());
console.log(professionista.getRedditoAnnuoNetto());
class Commerciante extends Lavoratore {
    constructor(_redditoAnnuoLordo) {
        super(40, _redditoAnnuoLordo, 35, 15);
    }
}
;
let commerciante = new Commerciante(4000);
console.log('Commerciante');
console.log(commerciante.getUtileTasse());
console.log(commerciante.getTasseinps());
console.log(commerciante.getTasseIrpef());
console.log(`Questo e il tuo stipendio tassato ${commerciante.getRedditoAnnuoNetto()}£`);
