const fs = require(`fs`);

function isCapital(letter) {
  let unicodeValue = letter.charCodeAt(0);

  return unicodeValue >= 65 && unicodeValue <= 90;
}

function check(part1,part2){

  for (let i = 0;i < part1.length;i++ ) {
    let letter = part1[i];

    if (part2.includes(letter)) {
      let temp = part2.indexOf(letter);

      if (part2[temp] === letter) {
        return letter;
      }
    }
  };

};

function check2(part1,part2,part3){

  for (let i = 0;i < part1.length;i++ ) {
    let letter = part1[i];

    if (part2.includes(letter)) {
      let temp = part2.indexOf(letter);
      if (letter === part2[temp]) {
      for (let i = 0;i<part2.length;i++) {
        if (part3.includes(letter)) {
          let temp2 = part3.indexOf(letter);
          if (part3[temp2] === letter) {
            return letter;
          }

        }
      }
    }
    }
  };

};

fs.readFile("Day3.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
  
    let sum = 0;
    let sum2 = 0;
    let counter = 0;
    let line1,line2,line3;
    let lines = data.split("\n");
   
  
    lines.forEach((line) => {
      let center = Math.floor(line.length / 2);
      const firstpart = line.substring(0,center);
      const secondpart = line.substring(center,line.length);

      let letter = check(firstpart , secondpart);

      let status = isCapital(letter);

      let letterUp = letter.toUpperCase();

      let codePoint = letterUp.charCodeAt(0);
      codePoint = codePoint - 64;
      if (status) {
        sum = sum + codePoint + 26
      }else {
        sum = sum + codePoint ;
      }

      // Part 2
     counter =  counter + 1 ; 

     if (counter == 1 ) {
      line1 = line;
     }else if (counter == 2) {
      line2 = line;
     }else if (counter = 3) {
      line3 = line;
      counter = 0;
      flag  = true;
    
      letter = check2(line1,line2,line3);
      status = isCapital(letter);
      letterUp = letter.toUpperCase();

       codePoint = letterUp.charCodeAt(0);
       codePoint = codePoint - 64;
      if (status) {
        sum2 = sum2 + codePoint + 26
      }else {
        sum2 = sum2 + codePoint ;
      }
      
     }
    });  
    console.log(sum,sum2);

});