let inputs = document.querySelectorAll("input");
let icons = document.querySelectorAll("icons");   
let btn = document.querySelector("button");
inputs.forEach(function(input) {
    input.onblur = function(){

        if(input.value.length > 5){
            input.style.outline = "3px solid green";
            input.nextElementSibling.lastElementChild.classList.remove("d-none");

            
        }
        else{
            input.style.outline = "3px solid red";
            input.nextElementSibling.firstElementChild.classList.remove("d-none");

        }
    }
    input.onfocus = function(){
        input.style.outline = "";
        input.nextElementSibling.lastElementChild.classList.add("d-none");
        input.nextElementSibling.firstElementChild.classList.add("d-none");
    }
});
btn.addEventListener("click",function(e){
    inputs.forEach(function(input){
        if(input.value < 5){
            input.style.outline = "3px solid red";
            input.nextElementSibling.firstElementChild.classList.remove("d-none");
        }
    
    e.preventDefault()
    })});
