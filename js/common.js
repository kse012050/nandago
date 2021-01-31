var subMenuBar = document.querySelector('.subMenuBar');
var subMenu = document.querySelectorAll('.subMenuArea ul li');
var startSubMenuBar = document.querySelectorAll('.subMenuArea ul li.active');

function indicator(e){
    subMenuBar.style.left = e.offsetLeft + "px";
    subMenuBar.style.width = e.offsetWidth + "px";
    console.log(e);
}

indicator(startSubMenuBar[0]);
subMenu.forEach(link => {
    link.addEventListener('click',(e) => {
        indicator(e.target);
    });
})
