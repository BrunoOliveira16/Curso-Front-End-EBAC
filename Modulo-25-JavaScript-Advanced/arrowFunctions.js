function Pessoa() {

    //const pessoa = this
    this.idade = 0

    setInterval(() => {
        console.log(this.idade++)
    }, 2000);

}

const p1 = new Pessoa()

/* Arrow Functions
* (p1, p2, ..., px) => { expressão }
* (p1, p2) => expressão
* p1 => { expressão }
*/