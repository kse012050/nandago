(function(){

var marker = document.querySelector('.subMenuBar');
var item = document.querySelectorAll('.subMenuArea');

function indicator(e){
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}
item.forEach(link => {
    link.addEventListener('click',(e) => {
        alert();
        indicator(e.target);
    });
})
console.log(item);
// item.addEventListener('click',function(){
// })
// alert();
})();