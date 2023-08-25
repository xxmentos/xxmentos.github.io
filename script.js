const button = document.getElementById('btn');
const title = document.querySelector('h1');

button.addEventListener('click', () => {
 button.style.display = 'none';
 document.body.style.backgroundColor = 'white';
 title.style.display = 'block';
});

title.innerText = 'Привет, я - mentos.';
