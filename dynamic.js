function MyFunction(){
    var x = document.getElementById('midbuttons');
    if(x.className === "middle_buttons"){
        x.className += "responsive";
    }
    else{
        x.className = "middle_buttons";
    }
}


let scroll = document.querySelector(".merches");
let nextbtn = document.getElementById("nxtbtn");
let backbtn = document.getElementById("bckbtn");

function Scroll(){


    scroll.addEventListener("wheel" , (e) => {
        e.preventDefault();
        scroll.scrollLeft += e.deltaY;
    });

    nextbtn.addEventListener("click", ()=>{
        scroll.scrollLeft += 1000;
    });

    backbtn.addEventListener("click", ()=>{
        scroll.scrollLeft -= 1000;
    })
}