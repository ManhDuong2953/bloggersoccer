const btnMenu = document.querySelector(".btn-menu")
const navMenu = document.querySelector(".nav")
const overlay = document.querySelector(".overlay")
const main = document.querySelector("#main")
btnMenu.onclick = (e)=>{
    navMenu.classList.add("nav-mobile");
    overlay.style.display = "flex";
    overlay.style.animation= "OpacityIncre .7s ease-in-out forwards"; 
    e.stopPropagation()

}
overlay.onclick = (e)=>{
    overlay.style.display = "none";    
    overlay.style.animation= "OpacityReduce 2s ease-in-out";
    navMenu.classList.remove("nav-mobile");

    e.stopPropagation()
}


main.onclick = (e)=>{
    overlay.style.display = "none";    
    overlay.style.animation= "OpacityReduce 2s ease-in-out";
    navMenu.classList.remove("nav-mobile");
    e.stopPropagation()
}