function BreakText(){
    var h1 = document.querySelector("h1");
var h1Text = h1.textContent;


var splittedText = h1Text.split("");

var clutter = ""
var hv =Math.floor(splittedText.length/2);

splittedText.forEach((e,idx)=> {

if(idx > hv){
  clutter += `<span class ="a">${e}</span>`;
}else{
  clutter += `<span class ="b">${e}</span>`;

}
});


h1.innerHTML = clutter;
}


BreakText()




gsap.from("h1 .a",{
    y:50,
    duration:0.6,
    delay:0.5,
opacity:0,
stagger:0.15
})



gsap.from("h1 .b",{
    y:50,
    duration:0.6,
    delay:0.5,
opacity:0,
stagger:-0.15
})




