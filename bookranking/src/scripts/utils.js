export function openNav() {
    document.getElementsByClassName("sidenav")[0].style.width = "250px";
}

export function closeNav() {
    document.getElementsByClassName("sidenav")[0].style.width = "60px";
}

export function home_selected(){
    document.getElementsByClassName("li-book")[0].style.borderLeft = "none";
    document.getElementsByClassName("li-home")[0].style.borderLeft = "2px solid white";
}

export function book_selected() {
    document.getElementsByClassName("li-home")[0].style.borderLeft = "none";
    document.getElementsByClassName("li-book")[0].style.borderLeft = "2px solid white";
}