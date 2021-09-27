// scroll from https://codepen.io/GreenSock/pen/PoNZxqX
// forum https://greensock.com/forums/topic/19420-infinite-carousel-with-draggable/

const viewport = document.querySelector(".viewport");
const wrapper  = document.querySelector("#wrapper");
const boxes    = document.querySelector(".boxes");
const proxy    = document.createElement("div");

const numBoxes = parts.length;
const boxWidth  = "auto";
const boxHeight = 40;  
const imgWidth  = boxWidth  - 6;
const imgHeight = boxHeight - 14;
const viewWidth = innerWidth;
const wrapWidth = numBoxes * boxWidth;
const wrapVal = gsap.utils.wrap(0, wrapWidth);

// gsap.set([wrapper, viewport], { height: boxHeight, xPercent: -50 });
// gsap.set(boxes, { left: -boxWidth });

for (let i = 1; i <= numBoxes; i++) {
  const src = "component_bg_img.svg"
  const num = document.createElement("div");
  num.className = "num";
  num.innerText = "Part Name";
  num.marginLeft = "20px";
  
  // const img = document.createElement("img");
  // img.src = src;
  // img.width = imgWidth;
  // img.height = imgHeight;
  const input = document.createElement("input");
  input.type = "number"
  input.className = "repeat"
  input.min = 0;
  input.step = 1;
  input.value = parts[i-1].loop;
  input.disabled = true;

  const loop = document.createElement("loop");
  loop.className = "loop"
  // loop.style.backgroundColor= "red"
  loop.style.width = "30px"; 
  loop.style.height = "10px"; 
  loop.style.backgroundImage = "url('1540764857.svg')";
  loop.style.backgroundPosition = "center";
  loop.style.backgroundRepeat = "no-repeat";
  loop.style.marginLeft = "20px";

      /* background-color: red; */
      // width: 50px;
      // height: 11px;
      // background-image: url("1540764857.svg");
      // background-position: center;
      // background-repeat: no-repeat;
  // const loopWidth  = "auto";
  // const loopHeight = "10px";  
  // const loopWidth  = "10px";

  const progress = document.createElement("div");
  progress.className = "previewProgress"

  const index = i - 1;
  const preview = document.createElement("button");
  preview.classList.add("preview","play");
  preview.dataset.index = index;
  preview.onclick = function () { 
    previewPart(index, progress);
  }

  const duration = document.createElement("div");
  duration.className = "previewDuration";
  duration.dataset.index = index;
  
  const box = document.createElement("div");
  box.className = "box";
  box.style.backgroundColor = "#ffffff24";


  switch(i) {
    case 1:
      num.innerText = "Drop";
      input.value = 1;
      break;
    case 2:
      num.innerText = "Drums";
      input.value = 1;
      break;
    case 3:
      num.innerText = "Drums";
      input.value = 4;
      break;
    case 4:
      num.innerText = "Hat";
      input.value = 1;
      break;
    case 5:
      num.innerText = "Hat";
      input.value = 4;
      break;
    case 6:
      num.innerText = "Break 2";
      input.value = 1;
      break;
    case 7:
      num.innerText = "Drop 2";
      input.value = 1;
      break;
    case 8:
      num.innerText = "Groove";
      input.value = 1;
      break;
    case 9:
      num.innerText = "Break 3";
      input.value = 1;
      break;
    case 10:
      num.innerText = "Drop 3";
      input.value = 1;
      break;
    case 11:
      num.innerText = "Break 4a";
      input.value = 1;
      break;
    case 12:
      num.innerText = "Break 4b";
      input.value = 1;
      break;
    case 13:
      num.innerText = "Break 4c";
      input.value = 1;
      break;
    case 14:
      num.innerText = "Break 4d";
      input.value = 1;
      break;
    case 15:
      num.innerText = "Break 4e";
      input.value = 1;
      break;
    case 16:
      num.innerText = "Break 4f";
      input.value = 1;
      break;
    case 17:
      num.innerText = "Break 4g";
      input.value = 1;
      break;
    case 18:
      num.innerText = "Break 4h";
      input.value = 1;
      break;
    case 19:
      num.innerText = "Break 4i";
      input.value = 1;
      break;
    case 20:
      num.innerText = "Break 4j";
      input.value = 1;
      break;
    case 21:
      num.innerText = "Drop 4";
      input.value = 1;
      break;
    case 22:
      num.innerText = "Outro";
      input.value = 1;
      break;
      default:
      num.innerText = "DEFAULT";
  }
  
  // box.appendChild(img);
  box.appendChild(preview);
  box.appendChild(num);
  box.appendChild(duration);
  box.appendChild(loop);
  box.appendChild(input);
  box.appendChild(progress);
  
  boxes.appendChild(box);

  gsap.set(box, { x: i * boxWidth, width: boxWidth, height: boxHeight });
}

const animation = gsap.to(".box", {
  duration: 1,
  x: `+=${wrapWidth}`, 
  ease: "none",
  paused: true,
  modifiers: {
    x: function(x, target) {
      x = parseInt(x) % wrapWidth;
      target.style.visibility = x - boxWidth > viewWidth ? "hidden" : "visible";
      return `${x}px`;
    }
  }
});

// Draggable.create(proxy, {
//   type: "x",
//   trigger: ".wrapper",
//   inertia: true,
//   onDrag: updateProgress,
//   onThrowUpdate: updateProgress,
//   snap: { 
//     x: (x) => {
//       return Math.round(x / boxWidth) * boxWidth;
//     } 
//   }
// });

