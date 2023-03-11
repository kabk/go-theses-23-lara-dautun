// function rotateImg() {

//   const images = document.querySelectorAll("figure");
//   const minRotation = -9;
//   const maxRotation = 9;
//   const minMargin = -6;
//   const maxMargin= 2;

//   images.forEach((image) => {
//         const randomRotation = Math.floor(Math.random() * (maxRotation - minRotation + 1) + minRotation);
//         const randomMargin = Math.floor(Math.random() * (maxMargin - minMargin + 1) + minMargin);
//         image.style.transform = `rotate(${randomRotation}deg)`;
//         image.style.marginRight = `${randomMargin}vw`;
//   });

// }

// rotateImg();