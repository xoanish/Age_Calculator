// Inputs

const dayInp = document.getElementById("day");
const monthInp = document.getElementById("month");
const yearInp = document.getElementById("year");

// Outputs

const dayOpt = document.getElementById("DD");
const monthOpt = document.getElementById("MM");
const yearOpt = document.getElementById("YY");

// FORM ELEMENT

const form = document.querySelector("form");

// ADDING SUBMIT EVENT ,LISTENER TO FORM
form.addEventListener("submit",handleSubmit);

const date = new Date();
let day = date.getDate();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30,31]

function validate() {
    const inputs = document.querySelectorAll("input");
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = "red";
            parent.querySelector("small").innerText="This field is required."
            validator = false;
        }else if(monthInp.value > 12){
            monthInp.style.borderColor = "red";
            monthInp.parentElement.querySelector("small").innerText = "must be a valid month.";
            validator = false;
        }else if(dayInp.value > 31){
            dayInp.style.borderColor ="red";
            parent.querySelector("small").innerText = "This field is required."
            validator = false;
        }else{
            i.style.borderColor = "black";
            parent.querySelector("small").innerText = ""
            validator = true;
        }
    })
    return validator;
}

function handleSubmit(e) {
    e.preventDefault()    
}
