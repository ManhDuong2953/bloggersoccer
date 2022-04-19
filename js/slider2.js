const btnPre2 = document.querySelector(".btn-pre-2")
const btnAfter2 = document.querySelector(".btn-after-2")
const listImgNew2 = document.querySelector(".list-new-container-2")
var positionX2 = 0;

btnAfter2.onclick = ()=>{
    positionX2 = positionX2-295*3;
    if(positionX2<-2700 ){
        positionX2=-34;
    } else if( positionX2<-2600){
        positionX2=-2113;
    }
    listImgNew2.style.transform= `translateX(${positionX2}px)`;
    listImgNew2.style.transition = "all 0.7s ease-in-out";
    clearInterval(timeIn2)
}

btnPre2.onclick = ()=>{
    positionX2 = positionX2+295*2;
    if(positionX2>0){
        positionX2=-2113;
    } else if(positionX2 >= -343){
        positionX2=-34;
    }
    listImgNew2.style.transform= `translateX(${positionX2}px)`;
    listImgNew2.style.transition = "all 0.7s ease-in-out"
    clearInterval(timeIn2)
}

var timeIn2 = setInterval(() => {
    positionX2 = positionX2-295*3;
    if(positionX2<-2700 ){
        positionX2=-34;
    } else if( positionX2<-2600){
        positionX2=-2113;
    }
    listImgNew2.style.transform= `translateX(${positionX2}px)`;
    listImgNew2.style.transition = "all 0.7s ease-in-out";
}, 4000);



