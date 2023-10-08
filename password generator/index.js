const inputSlider = document.querySelector("#len-slider");
const lengthDisplay = document.querySelector("#length-show");
const PasswordDisplay = document.querySelector(".password-display");
const copymsg = document.querySelector(".data-copy");
const copybtn= document.querySelector(".copy-btn");
const UppercaseCheck = document.querySelector("#Uppercase");
const LowercaseCheck = document.querySelector("#Lowercase");
const symbolCheck = document.querySelector("#Symbols");
const numberCheck = document.querySelector("#numbers");
const indicator = document.querySelector("#dataindicator");
const generateBtn = document.querySelector
("#genrate-password");
const allCheckBox = document.querySelectorAll("input[type = checkbox]");
const Symbols = '!@#$%^&*()_+}{":><?*/';

let password = "";
let passwordlength = 10;
let checkcount = 0;
// set pass lemntg
function handleslider() {
    inputSlider.value = passwordlength;
    lengthDisplay.innerText = passwordlength;
}
handleslider();


function getRndInt(min , max) {
   return Math.floor(Math.random()*(max-min)) + min;
}

function generateRdmNum() {
    return getRndInt(0,9);
}

function genLowerCase() {
    return String.fromCharCode(getRndInt(97,123));
}
function genUpperrCase() {
    return String.fromCharCode(getRndInt(65,90));
}
function genSymbol() {
        const randnum = getRndInt(0,Symbols.length);
        return Symbols.charAt(randnum);
}
function setindicator(color) {
    indicator.style.background = color;
    indicator.style.boxShadow = `0 0 12px 1px ${color}`;
}
setindicator("#ccc");
 function  calcStrength() {
    let hasUpper = false;
    let haslower = false;
    let hasNum = false;
    let hasSym = false;

    if(UppercaseCheck.checked) hasUpper = true;
    if(LowercaseCheck.checked) haslower = true;
    if(numberCheck.checked) hasNum = true;
    if(symbolCheck.checked) hasSym = true;

    if(hasUpper && haslower && (hasNum|| hasSym) && passwordlength>=8) {
        setindicator("#0f0");
    }
    else if(
        (haslower || hasUpper) && (hasNum || hasSym) && passwordlength>=6){
          setindicator("#ff0")
        }
    else {
        setindicator("#f00")
    }    
 }
async function copycontent() {
    try{
        await navigator.clipboard.writeText(PasswordDisplay);
        copymsg.innerText = "copied";
    }
    catch(e) {
           copymsg.innerText = "failed";
    }
    copymsg.classList.add("active");
    

    setTimeout( () => {
        copymsg.classList.remove("active")
    },2000);
}

inputSlider.addEventListener('input', (e) => {
    passwordlength = e.target.value;
    handleslider();
})

copybtn.addEventListener('click', () => {
if(PasswordDisplay.value)
      copycontent();
})

function shufflepassword(Array) {
    // fisher vates method
    for(let i=Array.length -1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        const temp = Array[i];
        Array[i] = Array[j];
        Array[j] =temp;
    }
    let str = "";
    Array.forEach((el) => (str += el));
    return str;
}
function handlecheckboxchange() {
    checkcount= 0;
    allCheckBox.forEach((checkbox) => {
        if(checkbox.checked)
        checkcount++;
    })
    if(passwordlength<checkcount) {
        passwordlength = checkcount;
        handleslider();
    }
}
console.log("done");


allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handlecheckboxchange);
    
});

generateBtn.addEventListener('click', () => {
     if(checkcount <=0) return;


     if(passwordlength < checkcount) {
        passwordlength = checkcount;
        handleslider();
     }


    //  form password

    // remove old
    password ="";

    // lets put stuff

    // if(UppercaseCheck.checked) {
    //     password+=genUpperrCase();
    // }
    // if(LowercaseCheck.checked) {
    //     password+=genLowerCase();
    // }
    // if(numberCheck.checked) {
    //     password+=generateRdmNum();
    // }
    // if(symbolCheck.checked) {
    //     password+=genSymbol();
    // }

    let funcarr = [];
    if(UppercaseCheck.checked)
        funcarr.push(genUpperrCase);
    if(LowercaseCheck.checked)
        funcarr.push(genLowerCase);
    if(numberCheck.checked)
        funcarr.push(generateRdmNum);
    if(symbolCheck.checked)
        funcarr.push(genSymbol);
    

        // compulsory

        for(let i=0; i<funcarr.length;i++) {
            password += funcarr[i]();
        }
        // remaining

        for(let i=0; i<passwordlength- funcarr.length; i++) {
            let randIndex = getRndInt(0,funcarr.length)
            password += funcarr[randIndex]();
        }


// shuffle

password = shufflepassword(Array.from(password));

// show

PasswordDisplay.value = password;
// calc strenth
calcStrength();
    });