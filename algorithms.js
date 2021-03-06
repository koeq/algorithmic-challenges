// hackerrank problem solving
// EASY

// solve me first
function solveMeFirst(a, b) {
  // Hint: Type return a+b below
  return a + b;
  // bruh
}

// simple array sum
function simpleArraySum(ar) {
  return ar.reduce((prev, curr) => prev + curr);
}

// compare the triplets
function compareTriplets(a, b) {
  let aScore = 0;
  let bScore = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aScore++;
    } else if (b[i] > a[i]) {
      bScore++;
    }
  }
  let result = [aScore, bScore];
  return result;
}

// a very big sum
function aVeryBigSum(ar) {
  // Write your code here
  return ar.reduce((prev, curr) => prev + curr);
}

// diagonal difference
function diagonalDifference(arr) {
  // Write your code here

  let sum1 = null;
  let sum2 = null;

  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[arr.length - 1 - i][i];
  }
  return Math.abs(sum1 - sum2);
}

// plus minus
function plusMinus(arr) {
  // Write your code here
  let neg = null;
  let pos = null;
  let zero = null;

  arr.forEach((e) => {
    if (e < 0) {
      neg++;
    } else if (e > 0) {
      pos++;
    } else if (e === 0) {
      zero++;
    }
  });

  const sum = neg + pos + zero;

  console.log((pos / sum).toFixed(6));
  console.log((neg / sum).toFixed(6));
  console.log((zero / sum).toFixed(6));
}

// staircase
// alternativ
// for (let i = 0; i < n; i++) {
//  console.log("#".repeat(i).padStart(n));
// }
function staircase(n) {
  // Write your code here
  // rows
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (n - 1 - i > j) {
        row += " ";
      } else {
        row += "#";
      }
    }
    console.log(row);
  }
}

// min-max sum
function miniMaxSum(arr) {
  // Write your code here

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let minIndex = arr.indexOf(min);
  let maxIndex = arr.indexOf(max);

  let maxArr = [...arr];
  maxArr.splice(minIndex, 1);

  let minArr = [...arr];
  minArr.splice(maxIndex, 1);

  let minSum = minArr.reduce((prev, curr) => prev + curr);
  let maxSum = maxArr.reduce((prev, curr) => prev + curr);

  console.log(minSum, maxSum);
}

// birthday candles
function birthdayCakeCandles(candles) {
  // Write your code here

  let tallest = Math.max(...candles);

  let result = null;

  candles.forEach((e) => {
    if (e === tallest) {
      result++;
    }
  });
  return result;
}

// time conversion
function timeConversion(s) {
  // Write your code here
  // AM 12:00:00 - 11:59:00  ---> 00:00:00 - 11:59:00
  // PM 12:00:00 - 11:59:00  ---> 12:00:00  - 23:59:00

  let result = s.split("");
  let cycle = result.splice(8, 2).join("");
  let hours = parseInt(result.splice(0, 2).join(""), 10);
  let minutes = parseInt(result.splice(1, 2).join(""), 10);
  let seconds = parseInt(result.splice(2, 2).join(""), 10);

  if (cycle === "AM" && hours === 12) {
    hours = hours - 12;
  } else if (cycle === "PM" && hours !== 12) {
    hours += 12;
  }

  return `${hours.toString().padStart(2, "0")}
    :${minutes.toString().padStart(2, "0")}
    :${seconds.toString().padStart(2, "0")}`;
}

// arrays -ds
function reverseArray(a) {
  // Write your code here

  /* let result = [];
  a.forEach(e => {
      result.unshift(e);
  })
  return result
  */

  return a.reverse();
}

// 2D array - DS
function hourglassSum(arr) {
  // Write your code here
  // i+2 <= i.length-1 && j+2 <= j.length-1

  let sums = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      // just testing for i would be enough since arr is 6x6
      // testing for both makes it also work for asymmetrical 2d arrays
      if (i + 2 <= arr.length - 1 && j + 2 <= arr[0].length - 1) {
        let sum =
          arr[i][j] +
          arr[i][j + 1] +
          arr[i][j + 2] +
          arr[i + 1][j + 1] +
          arr[i + 2][j] +
          arr[i + 2][j + 1] +
          arr[i + 2][j + 2];
        sums.push(sum);
      }
    }
  }
  return Math.max(...sums);
}

