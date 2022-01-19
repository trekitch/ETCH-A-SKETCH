const container = document.querySelector('.container');


//creates the grid
function makeGrid(){
    let rowtot = 64;
    let celltot = rowtot * rowtot;

    container.style.gridTemplateRows = `repeat(${rowtot}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${rowtot}, 1fr)`;
    
    
    
    let row = 1;
    let column = 1;
    for (let i = 1; i <= celltot; i++) {
      let cell = document.createElement('div');
      cell.classList.add('grid-item')
      cell.style.gridRow = row;
      cell.style.gridColumn = column;
      column += 1;
      if (column === rowtot + 1) {
        row += 1;
        column = 1;
      }
      container.appendChild(cell);
    }
    
}

makeGrid();


const griditems = document.querySelectorAll('.grid-item');

griditems.forEach(griditem => {
    griditem.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'black';
    });
})


