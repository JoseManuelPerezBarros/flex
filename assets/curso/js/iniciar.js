var options = {};
var elem = document.querySelector('.sidenav');
var instance = M.Sidenav.init(elem, options);

let iframe = document.querySelector('iframe');
/* console.log(iframe.clientHeight);
console.log(iframe.offsetHeight);
console.log(iframe.scrollHeight); */

console.log(iframe.contentWindow.document.body.scrollHeight);  // FUNCIONA BIEN
console.log(iframe.contentWindow.document.documentElement.scrollHeight);
console.log(iframe.contentWindow.document.documentElement.offsetHeight);
//iframe.contentWindow.document.documentElement.style.overflowY='hidden';
//let altura = iframe.contentWindow.document.body.scrollHeight;
let altura = iframe.contentWindow.document.body.scrollHeight;
document.querySelector('article').height=altura;
iframe.height = altura; 


