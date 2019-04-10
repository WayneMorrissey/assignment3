window.addEventListener("DOMContentLoaded", (event) => {
    let isOpen = false;
 const menu = document.querySelector('#mobile-sub-menu');
 const menuOpenButton = document.querySelector("#mobile-menu-button");



 /*
 https://greensock.com/docs/Easing/Bounce
 easing graph
 */

//  code to animate mobile navigation menu.
  menuOpenButton.onclick = (e)=>{
      console.log("menu");
     isOpen = !isOpen;
     if(!isOpen){
        TweenMax.to(menu,  0.8, {top:"-20rem",    ease:Power4.easeOut});
     }else{
        TweenMax.to(menu, 0.5,  {top:"4.5rem",   ease:Power4.easeOut});
     }
  }
 
  menu.onclick = (e) => {
   isOpen = !isOpen;
   if(!isOpen){
      TweenMax.to(menu,  0.8, {top:"-20rem",    ease:Power4.easeOut});
   }else{
      TweenMax.to(menu, 0.5,  {top:"4.5rem",   ease:Power4.easeOut});
   }
  }
 
});
 