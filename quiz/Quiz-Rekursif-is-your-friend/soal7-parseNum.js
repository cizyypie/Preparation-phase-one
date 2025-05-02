/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  let num = equation.toString();
  let first = num[0];
  let zero = "";

  if (num.length === 0) {
    return "";
  } else if (first === "0") {
    return parseNumber(num.slice(1)); // skip if first digit is 0
  } else if (num.length === 1) {
    return first;
  } else {
    for (let i = 1; i <= num.length - 1; i++) {
      zero += "0";
    }
    let lastZero = parseNumber(num.slice(1));
    return lastZero ? first + zero + "+" + lastZero : first + zero;
  }
}

console.log(parseNumber(3333)); // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)); // 90
console.log(parseNumber(2333)); // 2000+300+30+3
