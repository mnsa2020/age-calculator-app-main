const inputDay = document.getElementById("day");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");
const dayResult = document.getElementById("DD");
const monthResult = document.getElementById("MM");
const yearResult = document.getElementById("YY");
const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  let inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("span").innerText = "This field is Required";
      validator = false;
    } else if (inputMonth.value > 12) {
      inputMonth.style.borderColor = "red";
      inputMonth.parentElement.querySelector("span").innerText =
        "Must be a valid Month";
      validator = false;
    } else if (inputDay > 31) {
      inputDay.style.borederColor = "red";
      inputDay.parentElement.querySelector("span").innerText =
        "Mus be a valid Day";
      validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("span").innerText = "";
      validator = true;
    }
  });
  return validator;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (inputDay.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (inputMonth.value > month) {
      month = month + 12;
      year = year - 1;
    }
  }

  const d = day - inputDay.value;
  const m = month - inputMonth.value;
  const y = year - inputYear.value;

  dayResult.innerHTML = d;
  monthResult.innerHTML = m;
  yearResult.innerHTML = y;
}

// function validate() {
//   let items = document.querySelectorAll(".items");
//   for (let i = 0; i < items.length; i++) {
//     if (items[i].value == "") {
//       const parent = items[i].parentElement;
//       items[i].focus(); // focuses on that particular input
//       items[i].style.borderColor = "red";
//       parent.querySelector("span").innerText = "This field is required";
//       return false;
//     }
//   }
// }
