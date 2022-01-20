const container = document.querySelector('.container');
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000000';

const selectedColor = document.querySelector('#gridcolor');
const slider = document.querySelector('#gridsize');
let slideValue = document.querySelector('#demo');

slideValue.innerHTML = slider.value;


makeGrid(DEFAULT_SIZE);
gridColor(DEFAULT_COLOR);

//creates the grid
function makeGrid(gridsize){
    
    let celltot = gridsize * gridsize;

    container.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
    
    
    
    let row = 1;
    let column = 1;
    for (let i = 1; i <= celltot; i++) {
      let cell = document.createElement('div');
      cell.classList.add('grid-item')
      cell.style.gridRow = row;
      cell.style.gridColumn = column;
      column += 1;
      if (column === gridsize + 1) {
        row += 1;
        column = 1;
      }
      container.appendChild(cell);
    }
    
}

function gridColor(color){
  const griditems = document.querySelectorAll('.grid-item');
  griditems.forEach(griditem => {
    griditem.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = color;
    });
  });
}

selectedColor.addEventListener('input', function(e){
  gridColor(this.value);
})

slider.addEventListener('input', () =>{
  slideValue.innerHTML = slider.value;
  makeGrid(+slider.value)
})