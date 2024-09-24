const changeColorBtn = document.createElement('button');
changeColorBtn.classList.add('color-btn');
changeColorBtn.textContent = 'Change color text';
document.body.appendChild(changeColorBtn);

const textElement = document.createElement('p');
textElement.textContent = 'This text can change color, try click to button!';
document.body.appendChild(textElement);

const getRandomColor =  () =>{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const changeTextColor = () =>{
    const randomColor = getRandomColor();
    textElement.style.color = randomColor;
};

changeColorBtn.addEventListener('click', changeTextColor);