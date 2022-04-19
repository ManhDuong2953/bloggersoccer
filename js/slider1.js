const btnPre = document.querySelector(".btn-pre")
const btnAfter = document.querySelector(".btn-after")
const listImgNew = document.querySelector(".list-new-container")
var positionX1 = 0;
var valueSlice = 0;

btnAfter.onclick = ()=>{
    positionX1 = positionX1-295*3;
    if(positionX1<-2700 ){
        positionX1=-34;
    } else if( positionX1<-2600){
        positionX1=-2113;
    }
    listImgNew.style.transform= `translateX(${positionX1}px)`;
    listImgNew.style.transition = "all 0.7s ease-in-out";
    valueSlice = 1;
    clearInterval(timeIn1)
}

btnPre.onclick = ()=>{
    positionX1 = positionX1+295*3;
    if(positionX1>0){
        positionX1=-2113;
    } else if(positionX1 >= -343){
        positionX1=-34;
    }
    listImgNew.style.transform= `translateX(${positionX1}px)`;
    listImgNew.style.transition = "all 0.7s ease-in-out"
    clearInterval(timeIn1)
}

var timeIn1 = setInterval(() => {
        positionX1 = positionX1-295*3;
        if(positionX1<-2700 ){
            positionX1=-34;
        } else if( positionX1<-2600){
            positionX1=-2113;
        }
        listImgNew.style.transform= `translateX(${positionX1}px)`;
        listImgNew.style.transition = "all 0.7s ease-in-out";
    }, 4000);
        
