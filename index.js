let btnOn = document.getElementById('btnOn');
let btnOff = document.getElementById('btnOff');
let idImages = document.querySelector('#idImage');
let btnOnf = () => {
    idImages.src = './images/pic_bulbon.gif';
}
let btnOfff = () => {
    idImages.src = './images/pic_bulboff.gif';
}

btnOn.addEventListener('click',btnOnf);
btnOff.addEventListener('click',btnOfff);
