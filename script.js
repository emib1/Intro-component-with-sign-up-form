const firstName = document.getElementById("fname");
const lasttName = document.getElementById("lname");
const emailAddress = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
var input = document.getElementsByTagName("input");
var formError = document.getElementsByClassName("form_error");
var exclamation = document.getElementsByClassName("error");





function formValidation (event){

    /*for loop for the input fields */
    for (i = 0; i < 4; i++) {
        input[i].classList.remove("error");
        formError[i].style.display = "none";

     /*************email validation********** */
       
       if (!emailAddress.validity.valid){
         formError[2].style.display = "block";
         emailAddress.classList.add("error");
          event.preventDefault();
        }


    /*************other inputs validation********** */
   
    if ((input.type != "email" || input.type != "submit") && input[i].value == "" ){
        formError[i].style.display = "block";
        input[i].classList.add("error");
        event.preventDefault();
        }
     }
    }


 /*event listener on button, */
form.addEventListener("submit", formValidation, false)
