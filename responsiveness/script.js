// var istatus = document.querySelector("h5")

// var add = document.querySelector("#add")

// var check = 0;

// add.addEventListener("click",()=>{
//     if(check == 0){
//                 add.innerHTML = "Remove Friend"

//    istatus.innerHTML = "Friends"
//     istatus.style.color = "green"
//     check = 1;
//     }else{
//                 add.innerHTML = "Add Friend"

//         istatus.innerHTML = "Strinager"
//     istatus.style.color = "red"
//     check = 0;  
//     }
// })



// var con = document.querySelector(".container")

// var love = document.querySelector("i")


// con.addEventListener("dblclick",()=>{
//     love.style.transform = "translate(-50%,-50%) scale(1)"
//     love.style.opacity = 0.8
//     setTimeout(() => {
//             love.style.transform = "translate(-50%,-50%) scale(0)"
//     }, 2000);

//        setTimeout(() => {
//             love.style.opacity = 0
//     }, 1000);
// })



// var main = document.querySelector(".main")
// var crsr = document.querySelector(".cursor")

  
// main.addEventListener("mousemove",(dets) =>{

//     var x = dets.x;
//     var y = dets.y;

//     crsr.style.left = x + "px"
//     crsr.style.top = y +"px"

// })

// var title = document.querySelector("h1");

// title.addEventListener("mouseenter", () =>{
//     crsr.style.width = "50px";
//         crsr.style.height = "50px";

// })

// title.addEventListener("mouseleave", () => {
//   crsr.style.width = "20px";
//   crsr.style.height = "20px";
// });


// var elem = document.querySelectorAll(".elem")

// elem.forEach((val)=>{

//     var elemImage = val.childNodes[3];
    
// val.addEventListener("mousemove",(dets) =>{
//     elemImage.style.left = dets.x+"px";

// })

// val.addEventListener("mouseenter",(dets) =>{
//   elemImage.style.opacity = 1
// })


// val.addEventListener("mouseleave",(dets) =>{
//   elemImage.style.opacity = 0

// })

// })




// var arr = [ {
//     dp: "_user-uploads_Yuiwoo8.jpg",
//     story:"WhatsApp Image 2025-06-05 at 13.42.20_c275dbb5.jpg"
// },
// {
//     dp: "_user-uploads_Yuiwoo8.jpg",
//     story:"WhatsApp Image 2025-06-05 at 13.42.20_c275dbb5.jpg"
// },
// {
//     dp: "_user-uploads_Yuiwoo8.jpg",
//     story:"WhatsApp Image 2025-06-05 at 13.42.20_c275dbb5.jpg"
// },
// {
//     dp: "_user-uploads_Yuiwoo8.jpg",
//     story:"WhatsApp Image 2025-06-05 at 13.42.20_c275dbb5.jpg"
// }]


// var st = document.querySelector(".storiyan");
// var clutter = ""

// arr.forEach((elem,idx) =>{
//     clutter += `<div class = "story"> 
//     <img id = "${idx}" src = "${elem.dp}">
//     </div>`
// })

// // console.log(clutter);

// st.innerHTML = clutter


// st.addEventListener("click", (dets)=>{
//     var value = arr[dets.target.id].story
//     console.log(value)
//     document.querySelector(".fullscreen").style.display = "block"
//     document.querySelector(".fullscreen").style
//     .backgroundImage = `url("${value}")`
    
//     setTimeout(() =>{
//     document.querySelector(".fullscreen").style.display = "none"

//     },3000)
// })


// var main = document.querySelector(".grid");

// var blocks = "";
// for(let i = 0; i < 64; i++){

//     blocks += `
// <div id= "${i}" class="box"></div>`
// }

// main.innerHTML = blocks


// let arr = [];
// let pattern = [];

// for(let i = 0; i < 64; i++){
//     arr[i] = false;
// }


// const colors = [
//   "red", "blue", "green", "black", "rgb(121, 90, 85)", "gray", "silver", "maroon",
//   "purple", "fuchsia", "lime", "olive", "yellow", "navy", "teal", "aqua",
//   "orange", "coral", "gold", "indigo", "violet", "pink", "brown", "beige",

//   "#FF5733", "#33FF57", "#5733FF", "#33B8FF", "#FF33B8", "#B8FF33",
//   "#8A2BE2", "#A52A2A", "#DEB887", "#5F9EA0", "#7FFF00", "#D2691E",
//   "#FF7F50", "#6495ED", "#DC143C", "#00FFFF", "#00008B", "#B8860B",

//   "rgb(255, 99, 71)", 
//   "rgb(60, 179, 113)", 
//   "rgb(106, 90, 205)",  
//   "rgb(72, 61, 139)",   
//   "rgb(255, 215, 0)", 
//   "rgb(255, 140, 0)",   
//   "rgb(0, 191, 255)",   
//   "rgb(138, 43, 226)",  

//   "hsl(0, 100%, 50%)",   
//   "hsl(120, 100%, 50%)", 
//   "hsl(240, 100%, 50%)", 
//   "hsl(60, 100%, 50%)",  
//   "hsl(180, 100%, 50%)", 
//   "hsl(300, 100%, 50%)", 
//   "hsl(30, 100%, 50%)", 
//   "hsl(270, 100%, 50%)", 

//   "cadetblue", "darkcyan", "cornflowerblue", "darkgoldenrod",
//   "darkmagenta", "darkolivegreen", "darkorchid", "darkslateblue",
//   "darkslategray", "dodgerblue", "firebrick", "forestgreen",
//   "hotpink", "indianred", "lightseagreen", "mediumorchid",
//   "mediumpurple", "midnightblue", "olivedrab", "orangered",
//   "royalblue", "seagreen", "sienna", "steelblue"
// ];


// var box = document.querySelectorAll(".box")

// box.forEach((b) =>{
// b.addEventListener('click',(e) =>{

   
// var id =e.target.id;
//     if(!arr[id]){
//         b.style.backgroundColor = colors[id];
//         arr[id] = true;
//         pattern.push(id)
//     }else{
//          b.style.backgroundColor = "#fff"
//         arr[id] = false;  
//         remCol(id)
//     }
//      if(pattern.length == 64){
//         remColor()
//         pattern= []
//      }
// })
// })

// function remColor(){
//     pattern.reverse().forEach((e ,idx)=>{
//         setTimeout(()=>{
//             document.querySelectorAll(".box")[e].style.backgroundColor ="#fff";
//         },1000* (Number(idx)+1))
//     })
// }

// function remCol(id){
//     var op = pattern.indexOf(id)

//     if(op >-1){
//         pattern.splice(op,1);
//     }
// }







