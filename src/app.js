console.log("Merhaba Kodlama.io")

let dolarDun = 9.20
let dolarBugun = 9.30

// dolarDun = "Ankara"
// console.log(dolarDun)

//javascript tip güvenli (TYPE SAFE) değildir.

{
    let dolarDun = 9.10
}

console.log(dolarDun)

// let ile tanımlanan değişken blok içinde değiştirilemez. Var ile tanımlanan ise değiştirilebilir.

const euroDun = 11.2
//euroDun = 11  // Const ile tanımlanan bir değişken değiştirilemez
console.log(euroDun)

// Array
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li> "+konutKredileri[i]+" </li>")
    
}


console.log(konutKredileri)