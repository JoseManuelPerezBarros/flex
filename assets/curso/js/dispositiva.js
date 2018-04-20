/*document.getElementsByClassName('col')[0].addEventListener('click', () =>
    document.getElementsByClassName('col')[0].classList.toggle('flow-text'));*/
let texto = document.querySelector('.contenido');
let mas = document.querySelector('.aumenta');
let menos = document.querySelector('.disminuye');

if (texto.style.fontSize == '') {
    menos.classList.add('disabled');
}

mas.addEventListener('click', () => {
    menos.classList.remove('disabled');
    if (texto.style.fontSize.substr(-2) == 'em') {
        texto.style.fontSize = (parseFloat(texto.style.fontSize.match(/^\d{1}(\.\d{1,2})?/)) + 0.1).toFixed(1) + 'em';
        if (parseFloat(texto.style.fontSize.match(/^\d{1}(\.\d{1,2})?/)) >= 3.0) {
            mas.classList.add('disabled');
        }
    } else if (texto.style.fontSize.substr(-2) == 'px') {
        texto.style.fontSize = '1.1em';
    } else {
        texto.style.fontSize = '1.1em';

    }
});

menos.addEventListener('click', () => {
    mas.classList.remove('disabled');
    if (texto.style.fontSize.substr(-2) == 'em') {
        texto.style.fontSize = (parseFloat(texto.style.fontSize.match(/^\d{1}(\.\d{1,2})?/)) - 0.1).toFixed(1) + 'em';
        if (parseFloat(texto.style.fontSize.match(/^\d{1}(\.\d{1,2})?/)) == 1.0) {
            menos.classList.add('disabled');
        }
    }
});