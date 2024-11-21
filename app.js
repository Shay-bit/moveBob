const bob = document.querySelector(".bob");
const eyes = document.querySelector(".eyes-container");
const dots = document.querySelectorAll(".dot");


let move = 100;

// console.log(dots);
// dots.forEach((dot) => {
//     console.log(dot);
//     dot.style.top = 
// })

function moveBob(e) {
    let moveX = e.clientX;
    let moveY = e.clientY;

    bob.style.top = moveY + 'px';
    bob.style.left = moveX + 'px';

    // console.log("X: ", moveX, "Y: ", moveY)

    // Movement on 
    if (e.movementY >= 0) {
        dots.forEach((dot) => {
            dot.style.top = "30px";
        });
    }

    if(e.movementY < 0) {
        dots.forEach((dot)=> {
            dot.style.top = "5px";
        });
    }

    if (e.movementX >= 0) {
        dots.forEach((dot) => {
            dot.style.left = "30px";
        });
    }

    if(e.movementX < 0) {
        dots.forEach((dot)=> {
            dot.style.left = "0px";
        });
    }
}

document.addEventListener("mousemove", moveBob)