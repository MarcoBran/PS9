var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var primo = /** @class */ (function () {
    function primo(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    primo.prototype.ricarica = function (valore) { return this.credito = this.credito + valore; };
    ;
    primo.prototype.chiamata = function (minuti) { this.credito = this.credito - (minuti * 0.2); return this.numeroChiamate += 1; };
    ;
    primo.prototype.numero404 = function () { return this.credito; };
    ;
    primo.prototype.getNumeroChiamate = function () { return this.numeroChiamate; };
    ;
    primo.prototype.azzeraChiamate = function () { return this.numeroChiamate = 0; };
    ;
    return primo;
}());
var secondo = /** @class */ (function (_super) {
    __extends(secondo, _super);
    function secondo(_credito, _numeroChiamate) {
        return _super.call(this, _credito, _numeroChiamate) || this;
    }
    return secondo;
}(primo));
var terzo = /** @class */ (function (_super) {
    __extends(terzo, _super);
    function terzo(_credito, _numeroChiamate) {
        return _super.call(this, _credito, _numeroChiamate) || this;
    }
    return terzo;
}(primo));
var primoUtente = new primo(0, 2);
console.log(primoUtente.ricarica(15));
console.log("Numero chiamate: ".concat(primoUtente.getNumeroChiamate()));
console.log(primoUtente.chiamata(2));
console.log("Credito residuo: ".concat(primoUtente.numero404(), "\u20AC"));
console.log("Chiamate azzerate: ".concat(primoUtente.azzeraChiamate()));
console.log("------------------");
var secondoUtente = new secondo(10, 5);
console.log(secondoUtente.ricarica(10));
console.log("Numero chiamate: ".concat(secondoUtente.getNumeroChiamate()));
console.log(secondoUtente.chiamata(4));
console.log("Credito residuo: ".concat(secondoUtente.numero404(), "\u20AC"));
console.log("Chiamate azzerate: ".concat(secondoUtente.azzeraChiamate()));
console.log("------------------");
var terzoUtente = new terzo(9, 9);
console.log(terzoUtente.ricarica(6));
console.log("Numero chiamate: ".concat(terzoUtente.getNumeroChiamate()));
console.log(terzoUtente.chiamata(1));
console.log("Credito residuo: ".concat(terzoUtente.numero404(), "\u20AC"));
console.log("Chiamate azzerate: ".concat(terzoUtente.azzeraChiamate()));