// grading students
function gradingStudents(grades) {
  // Write your code here
  for (let i = 0; i < grades.length; i++) {
    // less than 38 is failing grade --> no rounding
    if (grades[i] >= 38) {
      // get next higher multiple of 5
      let multipleOf5 = grades[i];
      while (multipleOf5 % 5 !== 0) {
        multipleOf5++;
      }
      // if next higher multiple of 5  - grades[i] < 3
      if (mutlipleOf5 - grades[i] < 3) {
        grades[i] = multipleOf5;
      }
    }
  }
  return grades;
}

// number line jumps
function kangaroo(x1, v1, x2, v2) {
  // handling case where one kangaroo starts ahead && is faster
  if ((x2 > x1 && v2 > v1) || (x1 > x2 && v1 > v2)) {
    return "NO";
  }

  // x1 + y * v1 = x2 + y * v2  -> / - v2 * y
  // x1 + y * v1 - y * v2 = x2 -> / - x1
  // y * v1 - y * v2 = x2 - x1 / factore out y
  // y * (v1-v2) = x2 - x1
  // y = (x2 - x1) / (v1 - v2)

  // evaluated term after y (number of jumps) and check if y is a whole number
  if (((x2 - x1) / (v1 - v2)) % 1 === 0) {
    return "YES";
  } else {
    return "NO";
  }
}

// between two sets
function getTotalX(a, b) {
  // Write your code here

  let lower = Math.max(...a);
  let upper = Math.min(...b);

  let counter = 0;

  // test all numbers bewteen lower and upper bound
  for (let i = lower; i <= upper; i++) {
    if (a.every((e) => i % e === 0) && b.every((e) => e % i === 0)) {
      counter++;
    }
  }
  return counter;
}

// breaking the record
function breakingRecords(scores) {
  // Write your code here

  let minNum = scores[0];
  let maxNum = scores[0];
  let minCounter = 0;
  let maxCounter = 0;

  scores.forEach((e) => {
    if (e < minNum) {
      minNum = e;
      minCounter++;
    } else if (e > maxNum) {
      maxNum = e;
      maxCounter++;
    }
  });

  return [maxCounter, minCounter];
}

// apple and orange

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here

  let appleCounter = 0;
  let orangeCounter = 0;

  apples.forEach((apple) => {
    // spot where apple is landing
    let location = a + apple;
    if (location >= s && location <= t) {
      appleCounter++;
    }
  });
  oranges.forEach((orange) => {
    // spot where orange is landing
    let location = b + orange;
    if (location >= s && location <= t) {
      orangeCounter++;
    }
  });
  console.log(appleCounter);
  console.log(orangeCounter);
}

// subarray division
function birthday(s, d, m) {
  // Write your code here

  // conditions:
  // segment.length === m
  // segment[0] + segment[1] === d

  let result = 0;

  for (let i = 0; i <= s.length - m; i++) {
    let arr = [...s];
    let segment = arr.splice(i, m);
    let count = segment.reduce((prev, curr) => prev + curr);

    if (count === d) {
      result++;
    }
  }
  return result;
}

// left rotation
function rotateLeft(d, arr) {
  // Write your code here
  let left = arr.splice(0, d);
  return [...arr, ...left];
}

// sparse arrays
function matchingStrings(strings, queries) {
  // Write your code here

  let results = [];

  queries.forEach((query) => {
    let counter = 0;
    strings.forEach((string) => {
      if (query === string) {
        counter++;
      }
    });
    results.push(counter);
  });
  return results;
}

// array manipulation
function arrayManipulation(n, queries) {
  // Write your code here

  let arr = Array(n).fill(0);

  queries.forEach((querie) => {
    arr[querie[0] - 1] += querie[2];
    arr[querie[1]] -= querie[2];
  });

  let maxCounter = 0;
  let counter = 0;

  arr.forEach((e) => {
    counter += e;
    if (counter > maxCounter) {
      maxCounter = counter;
    }
  });

  console.log(arr);
  return maxCounter;
}

// print elements of a linked list
// recursiv version
function printLinkedList(head) {
  if (head.next === null) {
    console.log(head.data);
    return;
  }

  console.log(head.data);
  printLinkedList(head.next);
}

