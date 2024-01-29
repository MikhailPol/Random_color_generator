const colorButtonGen = document.querySelector('.color__buttons-gen');
const colorButtonCopy = document.querySelector('.color__buttons-copy');
const colorBox = document.querySelector('.color__box');
const colorText = document.querySelector('.color__text');
const hex = '0123456789ABCDEF'
colorBox.style.backgroundColor = '#FFFFFF';

function randomGenerateColor() {
  let color = '#';
  for (let i = 0; i <=5; i++) {
    color += hex[Math.floor((Math.random() * 16))];
  }
  colorBox.style.backgroundColor = color;
  colorText.innerText = color;
}

function copyText() {
  let text = colorText.innerText;
  navigator.clipboard.writeText(text);
  colorButtonCopy.innerText = 'copied';
  setTimeout(() => colorButtonCopy.innerText = 'copy', 1000);
}

colorButtonGen.addEventListener('click', randomGenerateColor);
colorButtonCopy.addEventListener('click', copyText);