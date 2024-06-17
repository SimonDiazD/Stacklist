var Nodo = /** @class */ (function () {
    function Nodo(value) {
        this.next = null;
        this.value = value;
    }
    return Nodo;
}());
var Pila = /** @class */ (function () {
    function Pila() {
        this.head = null;
        this.length = 0;
    }
    Pila.prototype.push = function (value) {
        var nodo = new Nodo(value);
        nodo.next = this.head;
        this.head = nodo;
        this.length++;
    };
    Pila.prototype.pop = function () {
        if (this.head === null) {
            return null;
        }
        var value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    };
    Pila.prototype.peek = function () {
        if (this.head === null) {
            return null;
        }
        return this.head.value;
    };
    Pila.prototype.isempty = function () {
        return this.head === null;
    };
    Pila.prototype.clear = function () {
        this.head === null;
        this.length = 0;
    };
    Pila.prototype.size = function () {
        return this.length;
    };
    return Pila;
}());
/*const pila1 = new Pila<number>();
pila1.push(29);
pila1.push(230);
pila1.push(313);

const pila2 = new Pila<string>();
pila2.push("pedro")
pila2.push("juan")
pila2.push("marta")*/ 
