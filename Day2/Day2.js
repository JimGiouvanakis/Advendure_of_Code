const fs = require("fs");

// Elve Choise
// A -> Rock
// B -> Paper
// C- > Scissors

// My Choise
// X -> Rock 1
// Y -> Paper 2
// Z- > Scissors 3

// Part 1
function Check(ElveChoise, mychoise) {
  let result;
  if (ElveChoise == "A") {
    if (mychoise == "Y") {
      result = 6;
    } else if (mychoise == "X") {
      result = 3;
    } else if (mychoise == "Z") {
      result = 0;
    }
  } else if (ElveChoise == "B") {
    if (mychoise == "Y") {
      result = 3;
    } else if (mychoise == "X") {
      result = 0;
    } else if (mychoise == "Z") {
      result = 6;
    }
  } else if (ElveChoise == "C") {
    if (mychoise == "Y") {
      result = 0;
    } else if (mychoise == "X") {
      result = 6;
    } else if (mychoise == "Z") {
      result = 3;
    }
  }
  return result;
}

// Part 2
function Check2(ElveChoise, mychoise) {
  let result;
  if (ElveChoise == "A") {
    //Rock
    if (mychoise == "Y") {
      // Draw
      result = 1;
    } else if (mychoise == "X") {
      // Lose
      result = 3;
    } else if (mychoise == "Z") {
      //Win
      result = 2;
    }
  } else if (ElveChoise == "B") {
    // Paper
    if (mychoise == "Y") {
      result = 2;
    } else if (mychoise == "X") {
      result = 1;
    } else if (mychoise == "Z") {
      result = 3;
    }
  } else if (ElveChoise == "C") {
    //Scissors
    if (mychoise == "Y") {
      result = 3;
    } else if (mychoise == "X") {
      result = 2;
    } else if (mychoise == "Z") {
      result = 1;
    }
  }
  return result;
}

fs.readFile("Day2.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // console.log(data);
  let sum = 0;
  const lines = data.split("\n");

  lines.forEach((line) => {
    const parts = line.trim().split(" ");

    const firstElve = parts[0];
    const mychoise = parts[1];

    // Part 1
    // if (mychoise == "Y") {
    //   sum = sum + 2;
    // } else if (mychoise == "X") {
    //   sum = sum + 1;
    // } else if (mychoise == "Z") {
    //   sum = sum + 3;
    // }

    // Part 2
    if (mychoise == "Y") {
      sum = sum + 3;
    } else if (mychoise == "X") {
      sum = sum + 0;
    } else if (mychoise == "Z") {
      sum = sum + 6;
    }

    //Part 1
    // let result = Check(firstElve, mychoise);
    // sum = sum + result;

    // Part 2
    let result = Check2(firstElve, mychoise);
    sum = sum + result;
  });
  console.log(`${sum}\n`);
});
