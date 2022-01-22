const container = document.querySelector('.container');
const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = '#000000';

const resetButton = document.querySelector('.reset');
const eraseButton = document.querySelector('.erase');
const rainbow = document.querySelector('.rainbow');
const selectedColor = document.querySelector('#gridcolor');
const slider = document.querySelector('#gridsize');
let slideValue = document.querySelector('#demo');
let gridItems

slideValue.innerHTML = `${slider.value} x ${slider.value}`;

makeGrid(DEFAULT_SIZE);


//creates the grid
function makeGrid(gridsize){
    
    //clears out the container if already populated
    container.innerHTML ='';

    //sets cell total to gridsize squared
    let celltot = gridsize * gridsize;

    container.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;   
    
    let row = 1;
    let column = 1;
    for (let i = 1; i <= celltot; i++) {
      let cell = document.createElement('div');
      cell.classList.add('grid-item')
      cell.style.backgroundColor = '#FFFFFF'
      cell.style.gridRow = row;
      cell.style.gridColumn = column;
      column += 1;
      if (column === gridsize + 1) {
        row += 1;
        column = 1;
      }
      container.appendChild(cell);
    }

    if(selectedColor.value == DEFAULT_COLOR){
      gridColor(DEFAULT_COLOR);
    }else{
      gridColor(selectedColor.value);
    }

}

function gridColor(color){  
  gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(griditem => {
    griditem.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = color;
    });
  });
}

function rainbowColor(){  
  gridItems.forEach(griditem => {
    griditem.addEventListener('mouseover', function(event){
      let x = Math.floor(Math.random() * 256);
      let y = Math.floor(Math.random() * 256);
      let z = Math.floor(Math.random() * 256);
      let bgcolor = `rgb(${x},${y},${z})`
      event.target.style.backgroundColor = bgcolor;
    });
  });
}

selectedColor.addEventListener('input', function(){
  gridColor(this.value);
})


slider.addEventListener('input', () =>{
  slideValue.innerHTML = `${slider.value} x ${slider.value}`;
  makeGrid(+slider.value);
})

resetButton.onclick = () => {
  gridItems.forEach(griditem => {
    griditem.style.backgroundColor = '#FFFFFF'
  });
  eraseButton.checked = false;
};

eraseButton.onclick = () =>{
  if(eraseButton.checked === true){
    gridItems.forEach(griditem => {
      griditem.addEventListener('mouseover', function(event){
          event.target.style.backgroundColor = '#FFFFFF';
      });
    });
  }else{
    gridItems.forEach(griditem => {
      griditem.addEventListener('mouseover', function(event){
          event.target.style.backgroundColor = selectedColor.value;
      });
    });
  }
}

rainbow.onclick = () => {
  rainbowColor();
}