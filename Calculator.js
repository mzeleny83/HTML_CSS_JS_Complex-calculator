const firstNumber = parseInt(prompt("Zadej první číslo"));
const secondNumber = parseInt(prompt("Zadej druhé číslo"));
const operation = prompt("Zadej typ opearace");
const calculate = (operation) => {
  if (operation === "addition") return firstNumber + secondNumber;
  if (operation === "subtraction") return firstNumber - secondNumber;
  if (operation === "multiplication") return firstNumber * secondNumber;
  if (operation === "division") return firstNumber / secondNumber;
  return "Neexistující operace";
};

const createResult = () => {
  const result = document.createElement("p");
  result.textContent = calculate(operation);
  document.body.append(result);
};

createResult();
