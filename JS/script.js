const hbg = document.getElementById('hbg');
const nav = document.getElementById('nav-ul');
hbg.addEventListener('click' , (event) => {
    if (!nav.classList.contains('res-nav')) {
        hbg.setAttribute("src", "images/icon-close.svg");  
        nav.classList.remove("res-nav");    
    }
    else {
        nav.classList.add("res-nav");
        
    hbg.setAttribute("src", "images/icon-hamburger.svg");  
    }
    nav.classList.toggle("res-nav"); 
})