let sec2 = document.getElementById("section2");
let sec2img = document.querySelectorAll(".services");
sec2.addEventListener("mouseenter", ()=>{
    sec2img.forEach((img) =>{
        img.style.transform = `rotatex(25deg)`;
         img.style.transform = `rotatez(-1deg)`;
    });

});
sec2.addEventListener("mouseleave", () => {
    sec2img.forEach((img) => {
        img.style.transform = "rotatex(0deg)";
    });
});