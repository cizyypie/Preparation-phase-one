/*
=========
HACKATHON
=========

[INSTRUCTION]
Buatlah suatu aplikasi untuk membuat catatan ekonomi.

[EXAMPLE]
"bank account sudah disediakan"

input: [['Jeff Bezos+5%', 'Larry Page+10%', 'Jeff Bezos-3%'], ['Larry Page+2%', 'Larry Page-1%']]
process:
  bank account => deposit atas nama Jeff Bezos ditambah 5%, menjadi 105000
  bank account => deposit atas nama Larry Page ditambah 10%, mejadi  104500
  bank account => deposit atas nama Jeff Bezos dikurangi 3%, mejadi 101850
  ...dst
output:
  [
    { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' }
  ]

[RULES]
- Dilarang menggunakan .indexOf(), .split(), .filter(), .map(), dan .slice()
*/

function economyChangeSummary(tradeActivity) {
  let duitJeff = 100000; //amazon
  let duitLarry = 95000; //google
  let duitJack = 90000; //alibaba

  // console.log(tradeActivity[0][0]);

  let plus = /[+]/g;
  let min = /[-]/g;
  let nums = /[0-9]/g;
  let res = [];
  let word = /[A-za-z]/;
  
  for (let i = 0; i < tradeActivity.length; i++) {
    for (let j = 0; j < tradeActivity[i].length; j++) {
      let nama = "";
      let disc = "";
      let bool = true;
      for (let k = 0; k < tradeActivity[i][j].length; k++) {
        let index = tradeActivity[i][j][k];
        if (index.match(nums)) disc += index;
        else if (index.match(word)) nama += index;
        else if (index.match(plus)) bool = true;
        else if (index.match(min)) bool = false;
      }

      let newDepo = 0;

      switch (nama) {
        case "JeffBezos":
          if (bool == true)
            newDepo = duitJeff + (duitJeff * Number(disc)) / 100;
          else if (bool == false)
            newDepo = duitJeff - (duitJeff * Number(disc)) / 100;
          duitJeff = newDepo;
          res.push({ name: "Jeff Bezos", deposit: newDepo, owner: "Amazon" });
          break;

        case "LarryPage":
          if (bool == true)
            newDepo = duitLarry + (duitLarry * Number(disc)) / 100;
          else if (bool == false)
            newDepo = duitLarry - (duitLarry * Number(disc)) / 100;
          duitLarry = newDepo;
          res.push({ name: "Larry Page", deposit: duitLarry, owner: "Google" });
          break;

        case "JackMa":
          if (bool == true)
            newDepo = duitJack + (duitJack * Number(disc)) / 100;
          else if (bool == false)
            newDepo = duitJack - (duitJack * Number(disc)) / 100;
          duitJack = newDepo;
          res.push({name: "Jack Ma", deposit: duitJack, owner: "Alibaba",});
          break;
      }
    }
  }
  console.log(res);
}

console.log(
  economyChangeSummary([
    ["Jeff Bezos+5%", "Larry Page+10%", "Jeff Bezos-3%"],
    ["Larry Page+2%", "Larry Page-1%"],
    ["Jack Ma+4%"],
    ["Larry Page-8%", "Jack Ma+20%", "Jeff Bezos-3%", "Jeff Bezos+8%"],
  ])
);
/* 
    [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 104500, owner: 'Google' },
    { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
    { name: 'Larry Page', deposit: 106590, owner: 'Google' },
    { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
    { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
    { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
    { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
    { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
    { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
  */
console.log(
  "=============================================================================="
);

console.log(economyChangeSummary([["Jeff Bezos-10%"]]));
/*
    [ { name: 'Jeff Bezos', deposit: 90000, owner: 'Amazon' } ]
  */

// if regex= [-] return saldo* angka

// let text ="Jeff Bezos-10%"
// let plus = /[-]/g
// let found = text.match(plus)

// console.log(found)
