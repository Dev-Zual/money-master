function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputValue = parseFloat(inputField.value);
  return inputValue;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeValue = getInputValue("inputIncome");

  // expenses input
  const foodValue = getInputValue("inputFood");
  const rentValue = getInputValue("inputRent");
  const clothesValue = getInputValue("inputClothes");

  const totalExpenses = foodValue + rentValue + clothesValue;

  // display total expense in the total expense field
  const totalExpenseField = document.getElementById("display-total-expenses");
  totalExpenseField.innerText = totalExpenses;

  // get remaining balance after expense and set balance
  const remainingBalance = incomeValue - totalExpenses;
  const balanceText = document.getElementById("display-balance");
  balanceText.innerText = remainingBalance;
});

document.getElementById("saving-btn").addEventListener("click", function () {
  const savingValue = getInputValue("inputSaving");
  const incomeValue = getInputValue("inputIncome");

  const savingAmount = (savingValue / 100) * incomeValue;

  // set saving amount
  const savingAmountText = document.getElementById("display-saving-amount");
  savingAmountText.innerText = savingAmount;

  //get final balance
  const balanceText = document.getElementById("display-balance");
  const balanceValue = parseFloat(balanceText.innerText);
  const finalBalance = balanceValue - savingAmount;
  const displayFinalBalance = document.getElementById("remaining-balance");
  displayFinalBalance.innerText = finalBalance;
});
