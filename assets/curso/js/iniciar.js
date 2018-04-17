var options = {};
var elem = document.querySelector('.sidenav');
var instance = M.Sidenav.init(elem, options);

let iframe = document.querySelector('iframe');
console.log(iframe.clientHeight)
console.log(iframe.offsetHeight)
console.log(iframe.scrollHeight)

console.log(iframe.contentWindow.innerHeight)
console.log(iframe.contentWindow.outerHeight)