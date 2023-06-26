$(document).ready(function () {

  //------------- VARIABLES OPEN/CLOSE TABS -------------------
  let btnThesis = document.querySelector(".block-thesis");
  let btnPubli = document.querySelector(".block-publi");
  let btnMap = document.querySelector(".block-map");
  let btnGloss = document.querySelector(".block-gloss");

  let contentLanding = document.querySelector(".content-landing");
  let contentThesis = document.querySelector(".content-thesis");
  let contentPubli = document.querySelector(".content-publi");
  let contentMap = document.querySelector(".content-map");
  let contentGloss = document.querySelector(".content-gloss");

  let btnNav = document.querySelector(".block-nav");
  let contentNav = document.querySelector(".content-nav");




  //------------- FUNCTIONS OPEN/CLOSE TABS -------------------
  //THESIS

  btnThesis.onclick = function () {
    document.querySelector("#btn-thesis-open").classList.toggle("hidden");
    document.querySelector("#btn-thesis-close").classList.toggle("hidden");

    if (contentMap.classList.contains("map-open")) {
      contentMap.classList.toggle("map-open");
      contentThesis.classList.toggle("thesis-open");
      document.querySelector("#btn-map-open").classList.toggle("hidden");
      document.querySelector("#btn-map-close").classList.toggle("hidden");
    } else {
      contentThesis.classList.toggle("thesis-open");
      contentLanding.classList.toggle("landing-close")
    }
  }


  //TABLE OF CONTENT
  btnNav.onclick = function () {

    document.querySelector("#btn-nav-open").classList.toggle("hidden");
    document.querySelector("#btn-nav-close").classList.toggle("hidden");

    if (contentNav.classList.contains("nav-closed")) {
      contentNav.classList.toggle("nav-open");

    } else {
      contentNav.classList.toggle("nav-closed");

    }
  }


  //MAP

  btnMap.onclick = function () {
    document.querySelector("#btn-map-open").classList.toggle("hidden");
    document.querySelector("#btn-map-close").classList.toggle("hidden");

    if (contentThesis.classList.contains("thesis-open")) {

      if (isMobile == true) {
        contentMap.classList.toggle("map-open");
        contentMap.style.zIndex = "100";

        if (contentPubli.classList.contains("publi-open")){
          console.log('publi is open');
          contentMap.style.zIndex = "100";
        }
      }

      else {
        contentThesis.classList.toggle("thesis-open");
        contentMap.classList.toggle("map-open");
        contentLanding.classList.toggle("landing-open");
        document.querySelector("#btn-thesis-open").classList.toggle("hidden");
        document.querySelector("#btn-thesis-close").classList.toggle("hidden");
      }

    } else {
      document.querySelector(".content-map").classList.toggle("map-open");
      contentLanding.classList.toggle("landing-close");

      if (contentPubli.classList.contains("publi-open")){
        // console.log('contains publi open')
        if (isMobile) {
          // console.log('and mobile is true')
          contentMap.style.zIndex = "100";
        }

        else {}

      }

    }
  }

  //PUBLICATIONS

  btnPubli.onclick = function () {
    document.querySelector("#btn-publi-open").classList.toggle("hidden");
    document.querySelector("#btn-publi-close").classList.toggle("hidden");

    if (contentGloss.classList.contains("gloss-open")) {

      contentGloss.classList.toggle("gloss-open-half");
      contentPubli.classList.toggle("publi-open-half");

    } else {
      contentPubli.classList.toggle("publi-open");

      if (contentPubli.classList.contains("publi-open-half")) {
        contentPubli.classList.toggle("publi-open-half");
        contentGloss.classList.remove("gloss-open-half");
        contentGloss.classList.toggle("gloss-open");
      } else {

      }
    }
  }

  //GLOSSARY

  btnGloss.onclick = function () {
    document.querySelector("#btn-gloss-open").classList.toggle("hidden");
    document.querySelector("#btn-gloss-close").classList.toggle("hidden");

    if (contentPubli.classList.contains("publi-open")) {
      if (isMobile == true) {
        contentGloss.classList.toggle("gloss-open");
      }

      else {
        contentGloss.classList.toggle("gloss-open-half");
        contentPubli.classList.toggle("publi-open-half");
      }
    } else {
      contentGloss.classList.toggle("gloss-open");

      if (contentGloss.classList.contains("gloss-open-half")) {

        contentGloss.classList.toggle("gloss-open-half");
        contentPubli.classList.remove("publi-open-half");
        contentPubli.classList.toggle("publi-open");
      } else {

      }
    }
  }



  //------------- INTERACTIVE TABLE OF CONTENT THESIS -------------------

  let chapterNumber = 0;

  document.querySelector(".content-thesis").addEventListener("scroll", function(){
    if(document.querySelector(".title.chapter-1").getBoundingClientRect().top < (window.innerHeight / 100)*7){
      chapterNumber = 1;

    }
    if(document.querySelector(".title.chapter-2").getBoundingClientRect().top < (window.innerHeight / 100)*7){
      chapterNumber = 2;
    }

    if(document.querySelector(".title.chapter-3").getBoundingClientRect().top < (window.innerHeight / 100)*7){
      chapterNumber = 3;

    }
    if(document.querySelector(".title.chapter-4").getBoundingClientRect().top < (window.innerHeight / 100)*7){
      chapterNumber = 4;
    }

    if(document.querySelector(".title.chapter-5").getBoundingClientRect().top < (window.innerHeight / 100)*7){
      chapterNumber = 5;

    }
    if(document.querySelector(".title.chapter-6").getBoundingClientRect().top < (window.innerHeight / 100)*7){
      chapterNumber = 6;
    }

    // console.log(chapterNumber);
    document.querySelector(`li.chapter-${chapterNumber}`).classList.add("active");

    document.querySelectorAll("li").forEach(function(listItems){
      if(!listItems.classList.contains(`chapter-${chapterNumber}`)){
        listItems.classList.remove("active");
      }
    })
  })

  document.querySelectorAll('li').forEach(function (chapterItems) {
    chapterItems.addEventListener('click', function () {
      document.querySelectorAll('.title').forEach(function (chapterHeadlines) {

        if (chapterItems.textContent.substring(0, 3) == chapterHeadlines.textContent.substring(0, 3)) {
          chapterHeadlines.scrollIntoView({ behavior: "smooth", block: "start" });
        };

      })
    })
  })


  //------------- IMAGE RESIZE ONCLICK PUBLICATIONS ------------------

  document.querySelectorAll(".publications img").forEach(function (resizeImg) {
    resizeImg.addEventListener('click', function() {
      resizeImg.classList.toggle("publications-open");
    })
  })



//------------- MAP LAYERS ------------------
  document.querySelector('.button-pub').onclick = function () {
    this.classList.toggle("map-active");
    document.querySelector('#publishers').classList.toggle("visible");
    document.querySelector('#map-desc-publi').classList.toggle("visible");

    if(document.querySelector('#printers').classList.contains("visible")){
      document.querySelector('#printers').classList.toggle("visible");
      document.querySelector('#map-desc-print').classList.toggle("visible");
      document.querySelector('.button-print').classList.toggle("map-active");

    }

    if(document.querySelector('#shops').classList.contains("visible")){
      document.querySelector('#shops').classList.toggle("visible");
      document.querySelector('#map-desc-shop').classList.toggle("visible");
      document.querySelector('.button-shop').classList.toggle("map-active");
    }

    if(document.querySelector('#periodicals').classList.contains("visible")){
      document.querySelector('#periodicals').classList.toggle("visible");
      document.querySelector('#map-desc-perio').classList.toggle("visible");
      document.querySelector('.button-perio').classList.toggle("map-active");
    }

  }

  document.querySelector('.button-print').onclick = function () {
    this.classList.toggle("map-active");
    document.querySelector('#printers').classList.toggle("visible");
    document.querySelector('#map-desc-print').classList.toggle("visible");

    if(document.querySelector('#publishers').classList.contains("visible")){
      document.querySelector('#publishers').classList.toggle("visible");
      document.querySelector('#map-desc-publi').classList.toggle("visible");
      document.querySelector('.button-pub').classList.toggle("map-active");
    }

    if(document.querySelector('#shops').classList.contains("visible")){
      document.querySelector('#shops').classList.toggle("visible");
      document.querySelector('#map-desc-shop').classList.toggle("visible");
      document.querySelector('.button-shop').classList.toggle("map-active");
    }

    if(document.querySelector('#periodicals').classList.contains("visible")){
      document.querySelector('#periodicals').classList.toggle("visible");
      document.querySelector('#map-desc-perio').classList.toggle("visible");
      document.querySelector('.button-perio').classList.toggle("map-active");
    }
  }

  document.querySelector('.button-shop').onclick = function () {
    this.classList.toggle("map-active");
    document.querySelector('#shops').classList.toggle("visible");
    document.querySelector('#map-desc-shop').classList.toggle("visible");

    if(document.querySelector('#printers').classList.contains("visible")){
      document.querySelector('#printers').classList.toggle("visible");
      document.querySelector('#map-desc-print').classList.toggle("visible");
      document.querySelector('.button-print').classList.toggle("map-active");

    }

    if(document.querySelector('#publishers').classList.contains("visible")){
      document.querySelector('#publishers').classList.toggle("visible");
      document.querySelector('#map-desc-publi').classList.toggle("visible");
      document.querySelector('.button-pub').classList.toggle("map-active");
    }

    if(document.querySelector('#periodicals').classList.contains("visible")){
      document.querySelector('#periodicals').classList.toggle("visible");
      document.querySelector('#map-desc-perio').classList.toggle("visible");
      document.querySelector('.button-perio').classList.toggle("map-active");
    }
  }

  document.querySelector('.button-perio').onclick = function () {
    this.classList.toggle("map-active");
    document.querySelector('#periodicals').classList.toggle("visible");
    document.querySelector('#map-desc-perio').classList.toggle("visible");

    if(document.querySelector('#printers').classList.contains("visible")){
      document.querySelector('#printers').classList.toggle("visible");
      document.querySelector('#map-desc-print').classList.toggle("visible");
      document.querySelector('.button-print').classList.toggle("map-active");

    }

    if(document.querySelector('#shops').classList.contains("visible")){
      document.querySelector('#shops').classList.toggle("visible");
      document.querySelector('#map-desc-shop').classList.toggle("visible");
      document.querySelector('.button-shop').classList.toggle("map-active");
    }

    if(document.querySelector('#publishers').classList.contains("visible")){
      document.querySelector('#publishers').classList.toggle("visible");
      document.querySelector('#map-desc-publi').classList.toggle("visible");
      document.querySelector('.button-pub').classList.toggle("map-active");
    }
  }


  //------------- MAP ZOOM------------------

  const svg = document.querySelector('svg');

  let isDragging = false;
  let startX, startY;
  let translateX = 0, translateY = 0;
  let scale = 1;

  svg.addEventListener('wheel', (event) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? 0.1 : -0.1;
    scale += delta;
    scale = Math.max(scale, 0.1);
    scale = Math.min(scale, 10);
    svg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  });

  svg.addEventListener('mousedown', (event) => {
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
  });

  svg.addEventListener('touchstart', (event) => {
    if (event.touches.length === 2) {
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      const dist = Math.sqrt((touch1.clientX - touch2.clientX) ** 2 + (touch1.clientY - touch2.clientY) ** 2);
      svg.dataset.startDistance = dist;
    } else if (event.touches.length === 1) {
      isDragging = true;
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    }
  });

  svg.addEventListener('mousemove', (event) => {
    if (!isDragging) return;
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    translateX += deltaX / scale;
    translateY += deltaY / scale;
    svg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    startX = event.clientX;
    startY = event.clientY;
  });

  svg.addEventListener('touchmove', (event) => {
    if (event.touches.length === 2) {
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      const dist = Math.sqrt((touch1.clientX - touch2.clientX) ** 2 + (touch1.clientY - touch2.clientY) ** 2);
      const startDist = svg.dataset.startDistance;
      const delta = (dist - startDist) / 1000;
      scale += delta;
      scale = Math.max(scale, 0.1);
      scale = Math.min(scale, 10);
      svg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    } else if (event.touches.length === 1) {
      const deltaX = event.touches[0].clientX - startX;
      const deltaY = event.touches[0].clientY - startY;
      translateX += deltaX / scale;
      translateY += deltaY / scale;
      svg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    }
  });

  svg.addEventListener('mouseup', (event) => {
    isDragging = false;
  });

  svg.addEventListener('touchend', (event) => {
    isDragging = false;
  });




  //------------- DETECTION WINDOW SIZE -------------------

  let isMobile = "";
  let svgMap = document.querySelector('svg');

  $(window).on("load resize click", function(){

    if ($(window).width() < 779) {
      isMobile = true;
      svgMap.setAttribute("viewBox", "50 0 500 500");
      document.querySelector(":root").style.setProperty("--height-window", window.innerHeight);

    } else {
      isMobile = false;
    }
  });


  $(window).on("resize", function(){

    if (contentNav.classList.contains("nav-open")) {

      if (isMobile == true) {
        contentNav.classList.toggle("nav-open");
      } else {}

    } else {

    }
  });

  //------------- IMAGE ANGLE THESIS ------------------

  const images = document.querySelectorAll(".chapter figure");
  const minRotation = -9;
  const maxRotation = 9;
  const minMargin = -2;
  const maxMargin= 8;



  images.forEach((image) => {

    const randomRotation = Math.floor(Math.random() * (maxRotation - minRotation + 1) + minRotation);
    const randomMargin = Math.floor(Math.random() * (maxMargin - minMargin + 1) + minMargin);


    if (!isMobile) {
      // console.log('is mobile was false');
      image.style.marginRight = `${randomMargin}vw`;
      image.style.transform = `rotate(${randomRotation}deg)`;

    } else {
      // console.log('is mobile was true');
      image.style.marginRight = '0px';
      image.style.transform = 'rotate(0deg)';
    }
  });


  $(window).on("resize", function(){
    images.forEach((image) => {
      const randomRotation = Math.floor(Math.random() * (maxRotation - minRotation + 1) + minRotation);
      const randomMargin = Math.floor(Math.random() * (maxMargin - minMargin + 1) + minMargin);

      if (!isMobile) {
        // console.log('is mobile was false');
        image.style.marginRight = `${randomMargin}vw`;
        image.style.transform = `rotate(${randomRotation}deg)`;
      } else {
        // console.log('is mobile was true');
        image.style.marginRight = '0px';
        image.style.transform = 'rotate(0deg)';
      }
    });
  });


  $(window).on("load", function(){
    images.forEach((image) => {
      const randomRotation = Math.floor(Math.random() * (maxRotation - minRotation + 1) + minRotation);
      const randomMargin = Math.floor(Math.random() * (maxMargin - minMargin + 1) + minMargin);

      if (!isMobile) {
        // console.log('is mobile was false');
        image.style.marginRight = `${randomMargin}vw`;
        image.style.transform = `rotate(${randomRotation}deg)`;
      } else {
        // console.log('is mobile was true');
        image.style.marginRight = '0px';
        image.style.transform = 'rotate(0deg)';
      }
    });
  });
});




