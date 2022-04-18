const imgSmalls =  document.querySelectorAll(".img-new-1")
const imgBig =  document.querySelector(".img-new-2")
const btnDate =  document.querySelectorAll(".btn-small")
const btnDateBig =  document.querySelector(".btn-middle")
var address =0;
imgSmalls.forEach((imgSmall, index)=>{
    imgSmall.addEventListener("mouseover" ,()=>{
        btnDate[index].classList.add("hover-btn-new")
        imgSmall.addEventListener("mouseleave" ,()=>{
            btnDate[index].classList.remove("hover-btn-new")
        })
    })

})

imgBig.addEventListener("mouseover" ,()=>{
    btnDateBig.classList.add("hover-btn-new")
    imgBig.addEventListener("mouseleave" ,()=>{
        btnDateBig.classList.remove("hover-btn-new")
    })
})



