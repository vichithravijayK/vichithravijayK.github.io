let scrollcontainer = document.querySelector(".gallery");
let backbutton = document.getElementById("backBtn");
let nextbutton = document.getElementById("nextBtn");

scrollcontainer.addEventListener("wheel",(evt) =>{
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
    scrollcontainer.style.scrollBehavior ="auto";
});

backbutton.addEventListener("click",() =>{
    scrollcontainer.style.scrollBehavior ="smooth";
    scrollcontainer.scrollLeft -=900;
})

nextbutton.addEventListener("click",() =>{
    scrollcontainer.style.scrollBehavior ="smooth";
    scrollcontainer.scrollLeft +=900;
});
