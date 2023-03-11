function rotateImg() {
  const images = document.querySelectorAll(".imgSide");
  const minRotation = -9;
  const maxRotation = 9;

  images.forEach((image) => {
  const randomRotation = Math.floor(Math.random() * (maxRotation - minRotation + 1) + minRotation);
  console.log(`Random rotation for ${image.alt}: ${randomRotation}`);
  image.style.transform = `rotate(${randomRotation}deg)`;
  });
}

rotateImg();