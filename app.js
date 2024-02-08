// Question 1: FizzBuzz
// Write a program that prints the numbers from 1 to 100. For multiples of 3, print "Fizz"; for
// multiples of 5, print "Buzz"; and for numbers that are multiples of both 3 and 5, print
// "FizzBuzz".
function printFuzzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log("Fizz");
    } else if (i % 3 !== 0 && i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
}

// Question 2: Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100.
function fibonacci() {
  let start = -1;
  let next = 1;

  for (let i = 0; i < 100; i++) {
    let final = start + next;
    console.log(final);
    start = next;
    next = final;
  }
}

// Question 3: Power of Two
// Write a program that takes an integer as input and returns true if the input is a power of two
function powerOfTwo(n) {
  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2;
      continue;
    }
    break;
  }
  return n > 1 ? false : true;
}

// Question 4: Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter of each word in the
// string, and then returns the result string
function capitalizeWords(sentence) {
  const words = sentence.split(" ");
  let finalSentence = "";
  words.forEach((word) => {
    let capsWord = word.charAt(0).toUpperCase() + word.slice(1);
    finalSentence += ` ${capsWord}`;
  });
  return finalSentence;
}

// Question 5: Reverse Integer
// Write a program that takes an integer as input and returns an integer with reversed digit
// ordering.
function reverseInteger(n) {
  const str = n.toString().split("");
  let newNum = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newNum += str[i];
  }
  return Number(newNum);
}

// Question 6: Count Vowels
// Write a program that counts the number of vowels in a sentence.

// eg " Hello World " => returns 2
function countVowels(sentence) {
  let count = 0;
  const vowel = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "a") {
      vowel.a++;
    } else if (sentence[i] === "e") {
      vowel.e++;
    } else if (sentence[i] === "i") {
      vowel.i++;
    } else if (sentence[i] === "o") {
      vowel.o++;
    } else if (sentence[i] === "u") {
      vowel.u++;
    }
  }

  vowel.a >= 1 && count++;

  vowel.e >= 1 && count++;

  vowel.i >= 1 && count++;

  vowel.o >= 1 && count++;

  vowel.u >= 1 && count++;

  return count;
}
