"use strict";
const list = document.querySelectorAll(".circle");
const submit = document.querySelector(".btn1");
let selectEl;
// Selecting the Rating
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function (event) {
   for (let j = 0; j < list.length; j++) {
     if(i!==j)
     {
       list[j].classList.remove("clicked");
     }
   }
    list[i].classList.add("clicked");


    selectEl = event.target;
  });
}
// Submit button handler
submit.addEventListener("click", function () {
  document.querySelector(".Rate-Container").classList.add("hidden");
  document.querySelector(".ThankYou-Container").classList.remove("hidden");
  document.querySelector(".container").classList.add("width");
  document.querySelector(".select").textContent = `${selectEl.textContent}`;
});
