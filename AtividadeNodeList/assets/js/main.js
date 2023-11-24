const containerElements = document.querySelector('.container');
const paragrafos = containerElements.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);
const backGroundColorBody = styleBody.backgroundColor;

for (let value of paragrafos) { 
    value.style.backgroundColor = backGroundColorBody;
    value.style.color = '#ffffff';
}