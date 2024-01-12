

const sketchContainerDiv = document.querySelector('#sketchContainer');
const squareSizeInput = document.querySelector('#squareSizeInput');
const squareSizeInputBtn = document.querySelector('#squareSizeInputBtn');

var colors = ['red','blue','green','yellow'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
let xGrid = 16;
let yGrid = 16;
createGrid(xGrid,yGrid)

function createGrid(xGrid, yGrid) {
    for(let i = 0; i<yGrid; i++){
        const gridRowDiv = document.createElement('div');
        gridRowDiv.classList.add('gridRow');
        for(let ii = 0; ii<xGrid; ii++){
            const gridSquareDiv = document.createElement('div');
            gridSquareDiv.style.backgroundColor = 'Black';
            gridSquareDiv.id = String(i) + "," + String(ii);
            gridSquareDiv.classList.add('gridSquare');
            gridSquareDiv.style.flex = "1";
            gridSquareDiv.style.aspectRatio = "1 / 1";
            gridSquareDiv.addEventListener('mouseover', () => {
                random_color = colors[Math.floor(Math.random() * colors.length)];
                gridSquareDiv.style.backgroundColor = random_color;
            });
            gridRowDiv.appendChild(gridSquareDiv);
        }
        sketchContainerDiv.appendChild(gridRowDiv);
    }
}

squareSizeInputBtn.addEventListener('click', () => {
    let NewSize = squareSizeInput.value;
    if ((0 < NewSize) && (NewSize < 101) ) {
        while (sketchContainerDiv.firstChild) {
            sketchContainerDiv.removeChild(sketchContainerDiv.firstChild);
        }
        xGrid = NewSize;
        yGrid = NewSize;
        createGrid(xGrid,yGrid)
    }
    else{
        alert("Must be between 1 and 100")
    }
});