const gridSizeText = document.querySelector("div#tools p");
const gridSizeSlider = document.querySelector("#grid-size");

let gridSize = gridSizeSlider.value;

const buttons  = document.querySelectorAll("button.mode");

const firstButton = document.querySelector("button#color-mode"); 

const clearButton = document.querySelector("button#clear"); 

const gridlinesButton = document.querySelector("button#show-gridlines"); 


firstButton.classList.add("active"); // set default mode and button to be active

let mode = "color";


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


gridSizeText.innerHTML = gridSize + "x" + gridSize;  // to update slider text

gridSizeSlider.oninput = () => {
    gridSize = gridSizeSlider.value;
    gridSizeText.innerHTML = gridSize + "x" + gridSize;
}


const clear = ()=>{
    
};


const showGridlines = () => {
    gridlinesButton.classList.toggle("active");
};


clearButton.addEventListener("click", clear);
gridlinesButton.addEventListener("click", showGridlines);

