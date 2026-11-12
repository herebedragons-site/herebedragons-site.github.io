// mobile side nav
function openNav(){
    document.getElementById("mySidenav").style.width = "75%";
}
function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
}

// nav color change
window.addEventListener("scroll", function(){
    if(document.documentElement.scrollTop > 150){
        document.getElementById("nav-change").classList.add("color-change");
    } else{
        document.getElementById("nav-change").classList.remove("color-change");
    }
});
