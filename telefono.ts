interface Cellulare {
    credito : number,
    numeroChiamate : number,
    ricarica(valore : number) : void,
    chiamata(minuti : number) : void,
    numero404() : number,
    getNumeroChiamate() : number,
    azzeraChiamate() : void,
}

class primo implements Cellulare {
    credito : number;
    numeroChiamate :number;
    constructor (_credito : number, _numeroChiamate : number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(valore : number){return this.credito = this.credito+valore};
    chiamata(minuti : number){this.credito = this.credito-(minuti*0.2); return this.numeroChiamate += 1};
    numero404(){return this.credito};
    getNumeroChiamate(){return this.numeroChiamate};
    azzeraChiamate(){return this.numeroChiamate = 0};
}

class secondo extends primo {
     constructor (_credito : number, _numeroChiamate : number) {
        super(_credito, _numeroChiamate);
    }
}

class terzo extends primo {
    constructor (_credito : number, _numeroChiamate : number) {
       super(_credito, _numeroChiamate);
    }
}

let primoUtente = new primo (0,2);
console.log(primoUtente.ricarica(15));
console.log(`Numero chiamate: ${primoUtente.getNumeroChiamate()}`);
console.log(primoUtente.chiamata(2));
console.log(`Credito residuo: ${primoUtente.numero404()}€`);
console.log(`Chiamate azzerate: ${primoUtente.azzeraChiamate()}`);

console.log("------------------");

let secondoUtente = new secondo (10,5);
console.log(secondoUtente.ricarica(10));
console.log(`Numero chiamate: ${secondoUtente.getNumeroChiamate()}`);
console.log(secondoUtente.chiamata(4));
console.log(`Credito residuo: ${secondoUtente.numero404()}€`);
console.log(`Chiamate azzerate: ${secondoUtente.azzeraChiamate()}`);

console.log("------------------");

let terzoUtente = new terzo (9,9);
console.log(terzoUtente.ricarica(6));
console.log(`Numero chiamate: ${terzoUtente.getNumeroChiamate()}`);
console.log(terzoUtente.chiamata(1));
console.log(`Credito residuo: ${terzoUtente.numero404()}€`);
console.log(`Chiamate azzerate: ${terzoUtente.azzeraChiamate()}`);