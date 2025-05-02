/*

Diberikan sebuah function palindromeRecursive(sentenc) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
Contoh, 'katak' dibalik tetaplah 'katak'.

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/

function palindromeRecursive(sentence) {
  //code here - saran bikin fungsi rekursif didalam sini
  let mundur = "";
  let maju = "";
  if (sentence.length === 0) return "";
  else {
    let reverse = sentence[sentence.length - 1];
    mundur = reverse + palindromeRecursive(sentence.slice(0, -1));
    maju = sentence[0] + palindromeRecursive(sentence.slice(1))
    
  }
    return mundur == maju
}

// TEST CASES
console.log(palindromeRecursive("katak")); // true
console.log(palindromeRecursive('blanket')); // false
console.log(palindromeRecursive('civic')); // true
console.log(palindromeRecursive('kasur rusak')); // true
console.log(palindromeRecursive('mister')); // false
