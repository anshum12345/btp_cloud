// Header Scroll 
// let nav = document.querySelector(".navbar");
// window.onscroll = function() {
//     if(document.documentElement.scrollTop > 50){
//         nav.classList.add("header-scrolled"); 
//     }else{
//         nav.classList.remove("header-scrolled");
//     }
// }

// // nav hide  
// let navBar = document.querySelectorAll(".nav-link");
// let navCollapse = document.querySelector(".navbar-collapse.collapse");
// navBar.forEach(function(a){
//     a.addEventListener("click", function(){
//         navCollapse.classList.remove("show");
//     })
// })







var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");


// dets h yha pr x and y ki value jab bhi hm mouse ko move krenge to jo perform hoga usi ko dets bolenge 
// event listner vala part hm cursor ke liye use krenge jab  bhi hm cursor ko kahi bhi le jayenge to mouse move hoga

// document.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";
//   blur.style.left = dets.x - 250 + "px";
//   blur.style.top = dets.y - 250 + "px";
// });

// var h4all = document.querySelectorAll(".container");
// h4all.forEach(function (elem) {
//   elem.addEventListener("mouseenter", function () {
//     crsr.style.scale = 3;
//     crsr.style.border = "1px solid #fff";
//     crsr.style.backgroundColor = "transparent";
//   });
//   elem.addEventListener("mouseleave", function () {
//     crsr.style.scale = 1;
//     crsr.style.border = "0px solid #95C11E";
//     crsr.style.backgroundColor = "#95C11E";
//   });
// });



/*--------------------------theme light and dark mode--------------------------------*/
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () =>{
dayNight.querySelector("i").classList.toggle("fa-sun");
dayNight.querySelector("i").classList.toggle("fa-moon");
document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>{
if(document.body.classList.contains("dark")){
    dayNight.querySelector("i").classList.add("fa-sun");
}
else{
    dayNight.querySelector("i").classList.add("fa-moon");
}
const btn = document.getElementById('scroll-btn')
btn.style.position = 'fixed'
btn.style.bottom = 0
const offset = document.body.getBoundingClientRect();
console.log(offset.right-100)
btn.style.left = String(offset.right-50) + 'px'

})









// (() =>{
//   const aboutSection = document.querySelector(".about-section"),
//   tabsContainer = document.querySelector(".about-tabs");

//   tabsContainer.addEventListener("click", (event) =>{

//    if(event.target.classList.contains("tab-item") &&
//    !event.target.classList.contains("active")){
//    const target = event.target.getAttribute("data-target");
// //  deactivate existing active 'tab-item'
//    tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
// // ACTIVE NEW'TAB-ITEM
//    event.target.classList.add("active","outer-shadow");
// // deACtivate existing active 'tab-content'
//    aboutSection.querySelector(".tab-content.active").classList.remove("active");
// // activate new 'tab-content'
//    aboutSection.querySelector(target).classList.add("active");

//    }
//   })
// })();

function bodyScrollingToggle(){
   document.body.classList.toggle("hidden-scrolling");
}


(() =>{

  const sections = document.querySelectorAll(".section");
  sections.forEach((section) =>{
          if(!section.classList.contains("active")){
                  section.classList.add("active");
          
          }
  })
  })();


  // send message to whastapp 

  function sendwhatsapp(){
    var phonenumber = "8052078680";

    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;
    var phone = document.querySelector(".phone").value;
    var country = document.querySelector(".country").value;
    var message = document.querySelector(".message").value;

    var url = "https://wa.me/" + phonenumber + "?text="
    +"*Name :* "+name+"%0a"
    +"*Email :* "+email+"%0a"
    +"*phone:* "+phone+"%0a"
    +"*Country:* "+country+"%0a"
    +"*Message :* "+message
    +"%0a%0a"
    +"This is an example of send HTML form data to WhatsApp";

    window.open(url, '_blank').focus();
  }
  function getHandle(id){
    return document.getElementById(id)
  }
  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  function alignScrollBtn(){
    const btn = document.getElementById('scroll-btn')
    btn.style.position = 'fixed'
    btn.style.bottom = 0
    const offset = document.body.getBoundingClientRect();
    console.log(offset.right-100)
    btn.style.left = String(offset.right-50) + 'px'
  }

  



  let slider = document.querySelector('.slider .list');
  let items = document.querySelectorAll('.slider .list .item');
  let next = document.getElementById('next');
  let prev = document.getElementById('prev');
  let dots = document.querySelectorAll('.slider .dots li');
  
  let lengthItems = items.length - 1;
  let active = 0;
  next.onclick = function(){
      active = active + 1 <= lengthItems ? active + 1 : 0;
      reloadSlider();
  }
  prev.onclick = function(){
      active = active - 1 >= 0 ? active - 1 : lengthItems;
      reloadSlider();
  }
  let refreshInterval = setInterval(()=> {next.click()}, 3000);
  function reloadSlider(){
      slider.style.left = -items[active].offsetLeft + 'px';
      // 
      let last_active_dot = document.querySelector('.slider .dots li.active');
      last_active_dot.classList.remove('active');
      dots[active].classList.add('active');
  
      clearInterval(refreshInterval);
      refreshInterval = setInterval(()=> {next.click()}, 3000);
  
      
  }
  
  dots.forEach((li, key) => {
      li.addEventListener('click', ()=>{
           active = key;
           reloadSlider();
      })
  })
  window.onresize = function(event) {
      reloadSlider();
  };






























  const pyramids = document.querySelector(".pyramids");
  const palace = document.querySelector(".palace");
  // const logo = document.querySelector(".logo");
  const nav = document.querySelector("nav");
  const info = document.querySelector(".info");

  //reveal elements on page loading
  window.addEventListener("load", () => {
    pyramids.style.transform = "translateX(0)";
    palace.style.transform = "translateX(0)";
    logo.style.transform = "translateY(0)";
    nav.style.transform = "translateY(0)";

    setTimeout(() => {
      info.style.transform = "translateY(0)";
      info.style.opacity = "1";
    }, 500);
  });

  //scrolling effects on website elements
  window.addEventListener("scroll", () => {
    const scrollVal = window.scrollY;

    pyramids.style.left = scrollVal * -0.25 + "px";
    palace.style.left = scrollVal * 0.25 + "px";
    info.style.marginTop = scrollVal * 1.1 + "px";

    pyramids.style.transition = "0s";
    palace.style.transition = "0s";
    info.style.transition = "0s";
  });

  //hide and display home info on scrolldown and up
  window.onscroll = function(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
      info.style.opacity = "0";
      info.style.transition = "0.6s";
    }
    else{
      info.style.opacity = "1";
      info.style.transition = "0.6s";
    }
  }