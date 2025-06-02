function grids16(){
    const cont = document.querySelector("#container");
    for (let i = 0 ; i < 50 ; i++){
        let div = document.createElement("div");
        div.classList.add("grid");
        cont.appendChild(div)

    }

}