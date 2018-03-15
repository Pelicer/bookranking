export function openNav() {
    document.getElementsByClassName("sidenav")[0].style.width = "250px";
    document.getElementsByClassName("h-item")[0].style.visibility = "visible";    
    document.getElementsByClassName("b-item")[0].style.visibility = "visible";    
}

export function closeNav() {
    document.getElementsByClassName("sidenav")[0].style.width = "70px";
    document.getElementsByClassName("h-item")[0].style.visibility = "hidden";
    document.getElementsByClassName("b-item")[0].style.visibility = "hidden";    
}