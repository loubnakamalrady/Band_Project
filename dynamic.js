
// This function is used to create a responsive button that takes the list in the navigation bar
// and then put it downside the navbar and when you click it it opens and closes the list
function MyFunction(){
    const x = document.querySelector('.nav_button');
    x.addEventListener("click", ()=>{
        //checks if x class name matches "middle_buttons"
        //if yes it adds it to the class "responsive"
        if(x.className === "middle_buttons"){
            x.className += "responsive";
        }
        //if not it adds it to "middle_buttons"
        else{
            x.className = "middle_buttons";
        }
    });
    
}

MyFunction()


let scroll = document.querySelector(".merches");
let nextbtn = document.getElementById("nxtbtn");
let backbtn = document.getElementById("bckbtn");

//this function is created to scroll between the merches
//pictures by clicking the next and back buttons
function scrollFn(){
    //when the right button is clicked the pictures move
    //by increasing pixels by 1000 so they move to the right.
    nextbtn.addEventListener("click", ()=>{
        scroll.scrollLeft += 1000;
    });
    //when the left button is clicked the pictures move
    //by decreasing pixels by 1000 so they move to the left.
    backbtn.addEventListener("click", ()=>{
        scroll.scrollLeft -= 1000;
    })
}


scrollFn()