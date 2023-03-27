const prevBtn=document.getElementById("prev")
const nextBtn=document.querySelector("#next")
const container=document.querySelector(".container")
const slideShow=document.querySelector("#slideShow")
const buttons=document.querySelector(".buttons")
const IMAGES=[
    {
        id:1,
        image:"https://static.toiimg.com/thumb/msid-54559212,width-748,height-499,resizemode=4,imgsize-307081/.jpg"
    },
    {
        id:2,
        image:"digitalart-1679920811093-1500.jpg"
    },
    {
        id:3,
        image:"dj-1679920823393-5863.jpg"
    },
    {
        id:4,
        image:"sombraoverwatch-1679920852272-9017.jpg"
    },
    {
        id:5,
        image:"photography-1679920833521-3807.jpg"
    }

]
let i=1;
let n=IMAGES.length-1;

let temp=0;
function TempDec(){
    switch (temp){
        case -1:
            temp=4;
            break;
        case -2:
            temp=4;
            break;
        case -3:
            temp=4;
            break;
        case -4:
            temp=4;
            break;

    }
}

slideShow.addEventListener("click", ()=>{
    const timerId=setInterval(SlideNext,1000);
    
    slideShow.style.display="none";
    const stopBtn=document.createElement("button");
    stopBtn.innerHTML="Stop"
    buttons.appendChild(stopBtn);
    stopBtn.style.transition=".5s"
    stopBtn.addEventListener("click", ()=>{
        clearInterval(timerId);
        stopBtn.style.display="none";
        slideShow.style.display="inline";
        slideShow.style.transition=".5s"
        
    })
    
});
   
window.addEventListener("keydown", (e)=>{
    
    if(e.code=="ArrowLeft"){
        SlidePrev();
    }else if(e.code=="ArrowRight"){
        SlideNext();
    }
})

nextBtn.addEventListener("click",()=>{
    SlideNext();
    
});
prevBtn.addEventListener("click",SlidePrev);   
function SlideNext(){
    temp=temp+1;
    TempDec();
    if(temp==5){
        temp=0;
    }
    container.classList.add("animation");
    container.innerHTML=`<img src="${IMAGES[temp].image}" alt="">`;
    const timerId2=setTimeout(Animaton,900)
    function Animaton(){
        container.classList.remove("animation")
    }
    
    

}
function SlidePrev(){
    temp=temp-1;
    TempDec();
   
    if(temp==-4){
        temp=0;
    }
    container.classList.add("animation2");
    container.innerHTML=`<img src="${IMAGES[temp].image}" alt="">`;
    const timerId2=setTimeout(Animaton,900)
    function Animaton(){
        container.classList.remove("animation2")
    }

}
