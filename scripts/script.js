function closeImageModal() {
  var modal = document.getElementById("image-modal");
  modal.classList.remove("is-active");
}

var clickedImagesElementsArray = document.getElementsByClassName(
  "clickable-figure"
);

for (var i = 0; i < clickedImagesElementsArray.length; i++) {
  clickedImagesElementsArray[i].addEventListener(
    "click",
    function (event) {
      var imageName = this.children["0"].getAttribute("src");
      var toSet = document.getElementById("modal-image-placeholder");
      toSet.setAttribute("src", imageName);

      //set modal to active
      document.getElementById("image-modal").classList.add("is-active");

      console.log(toSet);
    },
    false
  );
}

var activeSection = "main";
var activeSectionElement = document.getElementById(activeSection);
var navbarItemsArray = document.getElementsByClassName("navbar-item");

for (var i = 0; i < navbarItemsArray.length; i++) {
  navbarItemsArray[i].addEventListener("click", function (event) {
    var currentActive = document.getElementsByClassName("is-active")[0];
    currentActive.classList.remove("is-active");
    this.classList.add("is-active");
    currentActive = document
      .getElementsByClassName("is-active")[0]
      .getAttribute("href");
    activeSection = currentActive.substring(1);
    activeSectionElement = document.getElementById(activeSection);
    console.log(activeSection);
    console.log(activeSectionElement.getBoundingClientRect());
  });
}
/*
function isInViewPort() {
  var sectionRects = [...document.querySelectorAll(".section")].map(
    (el) => el.getBoundingClientRect().y
  );
  console.log(sectionRects);
}

var cW = document.documentElement.clientWidth;
var cH = document.documentElement.clientHeight;
document.addEventListener("scroll", function () {
  isInViewPort();
});
*/