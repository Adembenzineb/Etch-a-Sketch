init();
const reset = document.getElementById("bt");
const rgbb = document.getElementById("rgb");
reset.addEventListener("click", changeGrid);
rgbb.addEventListener("click" , randomColor);
createGrid();

function init(){
    //Adjusting the dimonsions of the container 
    window.containerSize = 700; //the default container size
    window.container = document.getElementById("container");
    container.style.width = `${containerSize}px`
    container.style.height = `${containerSize}px`
    window.gridnum = 16 ; //the default grids number
    const reset = document.getElementById("bt");
    reset.addEventListener("click", changeGrid);
    window.penColor = "grey"
    const rgbb = document.getElementById("rgb");
    window.mode = "normal";



}

function createGrid(){
    let gn = gridnum**2
    let nb = 0
    let gridSize = Math.trunc(containerSize/gridnum);
    let rest = Math.trunc(containerSize - (gridSize * gridnum));

    container.style.width = `${rest + containerSize}px`
    console.log(Math.trunc(rest))

    for (let i = 0 ; i < gn ; i++){ 
        nb++
        let div = document.createElement("div");
        div.style.height = `${gridSize}px`;
        div.style.width = `${gridSize}px`;
        div.classList.add("grid");
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = penColor;
            if(penColor != "grey"){
                randomColor();
            }
        })
        container.appendChild(div);
    }
}
function changeGrid(){
    const gridClass = document.querySelectorAll(".grid");
    for (let l = 0; l < gridClass.length; l++) {
        gridClass[l].style.backgroundColor = "white";
        
    }
    g = prompt("Select grid numbers between 1 - 100")
    if (isNaN(g) || g > 100 || g < 1){
        alert("Select grid numbers between 1 - 100 !!!!!!")
    }else{
        window.gridnum = g;
        removeGrid()
        createGrid();
        console.log(window.gridnum)
    }
}

function removeGrid(){
    const gridClass = document.querySelectorAll(".grid");
    for (let l = 0; l < gridClass.length; l++) {
        gridClass[l].remove();
    }
}

function randomColor(){
    let min = 0;
    let max = 255;
    let r = Math.trunc((Math.random()-min)*max);
    let g = Math.trunc((Math.random()-min)*max);
    let b = Math.trunc((Math.random()-min)*max);
    window.penColor = `rgb(${r},${g},${b})`;
}



