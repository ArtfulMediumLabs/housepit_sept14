// scroll from https://codepen.io/GreenSock/pen/PoNZxqX
// forum https://greensock.com/forums/topic/19420-infinite-carousel-with-draggable/

const viewport = document.querySelector(".viewport");
const wrapper  = document.querySelector("#wrapper");
const boxes    = document.querySelector(".boxes");
const proxy    = document.createElement("div");

const numBoxes = parts.length;
const boxWidth  = "auto";
const boxHeight = 20;  
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
  // box.style.backgroundColor = "red";


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
      num.innerText = "Change";
      input.value = 2;
      break;
    case 4:
      num.innerText = "Drop";
      input.value = 1;
      break;
    case 5:
      num.innerText = "Build 2";
      input.value = 1;
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




let blobapath = document.querySelector(".blobAPath");
let blobBPath = document.querySelector(".blobBPath");
let blobB= document.querySelector(".blobb");

var tlStageBlock = gsap.timeline({delay:1});

tlStageBlock.to("#stageBlock", {duration:0.45, height:"0vw", autoAlpha:1, delay:0.5, ease: "Power1.easeOut"},0)
tlStageBlock.to("#stageBlock2", {duration:0.45, height:"0vw", autoAlpha:1, delay:0.55, ease: "Power1.easeOut"},0)
tlStageBlock.to("#stageBlock3", {duration:0.45, height:"0vw", autoAlpha:1, delay:0.6, ease: "Power1.easeOut"},0)
tlStageBlock.to("#stageBlock4", {duration:0.45, height:"0vw", autoAlpha:1, delay:0.65, ease: "Power1.easeOut"},0)
tlStageBlock.to("#stageBlock5", {duration:0.45, height:"0vw", autoAlpha:1, delay:0.7, ease: "Power1.easeOut"},0)
tlStageBlock.to("#stageBlock6", {duration:0.45, height:"0vw", autoAlpha:1, delay:0.75, ease: "Power1.easeOut"},0)
gsap.to(".bloba", {duration:800,  x:"+=10vw", rotate:-20, scale: 1, ease: "Power3.easeInOut", yoyo:true, repeat:-1},0); 
// tlStageBlock.from("#mc_embed_signup", {duration:0.8, autoAlpha:0, y:"+=20vw", ease: "Power3.easeOut"},0.5); 

gsap.set("#bg_circle2", {x:"80vw", y:"10vh"})
gsap.set("#bg_circle", {top:"40vh",left:"15vh"})
// gsap.set("#bg_circle", {x:"110vw"})

var tl = gsap.timeline();
tl.to("#bg_circle", {duration: 500,scale:3, x:"100vw", y:"100vh", delay:1, yoyo:true, repeat:-1},0);
tl.to("#bg_circle2", {duration: 500, scale:3, x:-300, y:-300, yoyo:true, repeat:-1},0);

function help(){
  
  gsap.to(".box", {duration:0.5,autoAlpha:0})
  // tlStageBlock.reverse();


}

// document.getElementById("info").addEventListener("mouseover", help);



let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap.to(".marquee__part", {xPercent: -100, repeat: -1, duration: 10, ease: "linear"}).totalProgress(0.5);

gsap.set(".marquee__inner", {xPercent: -50});

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



gsap.set("#header, #presets, #boxes_cont, #master_controls, .marquee, #footer", {autoAlpha:0});
gsap.set("#close", {autoAlpha:0});

// document.getElementById("close").addEventListener("click", mouseClickOffPlayer);

// document.getElementById("close").addEventListener("mouseoff", mouseOffPlayer);


var playerTabExpand = gsap.timeline({delay:1});

// gsap.from("#wrapper", {duration:1.8, autoAlpha:1, y:"+=15px", ease:"PowerEase1.InOut", /* rotate:randomNum, */ yoyo:true, repeat:-1});
// gsap.from("#click_icon", {duration:1.8, autoAlpha:1, y:"-=7px", ease:"bounceEase.InOut", /* rotate:randomNum, */ yoyo:true, repeat:-1});



document.getElementById("wrapper").addEventListener("click", mouseClickPlayer);
// document.getElementById("close").addEventListener("click", mouseClickOffPlayer);

function mouseClickPlayer(){
  // gsap.set("#close", {autoAlpha:1});
  // gsap.set("#content_bg_2", {display:"block"});
  // gsap.set("#content_bg", {display:"none"});
  // gsap.set("#preset", {display:"block"});
  //   gsap.to(".wrapper", {duration:0.5, autoAlpha:1, delay:0.2, pointerEvents:"auto"});
    gsap.to("#wrapper", {duration:0.2, height:"90vh", width:"90vw", top:0})
    gsap.to("#wrapper_bg", {duration:0.2, autoAlpha:0})    
    gsap.set("#header, #presets, #boxes_cont, #master_controls, .marquee, #footer", {autoAlpha:1});
    // gsap.set("#close", {autoAlpha:1});
    // gsap.set("#download", {autoAlpha:1});
    // gsap.set("#totalDuration", {autoAlpha:1});
    // gsap.set("#play-toggle", {autoAlpha:0.8});
    // gsap.set("#nft_name", {duration:0.5, autoAlpha:0});
    // gsap.to("#edit_trax_logo", {duration:0.2, top:-36, right:-72, scale:0.2});   
    gsap.set("#click_icon", {display:"none"});
  }
  
  function mouseOverPlayer(){}
  function mouseOffPlayer(){}
  
  function mouseClickOffPlayer(){
    gsap.set("#close", {autoAlpha:0});
        // gsap.set("#preset", {display:"block"});
      // gsap.set("#content_bg_2", {display:"none"});
  // gsap.set("#content_bg", {display:"block"});
    // gsap.set("#download", {autoAlpha:0});
    gsap.set("#header, #presets, #boxes_cont, #master_controls, .marquee, #footer", {autoAlpha:0});
    gsap.to("#wrapper", {duration:0.2, width:336, height:280})
    // gsap.set("#close", {autoAlpha:0});
    // gsap.set("#totalDuration", {autoAlpha:0});
    // gsap.set("#play-toggle", {autoAlpha:0});
    // gsap.set("#content_bg", {pointerEvents: "auto"});
    // gsap.to("#nft_name", {duration:0.5, autoAlpha:1});
    // gsap.set(".wrapper", {autoAlpha:0, pointerEvents:"none"});
    // gsap.to("#edit_trax_logo", {duration:0.2, scale:1,top:79, right:44});
    // gsap.set("#copy_img", {autoAlpha:1});
    // gsap.set("#click_icon", {autoAlpha:1});
  }
