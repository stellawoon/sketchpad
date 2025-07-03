
const container = document.querySelector(".container");
const btn = document.querySelector(".number");

createGrid(16);

btn.textContent = "Change Grid Size";
btn.addEventListener("click", () => {
  let newSize = prompt("Enter grid size (max 100):");
  newSize = parseInt(newSize);
  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }
  createGrid(newSize);
});

function createGrid(size) {
  container.innerHTML = "";

  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}
