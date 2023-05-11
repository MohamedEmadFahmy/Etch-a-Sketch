const gridSizeText = document.querySelector("div#tools p");
const gridSizeSlider = document.querySelector("#grid-size");

let gridSize = gridSizeSlider.value;

const buttons  = document.querySelectorAll("button.mode");

const firstButton = document.querySelector("button#color-mode"); 

const clearButton = document.querySelector("button#clear"); 

const gridlinesButton = document.querySelector("button#show-gridlines"); 

const grid = document.querySelector("#grid");

const pixelsXY = 700;


firstButton.classList.add("active"); // set default mode and button to be active

let mode = "color";
let showGridLines = true;
gridlinesButton.classList.toggle("active");



const clear = ()=>{
    
};

const toggleGridlines = () => {
    let borderLeftCells = document.querySelectorAll(".border-left");
    let borderTopCells = document.querySelectorAll(".border-top");
    if(showGridLines){
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

toggleGridlines();

const handleClick = (event)=>{
    buttons.forEach((button) => {
        button.classList.remove("active");
    });
    event.target.classList.add("active");     // to make only 1 of the first 3 buttons active at the same time
    let buttonId = event.target.id;
    mode = buttonId.slice(0,-5)
    console.log(mode);
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
            let width = (pixelsXY * 0.92988) / size;
            div.style.width = width + "px";
            div.style.height = width + "px";
            if(i !== 0){
                div.classList.add("border-left");
                // div.style.borderLeft = "1px solid grey";
                // div.style.backgroundColor = "black";
            }
            if(j !== 0){
                div.classList.add("border-top");
                // div.style.borderTop = "1px solid grey";
                // div.style.backgroundColor = "black";
            }
            grid.appendChild(div);
        }
    }
};


gridSizeText.innerHTML = gridSize + "x" + gridSize;  // to update slider text
// createDivs(gridSize);
createDivs(4);



gridSizeSlider.oninput = () => {
    grid.innerHTML = "";
    gridSize = gridSizeSlider.value;
    gridSizeText.innerHTML = gridSize + "x" + gridSize;
    // createDivs(2);
    createDivs(gridSize);
    if(showGridLines){
        toggleGridlines();
    }
}



clearButton.addEventListener("click", clear);
gridlinesButton.addEventListener("click", () => {
    gridlinesButton.classList.toggle("active");
    toggleGridlines();
    showGridLines = !showGridLines;
});

