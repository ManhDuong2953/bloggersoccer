const btnPre3 = document.querySelector(".btn-pre-3")
const btnAfter3 = document.querySelector(".btn-after-3")
const listImgNew3 = document.querySelector(".list-new-container-3")
var positionX3 = 0;
btnAfter3.onclick = ()=>{
    positionX3 = positionX3-295*3;
    if(positionX3<-2700 ){
        positionX3=-34;
    } else if( positionX3<-2600){
        positionX3=-2113;
    }
    listImgNew3.style.transform= `translateX(${positionX3}px)`;
    listImgNew3.style.transition = "all 0.7s ease-in-out"; 
    clearInterval(timeIn3)
}

btnPre3.onclick = ()=>{
    positionX3 = positionX3+295*3;
    if(positionX3>0){
        positionX3=-2113;
    } else if(positionX3 >= -343){
        positionX3=-34;
    }
    listImgNew3.style.transform= `translateX(${positionX3}px)`;
    listImgNew3.style.transition = "all 0.7s ease-in-out";
    clearInterval(timeIn3)
}

var timeIn3 =   setInterval(() => {
    positionX3 = positionX3-295*3;
    if(positionX3<-2700 ){
        positionX3=-34;
    } else if( positionX3<-2600){
        positionX3=-2113;
    }
    listImgNew3.style.transform= `translateX(${positionX3}px)`;
    listImgNew3.style.transition = "all 0.7s ease-in-out";
}, 4000);