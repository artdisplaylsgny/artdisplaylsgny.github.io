const image = document.getElementById("switchImage");

const firstImage = "images/image1.jpg";
const secondImage = "images/image2.jpg";

let showingFirstImage = true;

image.addEventListener("click", () => {
  if (showingFirstImage) {
    image.src = secondImage;
  } else {
    image.src = firstImage;
  }

  showingFirstImage = !showingFirstImage;
});