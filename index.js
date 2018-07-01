const header = document.getElementsByTagName("header")[0];

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 65) {
        header.classList.add("active");
        console.log("Listener fired");
    } else {
        header.classList.remove("active");
    }
}) 
function Redirect() {
    window.location="https://www.hayward-pool.com/shop/en/pools/res-in-ground/res-sanitization";
 }
var about = document.getElementById("about");
var phone = document.getElementById("aboutmockup");
window.addEventListener('scroll', function(){
    if(about.getBoundingClientRect().top < 400 && about.getBoundingClientRect().top>-600) {
        phone.classList.add("active");
    }
    else{
        phone.classList.remove("active");
    }
});