// insert node at beginning of linked list
function insertNodeAtHead(head, data) {
  const linkedList = {
    data: data,
    next: head,
  };

  return linkedList;
}

// divisible sum pair
function divisibleSumPairs(n, k, ar) {
  // Write your code here

  let counter = 0;

  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar.length; j++) {
      if (i < j && (ar[i] + ar[j]) % k === 0) {
        counter++;
      }
    }
  }
  return counter;
}

// migratory birds
function migratoryBirds(arr) {
  // Write your code here
  let sighting = Array(6).fill(0);

  for (let i = 0; i < arr.length; i++) {
    sighting[arr[i]]++;
  }
  // works because indexOf returns the first match -> sightings is ordered
  return sighting.indexOf(Math.max(...sighting));
}

// bill division
function bonAppetit(bill, k, b) {
  // Write your code here
  bill.splice(k, 1);
  const sharedBill = bill.reduce((prev, curr) => prev + curr);
  if (sharedBill / 2 === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - sharedBill / 2);
  }
}

// sales by match
function sockMerchant(n, ar) {
  // Write your code here
  let sockList = [...new Set(ar)];
  let result = 0;

  sockList.forEach((kind) => {
    let counter = 0;
    ar.forEach((sock) => {
      if (kind === sock) {
        counter++;
      }
    });
    result += Math.floor(counter / 2);
  });
  return result;
}

// drawing book
function pageCount(n, p) {
  // Write your code here
  // book has even number of pages
  if (n % 2 === 0) {
    if (p === 1 || p === n) {
      return 0;
    } else if (p === n - 1) {
      return 1;
    } else {
      return Math.min(Math.floor(p / 2), Math.floor((n - p) / 2));
    }
    // book has uneven number of pages
  } else {
    if (p === 1 || p === n || p === n - 1) {
      return 0;
    } else {
      return Math.min(Math.floor(p / 2), Math.floor((n - p) / 2));
    }
  }
}

// simple solution *not mine*
function pageCount(n, p) {
  /*
    n: the number of pages in the book
    p: the page number to turn to
  */

  const pageTurns = Math.floor(p / 2);
  const totalTurns = Math.floor(n / 2);

  /* Returns the total number of page turns it takes to get
  to a page or how many it requires if starting from the back */

  return Math.min(pageTurns, totalTurns - pageTurns);
}

// counting valleys
function countingValleys(steps, path) {
  // Write your code here

  let sealevel = 0;
  let valleys = 0;

  for (let i = 0; i < path.length; i++) {
    if (path[i] === "D" && sealevel === 0) {
      valleys++;
    }
    path[i] === "D" ? sealevel-- : sealevel++;
  }

  return valleys;
}

// electronics shop
function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  keyboards = keyboards.sort((a, b) => a - b);
  drives = drives.sort((a, b) => a - b);
  let comb = [];

  if (keyboards[0] + drives[0] > b) {
    return -1;
  }

  keyboards.forEach((keyboard) => {
    drives.forEach((drive) => {
      if (keyboard + drive <= b) {
        comb.push(keyboard + drive);
      }
    });
  });

  return Math.max(...comb);
}

// cats and a mouse
function catAndMouse(x, y, z) {
  if (Math.abs(z - x) === Math.abs(z - y)) {
    return "Mouse C";
  } else if (Math.abs(z - x) < Math.abs(z - y)) {
    return "Cat A";
  } else {
    return "Cat B";
  }
}

// picking numbers
function pickingNumbers(a) {
  // Write your code here
  let maxLength = 0;

  // iterate over every element except the last
  let counter = 0;
  for (let i = 0; i < a.length - 1; i++) {
    if (Math.abs(a[i] - [i + 1]) <= 1) {
      counter++;
      if (counter > maxLength) {
        maxLength = counter;
      }
    } else {
      counter = 0;
    }
  }
  return maxLength;
}

//  picking numbers
function pickingNumbers(a) {
  let maxLength = 0;

  for (let i = 0; i < a.length; i++) {
    let sub = [];
    sub.push(a[i]);

    for (let j = 0; j < a.length; j++) {
      let min = Math.min(...sub);
      let max = Math.max(...sub);
      if (Math.abs(a[i] - a[j]) <= 1) {
        if (Math.abs(a[j] - min) <= 1 && Math.abs(a[j] - max) <= 1) {
          sub.push(a[j]);
        }
      }
    }
    if (sub.length > maxLength) {
      maxLength = sub.length;
    }
  }

  return maxLength - 1;
}

