


let mysong = new Audio();
mysong.src = "Leaf-lofi.mp3";

playsong = () => {
  mysong.play();
  pausesong1()
  pausesong2()
  pausesong3()
};
pausesong = () => {
  mysong.pause();
};

// 2
let mysong1 = new Audio();
mysong1.src = "productive-2-lofi.mp3";

playsong1 = () => {
  mysong1.play();
  pausesong()
  pausesong2()
  pausesong3()
};
pausesong1 = () => {
  mysong1.pause();
};
// 3
let mysong2 = new Audio();
mysong2.src = "night-lofi.mp3";

playsong2 = () => {
  mysong2.play();
  pausesong()
  pausesong1()
  pausesong3()
  
};
pausesong2 = () => {
  mysong2.pause();
};
// 4
let mysong3 = new Audio();
mysong3.src = "coding-lofi.mp3";

playsong3 = () => {
  mysong3.play();
  pausesong()
  pausesong2()
  pausesong1()
};
pausesong3 = () => {
  mysong3.pause();
};
// if (playsong()) {
 
  
// }
// else if(playsong1()){
  
  
// }
// else if(playsong2()){
  
// }
// else if(playsong3()){
 
  
// }

