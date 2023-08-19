let hungry = prompt("Are you hungry? (s) or (n): ");
let money = prompt("Do you have money? (s) or (n): ");
let restaurant = prompt("Restaurant is open? (s) or (n): ");

if (hungry === "n" || money === "n") {
  console.log("The dinner will be in house");
} else if (hungry === "s" && money === "s" && restaurant !== "s") {
  console.log("Order one delivery! ");
} else if (hungry === "s" && money === "s" && restaurant === "s") {
  console.log("The dinner today wii be in your restaurant.");
}