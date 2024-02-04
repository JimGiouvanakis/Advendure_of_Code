const fs = require(`fs`);


fs.readFile("Day5.txt", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

const lines = data.replace(/\r/g,""); //
// console.log({lines})
  const [stack,moves] = lines.split("\n\n");
  
  const something = stack.split('\n').map((line) => [...line].filter((value, index) => index % 4 === 1));

//   console.log(something[0]); 
let FullStack= {};
  const columns = something.pop();
for (const line of something) {
   for (let i = 0; i <columns.length; i++) {
    if (line[i] !== ` `) {
        FullStack[columns[i]] = line[i];
    // console.log(FullStack);
  }

}
console.log(FullStack);
}
})