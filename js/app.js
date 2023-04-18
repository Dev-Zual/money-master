document.getElementById("calculate-btn").addEventListener("click", function () {
  const incomeField = document.getElementById("inputIncome");
  const incomeValue = parseFloat(incomeField.value);

  // expenses input
  const foodField = document.getElementById("inputFood");
  const foodValue = parseFloat(foodField.value);
  const rentField = document.getElementById("inputRent");
  const rentValue = parseFloat(rentField.value);
  const clothesField = document.getElementById("inputClothes");
  const clothesValue = parseFloat(clothesField.value);

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
  const savingPercent = document.getElementById("inputSaving");
  const savingValue = parseInt(savingPercent.value);

  const incomeField = document.getElementById("inputIncome");
  const incomeValue = parseFloat(incomeField.value);

  const savingAmount = (savingValue / 100) * incomeValue;

  // set saving amount
  const savingAmountText = document.getElementById("display-saving-amount");
  savingAmountText.innerText = savingAmount;
});
