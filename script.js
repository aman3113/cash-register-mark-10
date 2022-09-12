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
  cashValue = Number(cashAmount.value);
  billVAlue = Number(billAmount.value);
  let cashToGive = 0;

  if (cashValue < billVAlue) {
    let extraAmount = billVAlue - cashValue;
    disclaimer.innerHTML = `
    <div class = "alert" > 
    Please add atleast  <span> Rs ${extraAmount} </span>  more.
    </div>`;
    cashToGive = extraAmount;
  } else {
    cashToGive = cashValue - billVAlue;
  }
  for (let i = 0; i < currency.length; i++) {
    let notes = Math.trunc(cashToGive / currency[i]);
    cashToGive = cashToGive % currency[i];
    noNotes[i].innerText = notes;
  }
});
