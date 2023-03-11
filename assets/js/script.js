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
        console.log('contains publi open')
       if (isMobile == true) {
        console.log('and mobile is true')
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
    if(document.querySelector(".title.chapter-1").getBoundingClientRect().top < (window.innerHeight / 100)*5){
      chapterNumber = 1;
      
    }
    if(document.querySelector(".title.chapter-2").getBoundingClientRect().top < (window.innerHeight / 100)*5){
      chapterNumber = 2;
    }

    if(document.querySelector(".title.chapter-3").getBoundingClientRect().top < (window.innerHeight / 100)*5){
      chapterNumber = 3;
      
    }
    if(document.querySelector(".title.chapter-4").getBoundingClientRect().top < (window.innerHeight / 100)*5){
      chapterNumber = 4;
    }

    if(document.querySelector(".title.chapter-5").getBoundingClientRect().top < (window.innerHeight / 100)*5){
      chapterNumber = 5;
      
    }
    if(document.querySelector(".title.chapter-6").getBoundingClientRect().top < (window.innerHeight / 100)*5){
      chapterNumber = 6;
    }

    console.log(chapterNumber);
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

  
      
    //------------- DETECTION WINDOW SIZE -------------------

    let isMobile = "";

    $(window).on("load resize click", function(){
  
      if ($(window).width() < 779) {
        isMobile = true;    
        console.log(isMobile);
  
      } else {
        console.log(isMobile);
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
    
    
      if (isMobile == false) {
        console.log('is mobile was false');
        image.style.marginRight = `${randomMargin}vw`;
        image.style.transform = `rotate(${randomRotation}deg)`;

      } else {

        console.log('is mobile was true');
      image.style.marginRight = '0px';
        image.style.transform = 'rotate(0deg)';
      }
    
 
  });

  
      $(window).on("resize", function(){
  
       images.forEach((image) => {

    const randomRotation = Math.floor(Math.random() * (maxRotation - minRotation + 1) + minRotation);
      const randomMargin = Math.floor(Math.random() * (maxMargin - minMargin + 1) + minMargin);
    
    
      if (isMobile == false) {
        console.log('is mobile was false');
        image.style.marginRight = `${randomMargin}vw`;
        image.style.transform = `rotate(${randomRotation}deg)`;

      } else {

        console.log('is mobile was true');
      image.style.marginRight = '0px';
        image.style.transform = 'rotate(0deg)';
      }
    
 
  });
    });
  
      
    $(window).on("load", function(){
  
      images.forEach((image) => {

   const randomRotation = Math.floor(Math.random() * (maxRotation - minRotation + 1) + minRotation);
     const randomMargin = Math.floor(Math.random() * (maxMargin - minMargin + 1) + minMargin);
   
   
     if (isMobile == false) {
       console.log('is mobile was false');
       image.style.marginRight = `${randomMargin}vw`;
       image.style.transform = `rotate(${randomRotation}deg)`;

     } else {

       console.log('is mobile was true');
     image.style.marginRight = '0px';
       image.style.transform = 'rotate(0deg)';
     }
   

 });
   });
  

});

