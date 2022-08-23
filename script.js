const billAmount = document.getElementById("bill-amount");
const cashAmount = document.getElementById("cash-amount");
const nextBtn = document.getElementById("next-btn");
const checkBtn = document.getElementById("check-btn");
const cashGiven = document.querySelector(".cash-given");

const noNotes = document.getElementsByClassName("noNotes");
const disclaimer = document.getElementById("disclaimer");

const currency = [2000, 500, 100, 20, 10, 5, 1];

// console.log(cashGiven.classList);

nextBtn.addEventListener("click", function () {
  console.log("clicked");
  if (billAmount.value > 0) {
    checkBtn.classList.remove("hidden");
    cashGiven.classList.remove("hidden");
    nextBtn.classList.add("hidden");
  } else {
    alert("Bill Amount Should be positive");
  }
});

checkBtn.addEventListener("click", function () {
  if (cashAmount.value < billAmount.value) {
    let extraAmount = billAmount.value - cashAmount.value;
    disclaimer.innerText = "Please add atleast " + extraAmount + "Rs";
  } else {
    let cashToGive = cashAmount.value - billAmount.value;
    for (let i = 0; i < currency.length; i++) {
      let notes = Math.trunc(cashToGive / currency[i]);
      cashToGive = cashToGive % currency[i];
      noNotes[i].innerText = notes;
    }
  }
});
