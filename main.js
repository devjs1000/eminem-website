var swiper = new Swiper(".mySwiper", {
    effect: "slide",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var showMore=document.querySelector('.show-more')
  var hideMore=document.querySelector('.hide-more')
  var aboutEminem=document.querySelector('.about-eminem')

  showMore.addEventListener('click', ()=>{
    aboutEminem.classList.toggle('about-active')
    showMore.classList.toggle('d-none')
    hideMore.classList.toggle('d-none')
  })
  hideMore.addEventListener('click', ()=>{
    aboutEminem.classList.toggle('about-active')
    showMore.classList.toggle('d-none')
    hideMore.classList.toggle('d-none')
  })


const menu=document.querySelector('.menu')
const sideBarCloseBtn=document.querySelectorAll('.side-bar-close')
const sideBar=document.querySelector('.side-bar')

menu.addEventListener('click', ()=>{
  sideBar.classList.toggle('active')
})

  sideBarCloseBtn.forEach(a=>{
    a.addEventListener('click',(e)=>{
      sideBar.classList.toggle('active')

    })
  })

