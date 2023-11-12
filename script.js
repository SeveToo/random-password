const generateButton = document.querySelector('.generateButton');
const azCheckbox = document.querySelector('#az');
const AZCheckbox = document.querySelector('#AZ');
const numbCheckbox = document.querySelector("#Numbers");
const specialMarksCheckbox = document.querySelector('#specialMarks');
const copy = document.querySelector('.copy');

const sixchars = document.querySelector('#sixchars');
const toTen = document.querySelector('#toTen');
const toFifty = document.querySelector('#toFifty');

function rand(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); };

let passwordLength=6;
const passTab = [[4,6],[7,10],[11,15]];

sixchars.onclick = () => {passwordLength = rand(passTab[0][0],passTab[0][1])};
toTen.onclick = () => { passwordLength = rand(passTab[1][0],passTab[1][1])}
toFifty.onclick = () => {passwordLength = rand(passTab[2][0],passTab[2][1])}


const az = "abcdefghijklmnopqrsuvwxyz"
const AZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numb = "0123456789"
const specialMarks = "!@#$%^&*()-+=_"


let password="";
counter = 0;
function generatePassword(){
  password = "";
  for (let i = 0; i < passwordLength; i) {
    if(!azCheckbox.checked && !AZCheckbox.checked && !numbCheckbox.checked && !specialMarksCheckbox.checked){
      counter++;
        password = "Try Again " + counter;
        i=1000;
    }
    if(azCheckbox.checked) {
      password += az.charAt(rand(0,az.length-1));
    i++;
    }
    if(AZCheckbox.checked) {
      password += AZ.charAt(rand(0,AZ.length-1));
    i++;
    }
    if(numbCheckbox.checked) {
      password += numb.charAt(rand(0,numb.length-1));
    i++;
    }
    if(specialMarksCheckbox.checked) {
      password += specialMarks.charAt(rand(0,specialMarks.length-1));
    i++;
    }
    }
}

generateButton.addEventListener("click", () => {
    generatePassword();
    document.querySelector('.password').innerHTML = password;
})

function copyAnimation() {
    copy.classList.add("copied");
    setTimeout(()=>{copy.classList.remove("copied")},1000)
}

copy.onclick = () => {
  navigator.clipboard.writeText(password);
  copyAnimation();
}





// function generatePassword(){
    // for(let i=0; i<passwordLength; i++){
        // if(azCheckbox.checked && !AZCheckbox.checked && !numbCheckbox.checked && !specialMarksCheckbox.checked){
            // password += String.fromCharCode(rand(97,122));
        // } else if (!azCheckbox.checked && AZCheckbox.checked && !numbCheckbox.checked && !specialMarksCheckbox.checked){
            // password += String.fromCharCode(rand(65,90));
        // } else if (!azCheckbox.checked && !AZCheckbox.checked && numbCheckbox.checked && !specialMarksCheckbox.checked){
            // password += rand(0,9);
        // } else if (!azCheckbox.checked && !AZCheckbox.checked && !numbCheckbox.checked && specialMarksCheckbox.checked){
            // password += String.fromCharCode(rand(33,43));
        // } else if (azCheckbox.checked && AZCheckbox.checked && !numbCheckbox.checked && !specialMarksCheckbox.checked){
            // let char = rand(1,2)
            // switch (char) {
            //   case 1:
                // password += String.fromCharCode(rand(97,122));
                // break;
            //   case 2:
                // password += String.fromCharCode(rand(65,90));
                // break;
            // }
        // } else if (azCheckbox.checked && AZCheckbox.checked && numbCheckbox.checked && !specialMarksCheckbox.checked){
            // let char = rand(1,3)
            // switch (char) {
            //   case 1:
                // password += String.fromCharCode(rand(97,122));
                // break;
            //   case 2:
                // password += String.fromCharCode(rand(65,90));
                // break;
            //   case 3:
                // password += rand(0,9);
                // break;
            // }
        // } else if (azCheckbox.checked && AZCheckbox.checked && numbCheckbox.checked && specialMarksCheckbox.checked){
            // let char = rand(1,4)
            // switch (char) {
            //   case 1:
                // password += String.fromCharCode(rand(97,122));
                // break;
            //   case 2:
                // password += String.fromCharCode(rand(65,90));
                // break;
            //   case 3:
                // password += rand(0,9);
                // break;
            //   case 4:
                // password += String.fromCharCode(rand(33,43));
                // break;
            // }
        // }
        // console.log(password);
    // }
// }


// console.log(String.fromCharCode(91))//[
// console.log(String.fromCharCode(92))//\
// console.log(String.fromCharCode(93))//]
// console.log(String.fromCharCode(94))//^
// console.log(String.fromCharCode(95))//_
// console.log(String.fromCharCode(96))//`
// console.log(String.fromCharCode(96))//`
// console.log('a'.charCodeAt(0)); // 97
// console.log('z'.charCodeAt(0)); // 122
// console.log('A'.charCodeAt(0)); // 65
// console.log('Z'.charCodeAt(0)); // 90
// console.log('!'.charCodeAt(0)); // 33
// console.log('+'.charCodeAt(0)); // 43