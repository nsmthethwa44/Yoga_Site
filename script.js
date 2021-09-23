window.addEventListener('scroll', function(){
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
  
  const gotop = document.querySelector('.go-top');
  gotop.classList.toggle("active", window.scrollY > 500);
});
