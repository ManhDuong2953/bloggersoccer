const imgSmalls =  document.querySelectorAll(".img-new-1")
const imgBig =  document.querySelector(".img-new-2")
var btnDate =  document.querySelectorAll(".btn-small")
var btnDateBig =  document.querySelector(".btn-middle")
const textNewsjs = document.querySelectorAll(".text-new-js")
var textNews = document.querySelectorAll(".title-new")


imgSmalls.forEach((imgSmall, index) => {
    imgSmall.addEventListener("mouseover", ()=>{
        btnDate[index].classList.add("hover-btn-new");
        imgSmall.addEventListener("mouseout", ()=>{
            btnDate[index].classList.remove("hover-btn-new");
        })
    })
});




textNews.forEach((textNew, index) => {
    textNew.addEventListener("mouseover", ()=>{
        console.log(index)
    if(index===2){
        btnDateBig.classList.add("hover-btn-new");
        textNew.addEventListener("mouseout", ()=>{
            btnDateBig.classList.remove("hover-btn-new");
        })
    }
    
    else if(index!=2){
        var num=index-1;
        if(index<=1){
            num=index;
        }
        btnDate[num].classList.add("hover-btn-new");
        textNew.addEventListener("mouseout", ()=>{
            btnDate[num].classList.remove("hover-btn-new");
        })
    }
    })
})




textNewsjs.forEach((textNewjs,index)=>{
    textNewjs.addEventListener("mouseover", ()=>{
        textNewjs.classList.add("text-new--hover");
        textNewjs.addEventListener("mouseout", ()=>{
            textNewsjs[index].classList.remove("text-new--hover");
        })
    })
})

