function calculate() {
  var bill_amount = document.getElementById("bill_amount").value;
  var service = document.getElementById("service").value;
  var people = document.getElementById("people").value;

  if (bill_amount === "" || service === 0) {
    alert("Please enter valid Number :");
    return;
  }

  if (people === "" || people <= 1) {
    people = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  var total = (bill_amount * service) / people;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2); //2 decimal places
  document.getElementById("totaltip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("btnClick").onclick = function () {
  calculate();
};
