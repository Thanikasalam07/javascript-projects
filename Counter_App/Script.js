let count  = document.getElementById("count");

let value = 0;

let d_button = document.getElementById("decreasebutton");
d_button.addEventListener("click",()=>{
    value--;
  count.textContent = value;
})

let R_button = document.getElementById("resetbutton");
R_button.addEventListener("click",()=>{
    value = 0;
    count.textContent = value;
})

let I_button = document.getElementById("increasebutton");
I_button.addEventListener("click",()=>{
    value++;
    count.textContent = value;
})