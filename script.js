const radiobtn1=document.getElementById("uppercase").Checked;
const radiobtn2=document.getElementById("lowercase").Checked;
const radiobtn3=document.getElementById("symbols").Checked;
const radiobtn4=document.getElementById("numbers").Checked;
const input = document.getElementById("inpt");
const button=document.getElementById("btn");
const text=document.getElementById("text");



function generatePassword(length, includeLowerCase,includeUpperCase, includeNumbers, includeSymbols){


const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars="0123456789";
const symbolChars="!@#$%^&*()_+=";

let allowedChars="";
let password="";


allowedChars += includeLowerCase ? lowercaseChars: "";

allowedChars +=includeUpperCase ? uppercaseChars: "";

allowedChars +=includeNumbers ? numberChars: "";


allowedChars +=includeSymbols ? symbolChars: "";


if(length<=0){
    return `(password length must be atleast 1)`;
}
if(allowedChars.length===0){
    return `(At least one set of chars should be selected)`;
}

for(let i=0;i<length; i++){
    const randomIndex=Math.floor(Math.random()*allowedChars.length);

    password+=allowedChars[randomIndex];
}

    return password;
}



    const passwordLength=12;
    const includeLowerCase=true;
    const includeUpperCase=true;
    const includeNumbers=true;
    const includeSymbols=true;



const password = generatePassword(passwordLength,
                                 includeLowerCase,
                                 includeUpperCase,
                                 includeNumbers,
                                 includeSymbols);

console.log(`generated password :${password}`);                             



