let baseDrinkPrice = 8;
let baseDessertPrice = 6;

if (baseDrinkPrice > baseDessertPrice) {
  console.log("Drinks are more expensive than desserts.");
} else {
  console.log("Desserts are more expensive or equal.");
}
function calculateTotal() {
  let total = 0;
  const extras = document.querySelectorAll('input[name="extras"]:checked');
  extras.forEach(() => total += 2);
  return total;
}
for (let i = 1; i <= 3; i++) {
  console.log("Loop item " + i);
}
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const extraCost = calculateTotal();

  document.getElementById("messageArea").innerText =
    `Order received, ${name}. Extra cost: $${extraCost}.`;
});

document.querySelector("h1").style.color = "brown";