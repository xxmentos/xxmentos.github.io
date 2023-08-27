const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");

function getRandomPosition() {
  const maxX = window.innerWidth - 200; // Width of circle
  const maxY = window.innerHeight - 200; // Height of circle
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  return { x, y };
}

function moveCircle(circle) {
  const newPosition = getRandomPosition();
  circle.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
}

moveCircle(circle1);
moveCircle(circle2);

setInterval(() => {
  moveCircle(circle1);
  moveCircle(circle2);
}, 5000); // Move circles every 5 seconds
