const input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'focus here...');
document.body.appendChild(input);

const message = document.createElement('p');
document.body.appendChild(message);

input.addEventListener('focus', () =>{
    message.textContent = 'Focus is acquired!';
});

input.addEventListener('blur', () =>{
    message.textContent = 'Focus is lost!'
});