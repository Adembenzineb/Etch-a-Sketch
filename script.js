
const containerSize = 1000; // Size of the container in pixels
const cont = document.querySelector("#container");
const gridSize = 50; // Number of grid items
cont.style.width = `${containerSize}px`;
cont.style.height = `${containerSize}px`;

function CreateGrid(){
    const gridnum = (containerSize / gridSize)**2; // Calculate the size of each grid item
    for (let i = 0 ; i < gridnum ; i++){
        let div = document.createElement("div");
        div.style.width = gridSize + "px";
        div.style.height = gridSize + "px";
        div.classList.add("grid");
        cont.appendChild(div)
        //document.addEventListener("mouseover", colorChange )
    }
}