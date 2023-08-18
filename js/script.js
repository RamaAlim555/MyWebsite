document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img[alt='']");
    images.forEach(function(image) {
      image.alt = "Image not found";
    });
  });

const NavBtn = document.querySelectorAll("nav button");
const TabContent = document.querySelectorAll(".TabContent");
  
NavBtn.forEach((button, index) => {
  button.addEventListener("click", function() {
    NavBtn.forEach(function(btn) {
      btn.classList.remove("Active")
      btn.ariaDisabled = false;
    } );
    button.classList.add("Active");
    button.ariaDisabled = true;
    
    TabContent.forEach((Tab) => {
      Tab.classList.add("hide");
    });
    
    TabContent[index].classList.remove("hide");
  });
});