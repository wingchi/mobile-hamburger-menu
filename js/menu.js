// Javascript to toggle hamburger menu goes here
function detectmob() {
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

if(detectmob()) {
  var navs = document.querySelectorAll(".nav-section");
  var navItems = document.querySelectorAll(".nav-item");
  for(let nav of navs) {
    nav.classList.add("nav-section-mob");
    nav.classList.remove("nav-section");
  }
  for(let navItem of navItems) {
    navItem.classList.add("nav-item-mob");
    navItem.classList.remove("nav-item");
  }
} else {
  alert("desktop");
}
