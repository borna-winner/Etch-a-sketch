const gridContainer = document.querySelector("#gridContainer");
function createGrid(){
    for(let i = 0; i<312; i += 1){    
    // create div with id and classname on variable(div)
        let divBlock = document.createElement('div');
        divBlock.className = 'blockGrid';
        gridContainer.append(divBlock);
}
}
createGrid()
function addEvent(){
  let squares = document.querySelectorAll('.blockGrid');
  squares.forEach(squares => squares.addEventListener('mouseover', changeColor));
}
addEvent()
function changeColor() {
    this.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
} 
////////////////////////////////////////////
//let clearBoardButton have a reactive click
let clearBoardButton = document.getElementById("restartButton");
let squares = document.querySelectorAll('.blockGrid');
function clearBoardEnable(){
  clearBoardButton.addEventListener('click', clearBoard);
}
clearBoardEnable();
function clearBoard(){
  squares.style.backgroundColor = "#20B2AA";
}

let color = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
