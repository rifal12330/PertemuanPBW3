// let nama = 12
// console.log(typeof(nama))

// let fakultas = ["ilmu komputer","hukum","fisip"]
// console.log(fakultas)

// const hukum = fakultas[0]
// console.log(hukum)

// const[fakul1,fakul2, fakul3] = fakultas
// console.log(fakul3)

// fakultas.push("fakultas kedokteran")
// console.log(fakultas)
// fakultas.pop()
// console.log(fakultas)
// fakultas.unshift(2)
// fakultas.unshift(true)
// console.log(fakultas)

// let results = 9+10 
// console.log(results)
// results = 15-10
// console.log(results)
// results = 9*5
// console.log(results)
// results = 18/2
// console.log(results) 
// results = 28 % 3
// console.log(results)
// results = 10 + 15 * 2 / 2
// console.log(results)

// let result = 18<2
// console.log(result)

// let namaPalingDepan = "MUHAMMAD "
// let namaDepan = "RIFAL "
// let namaBelakang = "RIFDIANSYAH"
// let fullName = namaPalingDepan + namaDepan + namaBelakang
// console.log(fullName)

// let male = ["budi","ujang","joko","samsul"]
// let female = ["susi", "sisi", "sasi", "susan"]
// let student = [...male,...female]
// console.log(student)

// let orang = {
//     "nama": "Rifal",
//     "kelas" : 15,
//     "NPM" : 2210631170033
// }
// console.log(orang)
// console.log(orang["nama"])
// console.log(orang["kelas"])
// console.log(orang["NPM"])

// let Nilai
// Nilai = 100
// if(Nilai === 100){
//     console.log("sempurnaa")
// }

// let Nomor = [1,2,4,5,6]
// for(let i of Nomor){
//     console.log(i)
// }

function nama(){``
    console.log("Hallo")
}
nama()

const hallo = () =>{
    console.log("Hallo World")
}
hallo()


const Average = (...index) =>{
    let sum = index.length
    let result = 0 
    for (const i of index){
        result += i
    }
    return result/sum
}

console.log("rata ratanya adalah " + Average(2,3,4,6,7,8))

const iyah = () => "iya dong"
const penambahan = (number1,number2) => {
    return number1 + number2 
}
const pengurangan = (number1,number2) => number1-number2
let result = penambahan(10,20)
let result2 = pengurangan(15,5)
console.log(result2)
console.log(result)