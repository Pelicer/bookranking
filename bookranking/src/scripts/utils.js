export function openNav() {
    document.getElementsByClassName("sidenav")[0].style.width = "315px";
    document.getElementsByClassName("sidenav-wrap")[0].style.visibility = "visible";
    document.getElementsByClassName("Home-body")[0].style.marginLeft = "315px";
}

export function closeNav() {
    document.getElementsByClassName("sidenav")[0].style.width = "0px";
    document.getElementsByClassName("sidenav-wrap")[0].style.visibility = "hidden";
    document.getElementsByClassName("Home-body")[0].style.marginLeft = "0px";
}