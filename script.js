const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function moveCircle(circle) {
  const newPosition = getRandomPosition();
  const newColor = getRandomColor();
  circle.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
  circle.style.backgroundColor = newColor;
}

setInterval(() => {
  moveCircle(circle1);
  moveCircle(circle2);
}, 5000); // Move circles every 5 seconds
