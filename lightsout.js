const WIDTH = 4;
const HEIGHT = 4;
const DIFFICULTY = 3;


setupRandomBoard();
addClickListeners();

function randomNumber(max) {
  return Math.floor(Math.random() * max) + 1; 
}


function toggleCell(y, x) {
  if (x >= 0 && x < WIDTH && y >= 0 && y < HEIGHT) {
    let id = "#cell-" + y + "-" + x;
    let cell = document.querySelector(id);
    cell.classList.toggle("on");
  }
}

function toggleCellAndNeighbors(y, x) {
  toggleCell(y - 1, x);
  toggleCell(y, x - 1);
  toggleCell(y, x);
  toggleCell(y, x + 1);
  toggleCell(y + 1, x);
}

function handleCellClick(event) {
    let id = event.target.id;
    let y = Number(id[5]);
    let x = Number(id[7]);


    toggleCellAndNeighbors(y, x);

    if (checkForWin()) {
      setTimeout(handleWin, 500); // 500ms = 3sec
     
    }
  }

  


function setupRandomBoard() {
  for (let i = 0; i < DIFFICULTY; i++) {
    let x = randomNumber(WIDTH) - 1;
    let y = randomNumber(HEIGHT) - 1;
    toggleCellAndNeighbors(y, x);
  }
}



function addClickListeners() {
  for (let cell of document.querySelectorAll(".cell")) {
    cell.addEventListener("click", handleCellClick)
  }
}



