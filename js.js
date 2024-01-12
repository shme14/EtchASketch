

const sketchContainerDiv = document.querySelector('#sketchContainer');

let squareSize = '20px';
let xGrid = 16;
let yGrid = 16;
createGrid(xGrid,yGrid)

function createGrid(xGrid, yGrid) {
    for(let i = 0; i<yGrid; i++){
        const gridRowDiv = document.createElement('div');
        gridRowDiv.classList.add('gridRow');
        for(let ii = 0; ii<xGrid; ii++){
            const gridSquareDiv = document.createElement('div');
            var colors = ['red','blue','green','yellow'];
            var random_color = colors[Math.floor(Math.random() * colors.length)];
            gridSquareDiv.style.backgroundColor = random_color;
            gridSquareDiv.id = String(i) + "," + String(ii);
            gridSquareDiv.classList.add('gridSquare');
            // gridSquareDiv.textContent = ('X')
            gridSquareDiv.style.width = squareSize;
            gridSquareDiv.style.height = squareSize;



            gridRowDiv.appendChild(gridSquareDiv);
        }
        sketchContainerDiv.appendChild(gridRowDiv);
    }
}
