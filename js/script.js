// Array Of All Months
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Date
const d = new Date();

// Day Now
let dayNow = d.getDate();

// Month Now
let monthNow = (months.indexOf(months[d.getMonth()])) + 1;

// Year Now
let yearNow = d.getFullYear();

let birthDay,
    birthMonth,
    birthYear;

const inputs = Array.from(document.querySelectorAll("input")),
      textError = document.querySelectorAll("p"),
      btn = document.querySelector(".button-contener"),
      details = Array.from(document.querySelectorAll(".details p span"));

inputs.forEach(input => {
  input.addEventListener("keyup", () => {
    const index = inputs.indexOf(input);
    textError[index].style.display = input.value === "" ? "block" : "none";
    input.style.borderColor = input.value === "" ? "var(--light-red)" : "var(--purple)";
    if (input.getAttribute("id") === "day" && (input.value > 30 || input.value < 1)) {
      input.style.borderColor = "var(--light-red)";
      textError[index].innerHTML = "must be valid day";
      textError[index].style.display = "block";
    }
    if (input.getAttribute("id") === "month" && (input.value > 12 || input.value < 1)) {
      input.style.borderColor = "var(--light-red)";
      textError[index].innerHTML = "must be valid month";
      textError[index].style.display = "block";
    }
    if (input.getAttribute("id") === "year" && (input.value > yearNow || input.value < 1)) {
      input.style.borderColor = "var(--light-red)";
      textError[index].innerHTML = "must be in the past";
      textError[index].style.display = "block";
    }
    if (input.value === "") {
      textError[index].innerHTML = "This field is required";
    }
  });
});

// Function Start When You Click In Button
btn.onclick = () => {
  inputs.forEach(input => {
    const index = inputs.indexOf(input);
    if (input.value === "") {
      textError[index].innerHTML = "This field is required";
      textError[index].style.display = input.value === "" ? "block" : "none";
      input.style.borderColor = "var(--light-red)" ;
    }
    else {
      if (input.getAttribute("id") === "day") {
        birthDay = input.value;
      }
      if (input.getAttribute("id") === "month") {
        birthMonth = input.value;
      }
      if (input.getAttribute("id") === "year") {
        birthYear = input.value;
      }
      calcAge(birthDay, birthMonth, birthYear);
    }
  });
};


// Function To Calculat The Age
function calcAge(birthDay, birthMonth, birthYear) {
  let day, month, year;
  const age = [];
  if (dayNow < birthDay) {
    monthNow = monthNow - 1;
    dayNow = dayNow + 30;
    day = dayNow - birthDay;
  }
  else {
    day = dayNow - birthDay;
  }
  if (monthNow < birthMonth) {
    yearNow = yearNow - 1;
    monthNow = monthNow + 12;
    month = monthNow - birthMonth;
  }
  else {
    month = monthNow - birthMonth;
  }
  year = yearNow - birthYear;

  // Puch Values In Array Age
  age.push(year, month, day);

  // Put The The Values In 
  details.forEach(span => {
    let index = details.indexOf(span);
    span.innerHTML = age[index];
  });
}

