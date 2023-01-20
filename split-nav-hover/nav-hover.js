let navLinks = document.querySelectorAll("#nav a");
navLinks.forEach(link => {
    link.addEventListener("mouseover", function(){
        let sectionId = link.getAttribute("href");
        let sections = document.querySelectorAll("#content div");
        sections.forEach(section => {
            section.style.display = "none";
        });
        document.querySelector(sectionId).style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("#content div");
    sections.forEach(section => {
      section.style.display = "none";
    });
    document.querySelector(".default").style.display = "block";
  });
  