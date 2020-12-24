/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")

Passwords must not be any previous password in the passwords array. 

Example 1:
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/
// passwords = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];
// console.log("here " + passwords[1].length)



function validatePasswords(passwords) {
  // to get to know more about regular expression in Javascript 
  let my_regex = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\!#\$%\.\*&])[A-Za-z\d\!#\$%\.\*&]{5,}/

  let checker = passwords.map((item, index, arr) => {
    // console.log("item " + item)
    // console.log("index " + index)
    // console.log("arr " + arr)

    if (item.length >= 5 && item.match(my_regex) && arr.indexOf(item) === index) {
      return true;
    } else {
      return false;
    }
  });
  return checker
}


// Playground 

// function validatePasswords(passwords) {
//   let arrToRetturn = []
//   for (let i = 0; i < passwords.length - 1; i++) {
//     if (passwords[i].length >= 5) {
//       if (passwords[i].match(/[a-z]/)) {
//         if (passwords[i].match(/[A-Z]/)) {
//           if (passwords[i].match(/[0-9]/)) {
//             if (passwords[i].match(/["!", "#", "$", "%", ".", "*", "&"]/)) {
//               // if(passwords.map(item => item === passwords[i]).length > 0) {
//               //   arrToRetturn.push(true) 
//               // }              
//             }
//           }

//         }
//       }
//     }
//     // console.log(passwords[i])
//     let toDelete = passwords[i];
//     console.log("???")
//     while (passwords.indexOf(toDelete) > 0) {
//       let indexToDelete = passwords.indexOf(toDelete);
//       delete passwords[indexToDelete]
//       console.log("???")
//     }
//     arrToRetturn.push(false)

//   }
//   // console.log(arrToRetturn)
//   return arrToRetturn

// }

// function validatePasswords(passwords) {
//   let arrToRetturn = []
//   for (item of passwords) {
//       if(item.length <= 5) {
//         if(item.match(/[a-z]/)){
//           if(item.match(/[A-Z]/)) {
//             if(item.match(/[0-9]/)) {
//               if(item.match(/["!", "#", "$", "%", ".", "*", "&"]/)){
//                 if(item.match)
//               }
//             }
//           }
//         }
//       }

//   }
//   arrToRetturn.push(false)
// }

/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]

const { count } = require('console')
const util = require('util');

function test(test_name, actual, expected) {
  let status;
  if (util.isDeepStrictEqual(actual, expected)) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(expected)} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "validatePasswords function works - case 1",
  validatePasswords(passwords1),
  [false, false, true, false, false]
);

test(
  "validatePasswords function works - case 2",
  validatePasswords(passwords2),
  [true, true, false, false, false]
);
