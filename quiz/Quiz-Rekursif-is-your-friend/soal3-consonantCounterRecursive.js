/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
  if (sentences.length === 0) return 0;
  sentences.split("");

  let consonant = "";
  for (let j = 0; j < sentences.length; j++) {
    let chr = sentences[j];
    if (
      chr !== "a" &&
      chr !== "i" &&
      chr !== "u" &&
      chr !== "e" &&
      chr !== "o" &&
      chr !== "A" &&
      chr !== "I" &&
      chr !== "U" &&
      chr !== "E" &&
      chr !== "O" &&
      chr !== " " &&
      chr !== "0" &&
      chr !== "1" &&
      chr !== "2" &&
      chr !== "3" &&
      chr !== "4" &&
      chr !== "5" &&
      chr !== "6" &&
      chr !== "7" &&
      chr !== "8" &&
      chr !== "9"
    ) {
      consonant = chr;
    }
    return (consonant ? 1 : 0) + consonantCounterRecursive(sentences.slice(1));
  }
}

console.log(consonantCounterRecursive("alDi Suka MakAn baksO")); //10
console.log(consonantCounterRecursive("AziZy")); // 3
console.log(consonantCounterRecursive("awt6an")); // 3
