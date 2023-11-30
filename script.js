let menuBox = document.getElementById("menuBox");
let menu_icon = document.getElementById("menu_icon");
menu_icon.addEventListener("click", ()=>{
    
    menuBox.classList.toggle("open_menu");

    if(menuBox.classList.contains("open_menu")){
        menu_icon.src = "images/close.png";
    }
    else{
        menu_icon.src = "images/menu.png";
    }
})

