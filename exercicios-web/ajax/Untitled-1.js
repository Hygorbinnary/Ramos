"use restrict"

  cost meuobj2 = {
    chamada2: => {
    console.log(this)
    console.log(module.exports === this)
console.log(this === meuObj2)

}
}

meuobj2.chamada2();
