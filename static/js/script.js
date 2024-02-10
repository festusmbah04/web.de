"use strict";
const myFormEl = document.getElementById("myform");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const errorMsg = document.querySelector(".error");

myFormEl.addEventListener("submit", (e) => {
  const error = [];
  if (emailEl.value.trim() === "") {
    error.push("Enter Correct Username");
  }

  if (passwordEl.value.length < 4) {
    error.push("Incorrect Match");
  }
  if (passwordEl.value.length < 10) {
    error.push("Password Match");
  }

  if (error.length > 0) {
    e.preventDefault();
    errorMsg.innerHTML = error.join(", ");
  }
});
