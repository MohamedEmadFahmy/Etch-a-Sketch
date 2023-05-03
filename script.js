let gridSizeText = document.querySelector("div#tools p");
let gridSizeSlider = document.querySelector("#grid-size");

console.log(gridSizeSlider);


let gridSize = gridSizeSlider.value;

gridSizeText.innerHTML = gridSize + "x" + gridSize;

gridSizeSlider.oninput = () => {
    gridSize = gridSizeSlider.value;
    gridSizeText.innerHTML = gridSize + "x" + gridSize;
}