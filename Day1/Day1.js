
const fs = require('fs');

fs.readFile('Day1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

function sumNumbers(data, callback) {
    // Split the text into an array of strings, one for each line
    const lines = data.split('\n');
  
    // Create an array to store the results
    const results = [];
  
    // Create a variable to store the current sum
    let currentSum = 0;
  
    // Iterate over the lines
    for (const line of lines) {
      // Parse the line as an integer
      const number = parseInt(line, 10);
    
      // If the line is not a number, store the current sum in the results array
      // and reset the current sum to 0
      if (isNaN(number)) {
        results.push(currentSum);
        currentSum = 0;
        
      } else {
        // Add the number to the current sum
        currentSum += number;
       
      }
    }
   console.log(data);
    // After the loop completes, store the final value of the current sum in the results array
    results.push(currentSum);
  //Sorting all the number in the result and finding the 3 biggest 
    const sortedResults = results.sort((a, b) => b - a);
    const topThree = sortedResults.slice(0, 3);
    const sum = topThree.reduce((total, current) => total + current, 0);
    // Call the callback function with the results array as an argument
    callback(results);
    callback(sum);
  
}
// Call the sumNumbers function with a callback function to print the results
sumNumbers(data, (sum) => {
  console.log(sum);


});
}); 
