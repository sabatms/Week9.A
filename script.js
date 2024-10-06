function getColor() { 
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color; 
}

function getBrightness(color) { 
    const a = parseInt(color.slice(1, 3), 16);
    const b = parseInt(color.slice(3, 5), 16);
    const c = parseInt(color.slice(5, 7), 16);
    return 0.2126 * a + 0.7152 * b + 0.0722 *c; 
}

function changeBoxColor(box, hexCodeElement) { 
    const newColor = getColor(); 
    box.style.backgroundColor = newColor; 
    hexCodeElement.textContent = newColor; 
    hexCodeElement.style.backgroundColor = newColor;
    
    const brightness = getBrightness(newColor);
    hexCodeElement.style.color = brightness < 128 ? 'white' : 'black';
}

const boxes = document.querySelectorAll('.box');
const hexCodes = document.querySelectorAll('.hex-code');

boxes.forEach((box, index) => {
    const hexCodeElement = document.getElementById(`hex${index + 1}`);
    changeBoxColor(box, hexCodeElement); 
    box.addEventListener('click', () => changeBoxColor(box, hexCodeElement));
});
