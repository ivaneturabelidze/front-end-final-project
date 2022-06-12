const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
menu.style.display = "none";

hamburger.addEventListener("click", () => {
    if(menu.style.display == "none"){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
});