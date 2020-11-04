// Testimonials

const Testimonials = document.getElementById("Testimonials");
const slide1 = document.getElementById("slide_1");
const slide2 = document.getElementById("slide_2");
const slide4 = document.getElementById("slide_4");
const slide3 = document.getElementById("slide_3");
const image = document.getElementById("im");
const ind1 = document.getElementById("in1");
const ind2 = document.getElementById("in2");
const ind3 = document.getElementById("in3");
const ind4 = document.getElementById("in4");



const forSlide1 = () => {
   ind1.classList.replace("far", "fas");
   ind2.classList.replace("fas", "far");
   ind3.classList.replace("fas", "far");
   ind4.classList.replace("fas", "far");
   slide1.style.display = "block";
   slide2.style.display = "none";
   slide3.style.display = "none";
   slide4.style.display = "none";
//    slide1.classList.add("animate__slideInLeft");
   console.log(slide1.className);
};
const forSlide2 = () => {
   ind1.classList.replace("fas", "far");
   ind2.classList.replace("far", "fas");
   ind3.classList.replace("fas", "far");
   ind4.classList.replace("fas", "far");
   slide1.style.display = "none";
   slide2.style.display = "block";
   slide3.style.display = "none";
   slide4.style.display = "none";
};
const forSlide3 = () => {
   ind1.classList.replace("fas", "far");
   ind2.classList.replace("fas", "far");
   ind3.classList.replace("far", "fas");
   ind4.classList.replace("fas", "far");
   slide1.style.display = "none";
   slide2.style.display = "none";
   slide3.style.display = "block";
   slide4.style.display = "none";
};
const forSlide4 = () => {
   ind1.classList.replace("fas", "far");
   ind2.classList.replace("fas", "far");
   ind3.classList.replace("fas", "far");
   ind4.classList.replace("far", "fas");
   slide1.style.display = "none";
   slide2.style.display = "none";
   slide3.style.display = "none";
   slide4.style.display = "block";
};

// animate__slideInLeft

const down=document.querySelector(".yellow_btn");

down.addEventListener("click",()=>{
    alert(" ❤️ Hey body..!! Please visit this website at once then you can download this easily ❤️ :) ");
})
const loader=document.querySelector(".loader");
document.addEventListener("load",()=>{
    loader.style.display="block";
})
