let menuIcon = document.querySelector("#menu-icon-inner");

let downArrow = document.querySelector("#down-arrow");

let leftSidebar = document.querySelector(".left-sidebar-dash");

let closeArrow = document.querySelector("#close-arrow");


let rightNavigation = document.querySelector(".rightside-navigation");



menuIcon.addEventListener("click", () => {
    if(leftSidebar.classList.contains('open')){
        leftSidebar.classList.remove('open');
        leftSidebar.classList.add('close');
    }


    else if(leftSidebar.classList.contains('close')){
        leftSidebar.classList.remove('close');
        leftSidebar.classList.add('open');
    }
})

closeArrow.addEventListener("click", () => {
    rightNavigation.classList.toggle("display-none");
    
})