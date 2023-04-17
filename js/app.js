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
});
