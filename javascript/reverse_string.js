function reverseString(str) {
  // type your code here

  let result = [];

  for (let i = str.length - 1; i > -1; i--) {
    result.push(str[i]);

  }

  return result.join("");


}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("Expecting: 'auhsoJ'");
  console.log("=>", reverseString("Joshua"));

  console.log("");

  console.log("Expecting: 'Buggie'");
  console.log("=>", reverseString("eigguB"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Initialize an empty array called result
// iterate through each letter in str
// push each letter of the string into the result array
// return result.join("")