window.addEventListener("resize", resize);

function updateProgress() {
  animation.progress(wrapVal(this.x) / wrapWidth);
}

function resize() {
  viewWidth = viewport.offsetWidth;
  animation.render(animation.time(), false, true);
}

//SELECTORS

let blobapath = document.querySelector(".blobAPath");
let blobBPath = document.querySelector(".blobBPath");
let blobB= document.querySelector(".blobb");
let currentScroll = 0;
let isScrollingDown = true;
let tween = gsap.to(".marquee__part", {xPercent: -100, repeat: -1, duration: 10, ease: "linear"}).totalProgress(0.5);
var hotSpot = document.getElementById("flipMe");
let testBool = true;
let nudge = true;

//SET TWEENS

gsap.set("#bg_circle2", {x:"+=20vw", y:"30vh", scale:2})
gsap.set("#bg_circle", {top:200,left:"20vw"})
gsap.set(".boxes", {y:-20});
gsap.set("#vivaLogo, #header, #presets, #boxes_cont, #master_controls, .marquee, #footer", {autoAlpha:0});
gsap.set("#close", {autoAlpha:0});
gsap.set("#flipMe", {autoAlpha:0});
gsap.set("#content", {perspective:800});
gsap.set("#wrapper_cont", {transformStyle:"preserve-3d"});
gsap.set("#wrapper_back", {rotationY:-180});
gsap.set(["#wrapper", "#wrapper_back"], {backfaceVisibility:"hidden"});
gsap.set(".boxes", {y:-20});
gsap.set(".marquee__inner", {xPercent: -50});

//TIMELINES

var tlStageBlock = gsap.timeline({delay:1});
tlStageBlock.to("#stageBlock", {duration:0.45, autoAlpha:0, delay:0.5, ease: "Power1.easeOut"},0);
tlStageBlock.from("#wrapper", {duration:2, y:0, ease: "Power1.easeOut"});
tlStageBlock.to(".bloba", {duration:10,  x:"+=10vw", rotate:-20, scale: 1, ease: "Power3.easeInOut", yoyo:true, repeat:-1},0); 

var tl = gsap.timeline();
tl.to("#bg_circle", {duration: 4, x:"-=5vw", y:"0vh", delay:1, yoyo:true, repeat:-1},0);
tl.to("#bg_circle2", {duration: 50, x:-10, yoyo:true, rotate:60, repeat:-1},0);

var tlPlayerMove = gsap.timeline();
tlPlayerMove.from("#click_icon", {duration:3, autoAlpha:1, y:"-=10px",ease: "Power1.easeInOut", /* rotate:randomNum, */ yoyo:true, repeat:-1},0);

function help(){ gsap.to(".box", {duration:0.5,autoAlpha:0})}

var tlFlipCard = gsap.timeline({paused: true});
tlFlipCard.to("#wrapper_cont", {duration:0.5, rotationY:"+=180",ease:"Back.easeInOut"},0);

function mouseClickPlayer(){
  tlPlayerMove.kill();
  var tlExpand = gsap.timeline();
  tlExpand.timeScale( 2 ); 
  tlExpand.to("#click_icon", {duration:0.25, y:"+=140", autoAlpha:0},0);
  tlExpand.to("#wrapper", {duration:1, height:"90vh", ease:"Power1.easeOut"},0)
  tlExpand.to("#wrapper", {duration:3, width:"90vw", ease:"Power1.easeOut"},0.25)
  tlExpand.to("#vivaLogo, #header, #presets, #boxes_cont, #master_controls, .marquee, #footer", {duration:0.75, stagger:0.2, autoAlpha:1, ease:"Power4.easeInOut"},0.15);
  if(nudge == true){tlExpand.to("#wrapper_cont", {duration:1, ease:"Back.easeOut", rotationY:10},.75);
  tlExpand.to("#wrapper_cont", {duration:1, ease:"Back.easeOut", rotationY:-10},1.25);
  tlExpand.to("#wrapper_cont", {duration:1, ease:"Back.easeOut", rotationY:"+=10"},1.75);
  }
  tlExpand.to("#flipMe", {duration:1, autoAlpha:1},2);
  nudge = !testBool;
}

function mouseClickOffPlayer(){
  gsap.set("#close", {autoAlpha:0});
  gsap.to("#wrapper", {duration:0.2, width:336, height:280})
}

function toggle() {
  if (testBool == true) {
    tlFlipCard.play();

  } else {
    tlFlipCard.reverse();
  }
    testBool = !testBool;
}

//ANIMATIONS

const startAnim = gsap.to("#circle", {rotation: "+=360", ease: "power1.in", duration: 0.5, onComplete: () => loopAnim.play()});
const loopAnim = gsap.to("#circle", {
  rotation: "+=360", 
  ease: "none", 
  duration: 300, 
  onComplete: () => {
    if(ready) {
      stopAnim.play();
    } else {
      loopAnim.play(0);
    }
  },
  paused: true
});

let ready = false;
const endRot = 180;

const stopAnim = gsap.to(".spinner", {
  rotation: `+=${360 + endRot}`,
  duration: 0.6,
  paused: true
});

//INTERACTIONS

document.getElementById("wrapper").addEventListener("click", mouseClickPlayer);

////////////////////////

window.addEventListener("scroll", function(){

if ( window.pageYOffset > currentScroll ) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }
   
  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1
  });
  currentScroll = window.pageYOffset
});

  




