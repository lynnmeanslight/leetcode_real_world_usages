// app.js

function findItems() {
  // Get the budget from the input field
  const budget = parseInt(document.getElementById("budget").value);

  // Items available in the store with their prices
  const items = [2, 7, 11, 15];

  // Hash map to store item price and its index
  const itemMap = {};

  // Loop through items to find two that sum up to the budget
  for (let i = 0; i < items.length; i++) {
    const complement = budget - items[i];
    if (complement in itemMap) {
      // Display the result if two items found
      document.getElementById("result").innerHTML = `You can buy Item ${
        itemMap[complement] + 1
      } ($${complement}) and Item ${i + 1} ($${items[i]})`;
      document.getElementById("noResult").innerHTML = ""; // Clear no-result message
      return;
    }
    itemMap[items[i]] = i;
  }

  // Display no result if no such pair is found
  document.getElementById("result").innerHTML = "";
  document.getElementById("noResult").innerHTML =
    "No two items match your budget.";
}
