const btnMenu = document.querySelector(".btn-menu")
const navMenu = document.querySelector(".nav")
const overlay = document.querySelector(".overlay")
const main = document.querySelector("#main")
btnMenu.onclick = (e)=>{
    navMenu.classList.add("nav-mobile");
    // navMenu.style.transform = "translateX(0%)";
    overlay.style.display = "flex";
    overlay.style.animation= "OpacityIncre .7s ease-in-out forwards"; 
    e.stopPropagation()

}
overlay.onclick = (e)=>{
    // navMenu.style.transform = "translateX(-110%)";
    overlay.style.display = "none";    
    overlay.style.animation= "OpacityReduce 2s ease-in-out";
    navMenu.classList.remove("nav-mobile");

    e.stopPropagation()
}


main.onclick = (e)=>{
    // navMenu.style.transform = "translateX(-100%)";
    overlay.style.display = "none";    
    overlay.style.animation= "OpacityReduce 2s ease-in-out";
    navMenu.classList.remove("nav-mobile");
    e.stopPropagation()
}