// (function(){

var subMenuBar = document.querySelector('.subMenuBar');
var subMenu = document.querySelectorAll('.subMenuArea ul li');

function indicator(e){
    subMenuBar.style.left = e.offsetLeft + "px";
    subMenuBar.style.width = e.offsetWidth + "px";
}
subMenu.forEach(link => {
    link.addEventListener('click',(e) => {
        indicator(e.target);
    });
})
// })();