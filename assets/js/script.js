(
  function() { 
    var qs,js,q,s,d=document, 
    gi=d.getElementById, 
    ce=d.createElement, 
    gt=d.getElementsByTagName, 
    id="typef_orm", 
    b="https://embed.typeform.com/"; 
    
    if(!gi.call(d,id)) { 
      js=ce.call(d,"script"); 
      js.id=id; 
      js.src=b+"embed.js"; 
      q=gt.call(d,"script")[0]; 
      q.parentNode.insertBefore(js,q) 
    } 
  }
)() 

let section = window.location.href.split('#')[1];
let navLinks = document.querySelector('.navbar-nav')
let links = document.querySelectorAll('.nav-link')

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


navLinks.addEventListener('click', function(event){
  links.forEach(function(link){
    link.classList.remove('active');
  });

  event.target.classList.add("active");
});

document.addEventListener('scroll', function(){
  let progressBar = document.querySelector('.progress-bar');
  const totalScroll = document.documentElement.scrollHeight;
  const scrollNow = parseInt(document.documentElement.scrollTop) * 1.5;
  let progress = ((scrollNow / totalScroll) * 100);

  progressBar.style.width = `${progress}%`;
  progressBar.ariaValueNow = progress;
})