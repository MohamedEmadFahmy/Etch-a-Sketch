const gridSizeText = document.querySelector("div#tools p");
const gridSizeSlider = document.querySelector("#grid-size");

let gridSize = gridSizeSlider.value;

const buttons  = document.querySelectorAll("button.mode");

const firstButton = document.querySelector("button#color-mode"); 

const clearButton = document.querySelector("button#clear"); 

const gridlinesButton = document.querySelector("button#show-gridlines"); 

const grid = document.querySelector("#grid");

const pixelsXY = 700;

const colorPicker = document.querySelector("#color-picker");


firstButton.classList.add("active"); // set default mode to be color and button to be active


const clear = () => {
    const cells = document.querySelectorAll("div.box");

    cells.forEach( (cell) => {
        cell.style.backgroundColor = "white";
    });
    
};

const toggleGridlines = () => {
    let borderLeftCells = document.querySelectorAll(".border-left");
    let borderTopCells = document.querySelectorAll(".border-top");
    if(gridlinesButton.classList.contains("active")){
        borderLeftCells.forEach(cell => {
            cell.style.borderLeft = "1px solid grey";
        });
        borderTopCells.forEach(cell => {
            cell.style.borderTop = "1px solid grey";
        });
    }
    else{
        borderLeftCells.forEach(cell => {
            cell.style.borderLeft = "0px solid grey";
        });
        borderTopCells.forEach(cell => {
            cell.style.borderTop = "0px solid grey";
        });
    }
};


const handleClick = (event)=>{
    buttons.forEach((button) => {
        button.classList.remove("active");
    });
    event.target.classList.add("active");     // to make only 1 of the first 3 buttons active at the same time
    let buttonId = event.target.id;
    mode = buttonId.slice(0,-5) // modes: color, rainbow, eraser
};

buttons.forEach((button) =>{
    button.addEventListener("click", handleClick);
});


const createDivs = (size) => {
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            const div = document.createElement("div");
            div.classList.add("box");
            div.style.add
            let width = (pixelsXY) / size;
            div.style.width = width + "px";
            div.style.height = width + "px";
            if(i !== 0){
                div.classList.add("border-left");
            }
            if(j !== 0){
                div.classList.add("border-top")
            }
            grid.appendChild(div);
            addListener(div);
        }
    }
};

gridSizeSlider.oninput = () => {
    grid.innerHTML = "";
    gridSize = gridSizeSlider.value;
    gridSizeText.innerHTML = gridSize + "x" + gridSize;
    createDivs(gridSize);
    toggleGridlines();
}



clearButton.addEventListener("click", clear);


gridlinesButton.addEventListener("click", () => {
    gridlinesButton.classList.toggle("active");
    toggleGridlines();
});

document.addEventListener("mouseup", () => {
        mouseDown = false;
})

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addListener(div) {
    div.addEventListener("mousedown", () => {
        if(mode === "eraser"){
            color = "white";
        }
        else if(mode === "color"){
            color = colorPicker.value;
        }
        else{
            r = randomNumber(0,255);
            g = randomNumber(0,255);
            b = randomNumber(0,255);
            color = "rgb(" + r + ", " + g + ", " + b + ")"
        }
        div.style.backgroundColor = color;
        mouseDown = true;
    })
    div.addEventListener("mouseover", () => {
        if(mouseDown){
            if(mode === "eraser"){
                color = "white";
            }
            else if(mode === "color"){
                color = colorPicker.value;
            }
            else{
                r = randomNumber(0,255);
                g = randomNumber(0,255);
                b = randomNumber(0,255);
                color = "rgb(" + r + ", " + g + ", " + b + ")"
            }
            div.style.backgroundColor = color;
        }
    })
}


gridSizeText.innerHTML = gridSize + "x" + gridSize;  // to update slider text
createDivs(gridSize);
let mode = "color";
gridlinesButton.classList.toggle("active");
toggleGridlines();

var mouseDown = false;







