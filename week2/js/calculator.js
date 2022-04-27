//function that will read the contents of the input and write to the divi.
function getInput() {
    const userInput = document.querySelector("#uInput").value;
    const out = document.querySelector("#divi");
    out.innerHTML = `The text you entered is: ${userInput}`
    // alert(userInput)
}
// Call the function when the button is pressed.
const btn = document.querySelector("#inputBtn");
btn.addEventListener("click", getInput);

// Function that expects a number as argument and sums all the numbers from 1 upto number provided.
function calc() {
    const userNum = parseInt(document.querySelector("#calcNum").value);
    let sum = 0;
    for (let i = 1; i < userNum + 1; i++) {
        sum += i;
        
    }
  
    const out = document.querySelector("#calcDivi");
    out.innerHTML = `The Number you entered is: <b><u>${userNum}</b></u>
    <br />
    The sum numbers upto ${userNum} is: <b><u>${sum}</b></u>`
    
}
// Call the calc function when the calculate button is pressed.
const calcBtn = document.querySelector("#calcBtn");
calcBtn.addEventListener("click", calc);

//  Adding function
function addCalc() {
    const num1 = parseInt(document.querySelector("#num1").value);
    const num2 = parseInt(document.querySelector("#num2").value);
    const add = num1 + num2;

    const outadd = document.querySelector("#resultDivi");
    outadd.innerHTML = `The Numbers you entered are: <b><u>${num1}</b></u> and <b><u>${num2}</b></u>
    <br />
    The sum of the numbers is: <b><u>${add}</b></u>`;   
}
// Call the adding function when the plus button is pressed.
const addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", addCalc);


//  minus function
function minusCalc() {
    const num1 = parseInt(document.querySelector("#num1").value);
    const num2 = parseInt(document.querySelector("#num2").value);
    const minus = num1 - num2;

    const outminus = document.querySelector("#resultDivi");
    outminus.innerHTML = `The Numbers you entered are: <b><u>${num1}</b></u> and <b><u>${num2}</b></u>
    <br />
    The difference of the numbers is: <b><u>${minus}</b></u>`;   
}
// Call the minus function when the minus button is pressed.
const minusBtn = document.querySelector("#minusBtn");
minusBtn.addEventListener("click", minusCalc);

//  Multiplication function
function multiCalc() {
    const num1 = parseInt(document.querySelector("#num1").value);
    const num2 = parseInt(document.querySelector("#num2").value);
    const multi = num1 * num2;

    const outmulti = document.querySelector("#resultDivi");
    outmulti.innerHTML = `The Numbers you entered are: <b><u>${num1}</b></u> and <b><u>${num2}</b></u>
    <br />
    The product of the numbers is: <b><u>${multi}</b></u>`;   
}
// Call the minus function when the minus button is pressed.
const multiBtn = document.querySelector("#multiBtn");
multiBtn.addEventListener("click", multiCalc);

//  Divsion function
function diviCalc() {
    const num1 = parseInt(document.querySelector("#num1").value);
    const num2 = parseInt(document.querySelector("#num2").value);
    const divi = num1 / num2;

    const outdivi = document.querySelector("#resultDivi");
    outdivi.innerHTML = `The Numbers you entered are: <b><u>${num1}</b></u> and <b><u>${num2}</b></u>
    <br />
    The product of the numbers is: <b><u>${divi}</b></u>`;   
}
// Call the minus function when the minus button is pressed.
const diviBtn = document.querySelector("#diviBtn");
diviBtn.addEventListener("click", diviCalc);