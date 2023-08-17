document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img[alt='']");
    images.forEach(function(image) {
      image.alt = "Image not found";
    });
  });