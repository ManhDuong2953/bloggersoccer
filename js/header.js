const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const listItems = $$(".list-item");
const listItem = $(".list-item");

listItems.forEach( (list,index) => {           
    list.onclick = ()=>{
        $(".list-item.active").classList.remove("active");
        list.classList.add("active")
    }
});
