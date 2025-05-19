/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/
// Yogyakarta > Semarang > Surabaya > Denpasar
function travelingIndonesia(arr, emoney) {
   let kota = ['Yogyakarta','Semarang', 'Surabaya','Denpasar']
   let result = []
  let transport = {
    pesawat: 275000,
    kereta: 250000,
    bis: 225000,
  };

  let money= {
    ovo: 0.15,
    dana: 0.1,
    gopay:0.05
  }

  let traveler = {};
  let words = [];

  for (let i = 0; i < arr.length; i++) {
    let perArr = [];
    let kata = "";
    for (let j = 0; j < arr[i].length; j++) {
      let char = arr[i][j];
      if (char !== "-") kata += char;
      else if (char === "-") {
        perArr.push(kata);
        kata = "";
      }
    }
    perArr.push(kata);
    words.push(perArr);
  }

  for (let a = 0; a < words.length; a++) {
    let asal = 0
    let tujuan = 0
    let jarak = 0
    let total = 0
    let perKota =0
    let diskon = 0
    let totalCost = 0
     let person= words[a]
    for(let c=0; c<kota.length; c++){
    if(kota[c] === person[1]){
      asal = c
    } else if(kota[c] === person[2])
      tujuan = c
    jarak = Math.abs(tujuan - asal)

  
    if (person[3] === "Pesawat")perKota = transport.pesawat
    else if(person[3] === "Kereta") perKota = transport.kereta
    else perKota = transport.bis

    total = perKota*jarak

    if(emoney === "OVO") diskon = perKota*money.ovo*jarak
    else if(emoney === "Dana") diskon =perKota*money.dana*jarak
    else if(emoney === "Gopay") diskon = perKota*money.gopay*jarak
    else diskon = 0
  }
  totalCost = total -diskon

   
    result.push({
      name: person[0],
      departureCity: person[1],
      destinationCity: person[2],
      transport: person[3],
      totalCost: totalCost//sementara
    })
  }
  return result;
 
}

console.log(
  travelingIndonesia(
    [
      "Danang-Yogyakarta-Semarang-Bis",
      "Alif-Denpasar-Surabaya-Kereta",
      "Bahari-Semarang-Denpasar-Pesawat",
    ],
    "OVO"
  )
);
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log(
  "=================================================================================================="
);
console.log(
  travelingIndonesia(
    [
      "Shafur-Surabaya-Yogyakarta-Kereta",
      "Taufik-Semarang-Surabaya-Pesawat",
      "Alex-Yogyakarta-Semarang-Kereta",
    ],
    "Dana"
  )
);
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log(
  "=================================================================================================="
);
console.log(
  travelingIndonesia(
    ["Andika-Denpasar-Surabaya-Bis", "Katy-Surabaya-Denpasar-Pesawat"],
    "Gopay"
  )
);
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log(
  "=================================================================================================="
);
console.log(travelingIndonesia(["Putra-Denpasar-Yogyakarta-Pesawat"], "Cash"));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], "Cash")); // [];
