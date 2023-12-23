const form = document.querySelector(".form");

const hide = document.querySelector(".hide");

const confirmBtn = document.getElementById("confirm");
const nameInput = document.getElementById("nameInput");
const errorName = document.querySelector(".errorName");

const numberInput = document.getElementById("numberInput");

const errorNumber = document.querySelector(".errorNumber");

const month = document.getElementById("month");

const year = document.getElementById("year");

const errorDate = document.querySelector(".errorDate");

const cvcInput = document.getElementById("cvc");

const errorCvc = document.querySelector(".errorCVC");

const continueBtn = document.getElementById("continue");

const zeros = document.querySelector(".zeros");

const name = document.querySelector(".name");

const infoDate = document.querySelector(".dater");
const zero = document.querySelector(".zero");

const mois = document.querySelector(".mois");

const annee = document.querySelector(".annee");

let isValid = false;

numberInput.addEventListener("keyup", (event) => {
    console.log(event.key);
    if (isNaN(event.key) && event.key == "backspace") {
        errorNumber.textContent = "Wrong format, numbers only";
        isValid = false;
    } else if (!isNaN(event.key) && numberInput.value.length <= 19){
        errorNumber.textContent = "";
        zeros.innerHTML = numberInput.value;
        if(numberInput.value.length == 19){
            isValid = true;
            return true;

        }
    }

    if (isNaN(event.key) && event.key == "Space") {
        zeros.innerHTML += " ";
    }
});

month.addEventListener("keyup", (event) => {
    if (month.value == "") {
        errorDate.innerHTML = "Can't be blank";
        mois.innerHTML = "00";
    } else if (month.value != "" && month.value <= 12) {
        errorDate.innerHTML = "";
        mois.innerHTML = month.value;
        isValid = true;
        return isValid;  
    }
    if (month.value > 12 && month.value != "") {
        errorDate.innerHTML = "Invalid month";
    }
});


year.addEventListener("keyup", (event) => {
    if (year.value == "") {
        errorDate.innerHTML = "Can't be blank";
        annee.innerHTML = "00";
        isValid = false;
    } else if (year.value != "" && year.value.length <= 2) {
        errorDate.innerHTML = "";
        annee.innerHTML = year.value;
        isValid = true;
        return isValid;
        
    }
    if (year.value.length > 2) {
        errorDate.innerHTML = "Invalid year";
        isValid = false;
        return isValid;
    }
});

cvcInput.addEventListener("keyup", () => {
    if (cvcInput.value == "") {
        errorCvc.innerHTML = "Can't be blank";
        zero.innerHTML = "000";
        isValid = true;
        return isValid;
    } else {
        if (cvcInput.value.length > 3) {
            zero.innerHTML=zero.innerHTML;
               }else{
            errorCvc.innerHTML = "";
        zero.innerHTML = cvcInput.value;
        }
        
        
    }
});

nameInput.addEventListener("keyup", (event) => {
    name.innerHTML = nameInput.value;
});


confirmBtn.addEventListener("click", () => {
    if(isValid){
        form.classList.add("hide");
        form.classList.remove("form");
        hide.classList.add("form");
        hide.classList.add("no_hide");
        hide.classList.remove("hide");
        // hide.classList.add("form");
    }
    
   
});

continueBtn.addEventListener("click", () =>{
    form.classList.remove("hide");
    form.classList.add("form");
    hide.classList.remove("form");
    hide.classList.remove("no_hide");
    hide.classList.add("hide");
})




