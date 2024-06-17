class Nodo<T>{
    value : T;
    next : Nodo<T> | null = null;

    constructor(value : T){
        this.value = value;
    }
}

class Pila<T>{
    head : Nodo <T> | null= null;
    length : number = 0;

    push(value: T): void{
        const nodo = new Nodo (value);
        nodo.next = this.head;
        this.head = nodo;
        this.length++;
    }

    pop(): T | null {
        if (this.head === null) {
          return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
      }
      

    peek(): T | null {
        if (this.head === null) {
          return null;
        }
        return this.head.value;
      }

    isempty(): boolean{
        return this.head === null;
    }

    clear(): void{
        this.head === null;
        this.length = 0;
    }

    size(): number{
        return this.length;
    }
      
}

/*const pila1 = new Pila<number>();
pila1.push(29);
pila1.push(230);
pila1.push(313);

const pila2 = new Pila<string>();
pila2.push("pedro")
pila2.push("juan")
pila2.push("marta")*/