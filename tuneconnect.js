

// dumb code that i wrote 2 y ago back in 2021-22;

// let mysong = new Audio();
// mysong.src = "Leaf-lofi.mp3";

// playsong = () => {
//   mysong.play();
//   pausesong1()
//   pausesong2()
//   pausesong3()
// };
// pausesong = () => {
//   mysong.pause();
// };

// // 2
// let mysong1 = new Audio();
// mysong1.src = "productive-2-lofi.mp3";

// playsong1 = () => {
//   mysong1.play();
//   pausesong()
//   pausesong2()
//   pausesong3()
// };
// pausesong1 = () => {
//   mysong1.pause();
// };
// // 3
// let mysong2 = new Audio();
// mysong2.src = "night-lofi.mp3";

// playsong2 = () => {
//   mysong2.play();
//   pausesong()
//   pausesong1()
//   pausesong3()
  
// };
// pausesong2 = () => {
//   mysong2.pause();
// };
// // 4
// let mysong3 = new Audio();
// mysong3.src = "coding-lofi.mp3";

// playsong3 = () => {
//   mysong3.play();
//   pausesong()
//   pausesong2()
//   pausesong1()
// };
// pausesong3 = () => {
//   mysong3.pause();
// };
// // if (playsong()) {
 
  
// // }
// // else if(playsong1()){
  
  
// // }
// // else if(playsong2()){
  
// // }
// // else if(playsong3()){
 
  
// // }



//  dumb code that i wrote now ;


// for nav

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
   navToggler.classList.toggle("active");
   const nav = document.querySelector(".nav");
   nav.classList.toggle("open");
   if(nav.classList.contains("open")){
     nav.style.maxHeight = nav.scrollHeight + "px";
   }
   else{
     nav.removeAttribute("style");
   }
} 

// for music boxes
const musicBoxes=document.getElementsByClassName("music-box");
const musicBoxArray=Array.from(musicBoxes);



const musicUrl=["Leaf-lofi.mp3","productive-2-lofi.mp3", "night-lofi.mp3","coding-lofi.mp3"];
var music=null;



musicBoxArray.forEach((musicBox, index) => {
  musicBox.addEventListener("click", function() {
  

    if (music) {
      music.pause();
      music.currentTime = 0; // Reset to the beginning
      
    }
    
    music = new Audio();
    music.src = musicUrl[index];
    
    musicBox.style.backgroundColor = "#a18cd1";
    music.play();
      
    musicBoxArray.forEach((box, idx) => {
      if (idx !== index) {
          box.style.backgroundColor = "#ffffff"; // Reset to default
      }
  });
     
  });
 
});

