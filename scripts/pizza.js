"use strict"

function selectedApizza() {
    let selectedOption = document.querySelector("input[name='pizza']:checked").value;
    //    alert(selectedOption);
    if (selectedOption == "1") {


        alert("price is 5.25");
    }
    else if (selectedOption == "2") {
        alert("price is 6.00");

    }
    else if (selectedOption == "3") {
        alert("price is 10.00");
    }
    else{
        alert ("invalid selction");
    }
}