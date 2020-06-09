const menuBtn = document.getElementById("hamburger");
const sideNav = document.getElementById("side-nav");

sideNav.style.right = "-50vw";
menuBtn.onclick = ()=>{
    if(sideNav.style.right == "-50vw"){
        sideNav.style.right = "0";
    }
    else{
        sideNav.style.right = "-50vw";
    }
}