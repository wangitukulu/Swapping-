//Swapping between the second and the last degit 

let userEnterNumber = prompt("Enter a number of at least three digits")
let digitNumber = "";// empty string yo be filled up
let x = userEnterNumber.length;

//console.log(userEnter.slice(userEnter.length-1))
for (i = 0; i < userEnterNumber.length; i++) {
  if (i == 0) {
    digitNumber += userEnterNumber[0]// first number no swap
  }
  else if (i == 1) {
    digitNumber += userEnterNumber[userEnterNumber.length - 1] // swap second and last number
  }
  else if (i == userEnterNumber.length - 1) {
    digitNumber += userEnterNumber[1] // between last and second
  }
  else if (i !== 1 && i !== userEnterNumber.length - 1) {
    digitNumber += userEnterNumber[i] // numbers excep two and last do not swap
  }
}
console.log(digitNumber);                      