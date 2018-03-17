// class Clock {
//   constructor() {
//     let date = new Date();
//     this.hours = date.getHours();
//     this.minutes = date.getMinutes();
//     this.seconds = date.getSeconds();
//     this.printTime();
//     setInterval( () => {this.seconds++; this.printTime();}, 1000);
//   }
//
//   printTime() {
//     console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
//   }
//
//   _tick() {
//     this.seconds++;
//     this.printTime();
//   }
// }

// module.exports = Clock;
// const clock = new Clock();
// console.log(clock.printTime());

//
// //
// function addNumbers(sum, numsLeft, completionCallback) {
//   if (numsLeft === 0){
//     reader.close();
//     return completionCallback(sum);
//   }
//
//   reader.question('Please enter a number!', function (res) {
//     console.log(`You replied ${res}.`);
//     sum += parseInt(res);
//     console.log(sum);
//     numsLeft = numsLeft - 1;
//     return addNumbers(sum, numsLeft, completionCallback);
//   });
//
// }
//
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
//
// function absurdBubbleSort(arr, sortCompletionCallback) =

function bubbleSort(array) {
  // let sorted = false;

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j  < array.length; j++) {
//       if (array[i] < array[j]) {
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
// }
  // while (sorted === false) {
  //   sorted = true;
  //   for (let i = 0; i < array.length; i++) {
  //     let j = i + 1;
  //     if (j === array.length){
  //       continue;
  //     }
  //     if (array[i] > array[j]) {
  //       let temp = array[i];
  //       array[i] = array[j];
  //       array[j] = temp;
  //       sorted = false;
  //     }
  //   }
  // return array;
}



const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.


  reader.question(`Is ${el1} > ${el2}? (y/n)`, function(res) {
    console.log(`YOUR SAID ${res}!?!?!??!!??!`);

    if (res === "y") {
      callback(true);
    } else {
      callback(false);
    }
  });
}


// Once you're done testing askIfGreaterThan with dummy arguments, write this.
//   // Do an "async loop":
//   // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
//   //    know whether any swap was made.
//   // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
//   //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
//   //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.

  function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
      if (isGreaterThan === true ) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
     });

  }
}



// // Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// // Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.
//
function absurdBubbleSort(arr, sortCompletionCallback) {
  outerBubbleSortLoop(true);

  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
}
//   // Kick the first outer loop off, starting `madeAnySwaps` as true.
// }
//
// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted arr: " + JSON.stringify(arr));
//   reader.close();
// });
class Food {
  constructor(name) {
    this.name = name;
  }

  // consume() {
  //   console.log(this.name)
  // }
}

const consume = function () {
  // console.log(this) // the global this.
  console.log("Eating " + this.name);
};

const cheese = new Food('cheese');

Function.prototype.myBind = function(object) {
  return () => {
    this.call(object);
  };
};

consume.myBind(cheese);
