const form = document.getElementById('contact-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    message.textContent = 'Form send';
});