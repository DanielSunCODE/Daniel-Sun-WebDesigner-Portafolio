const menuBars = document.querySelector('.menu-bars');
const sideNav = document.querySelector('.nav-links');
const links = document.querySelectorAll('.link')

menuBars.addEventListener('click', ()=>{
    sideNav.classList.toggle('show')
});


for(link of links){
    link.addEventListener('click', ()=>{
        sideNav.classList.toggle('show')
    });
}



