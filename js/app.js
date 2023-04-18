function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputValue = parseFloat(inputField.value);
  return inputValue;
}

function setTextFieldValueId(id, value) {
  const textField = document.getElementById(id);
  textField.innerText = value;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeValue = getInputValue("inputIncome");

  // expenses input
  const foodValue = getInputValue("inputFood");
  const rentValue = getInputValue("inputRent");
  const clothesValue = getInputValue("inputClothes");

  const totalExpenses = foodValue + rentValue + clothesValue;

  // display total expense in the total expense field
  setTextFieldValueId("display-total-expenses", totalExpenses);

  // get remaining balance after expense and set balance
  const remainingBalance = incomeValue - totalExpenses;
  setTextFieldValueId("display-balance", remainingBalance);
});

document.getElementById("saving-btn").addEventListener("click", function () {
  const savingValue = getInputValue("inputSaving");
  const incomeValue = getInputValue("inputIncome");

  const savingAmount = (savingValue / 100) * incomeValue;

  // set saving amount
  setTextFieldValueId("display-saving-amount", savingAmount);

  //get final balance
  const balanceText = document.getElementById("display-balance");
  const balanceValue = parseFloat(balanceText.innerText);
  const finalBalance = balanceValue - savingAmount;
  //set final balance
  setTextFieldValueId("remaining-balance", finalBalance);
});
