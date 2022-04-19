const imgSmalls =  document.querySelectorAll(".img-new-1")
const imgBig =  document.querySelector(".img-new-2")
const btnDate =  document.querySelectorAll(".btn-small")
const btnDateBig =  document.querySelector(".btn-middle")
const textNews = document.querySelectorAll(".text-new")
var address =0;
imgSmalls.forEach((imgSmall, index)=>{
    imgSmall.addEventListener("mouseover" ,()=>{
        btnDate[index].classList.add("hover-btn-new")
        if(index>=4){
            textNews[index-4].classList.add('text-new--hover')
        } 
        imgSmall.addEventListener("mouseleave" ,()=>{
            btnDate[index].classList.remove("hover-btn-new")
            if(index>=4){
                 textNews[index-4].classList.remove('text-new--hover') 
            } 
        })
    })

})

imgBig.addEventListener("mouseover" ,()=>{
    btnDateBig.classList.add("hover-btn-new")
    imgBig.addEventListener("mouseleave" ,()=>{
        btnDateBig.classList.remove("hover-btn-new")
    })
})



