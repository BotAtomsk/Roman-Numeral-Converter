// references for the HTML elements
const input = document.getElementById("number");
const convert = document.getElementById("convert-btn");
const output = document.getElementById("output");

// functions
function convertToRoman(num) {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const res = [];

  // for the ref array, checks every sub array against our number. If the number is bigger than the sub array number, it adds that letter to the result, then diminishes our number by the value of the sub array number
  ref.forEach((subArr) => {
    while (num >= subArr[1]) {
      res.push(subArr[0]);
      num -= subArr[1];
    }
  });

  // our res is an array of letters, we need to join it into a string
  return res.join("");

}

function checkConversion() {

  const number = parseInt(input.value);
  // clean the input
  input.value = "";
  let errorMsg = "";
  
  // guard clauses
  if (isNaN(number)) {
    errorMsg = "Please enter a valid number";
  } else if (number <= 0) {
    errorMsg = "Please enter a number greater than or equal to 1";
  } else if (number >= 4000) {
    errorMsg = "Please enter a number less than or equal to 3999";
  }

  if (errorMsg !== "") {
    output.innerText = errorMsg;
  } else {
    output.innerText = convertToRoman(number);
  }




  

  
  
}

// eventListeners
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkConversion();
  } 
})
convert.addEventListener("click", checkConversion);