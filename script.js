let container = document.querySelector('.container')
let h1 = document.querySelector('h1')
let colors = [
    'gold',
    'crimson',
    'blue',
    'indigo',
    'orange',
    'aqua',
    'yellow',
    'brown',
    'grey',
    'black',
    'limegreen'
]

const changeColor = function () {
    h1.innerHTML = `COLOR: ${this.style.backgroundColor.toUpperCase()}`
    h1.style.color = this.style.backgroundColor
    h1.style.borderRadius = '10px';
    document.body.style.backgroundColor = this.style.backgroundColor;
}

for (let color of colors) {
    const box = document.createElement('div')
    box.style.backgroundColor = color;
    box.classList.add('box')
    container.appendChild(box)
    box.addEventListener('click', changeColor)
}