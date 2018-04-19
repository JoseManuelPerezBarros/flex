var options = {};
var elem = document.querySelector('.sidenav');
var slide = M.Sidenav.init(elem, options);

let iframe = document.querySelector('iframe');
let contenedor = document.querySelector('article');
/* console.log(iframe.clientHeight);
console.log(iframe.offsetHeight);
console.log(iframe.scrollHeight); */

/* console.log(iframe.contentWindow.document.body.scrollHeight); // FUNCIONA BIEN
console.log(iframe.contentWindow.document.documentElement.scrollHeight);
console.log(iframe.contentWindow.document.documentElement.offsetHeight);
//iframe.contentWindow.document.documentElement.style.overflowY='hidden';
//let altura = iframe.contentWindow.document.body.scrollHeight;
let altura = iframe.contentWindow.document.body.scrollHeight;
document.querySelector('article').height = altura;
iframe.height = altura; */

//https://www.silocreativo.com/category/disenoweb/
let contenido = iframe.contentDocument.getElementsByClassName('contenido')[0];
contenedor.appendChild(contenido);

window.addEventListener('load', () => {
    
    window.addEventListener('resize', () => {
        if (innerWidth <= 992) {
            document.getElementsByTagName('main')[0].style.paddingLeft = '0px';
        } else {
            document.getElementsByTagName('main')[0].style.paddingLeft = '300px';
            if (document.querySelector('.sidenav-overlay').style.display == 'block') {
                document.querySelector('.sidenav-overlay').style.display = 'none';
                document.querySelector('.sidenav-overlay').style.opacity = '0';
            }
        }
    });

    document.getElementsByClassName('sidenav-trigger')[0].addEventListener('click', (e) => {

        e.stopImmediatePropagation();
        if (slide.isOpen) {
            slide.close();
            document.getElementsByTagName('main')[0].style.paddingLeft = '0px';
        } else if (!slide.isOpen && innerWidth <= 992) {
            slide.open();
        } else if (!slide.isOpen && innerWidth > 992) {
            slide.open();
            document.getElementsByTagName('main')[0].style.paddingLeft = '300px';
        } else {
            console.error("Error")
        }
    });
});