// design pdf viewer
function designerPdfViewer(h, word) {
  // generate alphabet
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x).toLocaleLowerCase());

  // get heights of letters of word
  const mapHeightToLetter = (word, h, alphabet) => {
    let heights = [];
    for (let letter of word) {
      for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === letter) {
          heights.push(h[i]);
        }
      }
    }
    return heights;
  };

  const heights = mapHeightToLetter(word, h, alphabet);
  const maxHeight = Math.max(...heights);

  return maxHeight * heights.length;
}

// NEW CODE ABOVE
// algorithmic challenges from the hackerrank 1 Month interview prep
// week 2

// grid challenge
function gridChallenge(grid) {
  // Write your code here
  let arr = [];
  let result = "YES";
  grid.forEach((str) => arr.push([...str]));

  arr.forEach((array) => array.sort());

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].charCodeAt() > arr[i + 1][j].charCodeAt()) {
        result = "NO";
      }
    }
  }

  return result;
}

// sherlock and array
function balancedSums(arr) {
  // Write your code here
  let sum = arr.reduce((prev, curr) => prev + curr);
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum -= arr[i];
    if (sum === leftSum) {
      return "YES";
    }
    leftSum += arr[i];
  }
  return "NO";
}

// recursiv digit sum
function superDigit(n, k) {
  // Write your code here

  if (n.length === 1) {
    return n;
  }

  let arr = [...n];
  let sum = arr.reduce((a, b) => parseInt(a) + parseInt(b)).toString() * k;

  return superDigit(sum.toString(), 1);
}

// counter game
function counterGame(n) {
  // Write your code here

  function powerOfTwo(n) {
    // & -> bitwise operator
    // sets each bit to 1 of both bits are 1
    // n -> 1 0 0 0...   n-1 -> 0 1 1 1...
    // n & n-1 === 0 for powers of 2
    return n !== 0 && (n & (n - 1)) === 0;
  }

  let counter = 0;

  if (n === 1) {
    return "Richard";
  }
  while (n > 1) {
    if (powerOfTwo(n)) {
      n = n / 2;
      counter++;
    } else {
      let num = 2;
      let temp = 2;
      while (num < n) {
        num *= temp;
      }
      n = n - num / 2;
      counter++;
    }
  }

  return counter % 2 === 0 ? "Richard" : "Louise";
}

// sum vs xor
function sumXor(n) {
  /* WORKS BUT TOO SLOW FOR BIG NUMBERS
    // Write your code here
    let counter = 0;
    
    // 0 <= x <= n
    for (let i=0; i <= n; i++) {

        if (n+i == (n^i)) {
            counter++;
        }        
    }
    return counter;
    */

  // numbers that meet criteria have a zeros
  // where there are ones in n in the binary representation
  // ---> see bitwise operator ^ for criteria
  // 10010
  // 0**0* -> 2 of the power of 3

  const binary = n.toString(2);
  const zeros = binary.split("0").length - 1;

  // special case 0
  // 0+0 === 0 and 0^0 === 0
  if (n === 0) {
    return 1;
  } else {
    return 2 ** zeros;
  }
}

// MOCK TEST 2
//palindrome index ONLY MEETING 12  OF 14 TEST CASES
function palindromeIndex(str) {
  // Write your code here

  let position = -1;
  let start = 0;
  let end = 0;

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i + start] !== str[str.length - 1 - i + end]) {
      if (str[i + start + 1] === str[str.length - 1 - i + end]) {
        position = i;
        start = 1;
      } else if (str[i + start] === str[str.length - 2 - i + end]) {
        position = str.length - 1 - i;
        end = -1;
      }
    }
  }
  return position;
}

// between two sets
function getTotalX(a, b) {
  // Write your code here
  // num is between max(arr1) and min(arr2)

  const min = Math.max(...a);
  const max = Math.min(...b);
  let results = [];

  for (let i = min; i <= max; i++) {
    if (
      a.every((element) => i % element === 0) &&
      b.every((element) => element % i === 0)
    ) {
      results.push(i);
    }
  }
  return results.length;
}
