const fs = require(`fs`);


fs.readFile("Day4.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    let sum = 0;
    let sum2 = 0;
    const lines = data.split("\n");
    lines.forEach((line) => {
         line = line.split(/[,\s-]+/);

         let num1 = parseInt(line[0], 10);
         let num2 = parseInt(line[1], 10)
         let num3 = parseInt(line[2], 10)
         let num4 = parseInt(line[3], 10)
         console.log(num1,num2,num3,num4);

        // Part 1 
        if (num1 <= num4 && num1 >= num3 && num2 >= num3 && num2 <= num4) {
                sum = sum + 1;
        }else if (num3 <= num2 && num3 >= num1 && num4 >= num1 && num4 <= num2) {
                sum = sum + 1;
        }

        // Part 2 
        if (num1 >= num3 && num1 <= num4 || num2 >= num3 && num2 <= num4 ) {
            sum2 = sum2 + 1;
    }else if (num3 >= num1 && num3 <= num2 || num4 >= num1 && num4 <= num2) {
            sum2 = sum2 + 1;
     }
    });
    console.log(sum,sum2);
});