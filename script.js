var main = document.querySelector(".main")

var cursor = document.querySelector(".cursor")

var imageDiv = document.querySelector(".image");


main.addEventListener('mousemove',(dets)=>{
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out"
    })
})


imageDiv.addEventListener('mouseenter',()=>{
    cursor.innerHTML = "view more"
    cursor.style.backgroundColor = " hsla(0, 0%, 100%, 0.447)"
    gsap.to(cursor,{
        scale:4
    })
})


imageDiv.addEventListener('mouseleave',()=>{
        cursor.innerHTML = ""
            cursor.style.backgroundColor = "#fff"

    gsap.to(cursor,{
        scale: 1
    })
})