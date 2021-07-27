let blankTile = document.getElementById("grid").children[2];
let transitionTile = null;

document.addEventListener("click", e => toggleTile(e));

toggleTile = (e) => {
  let tileImage = window.getComputedStyle(e.target).backgroundImage;
  if (tileImage !== 'none' && !transitionTile){
    const NUM = { 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9}

    let blankTileGridArea = NUM[window.getComputedStyle(blankTile).gridColumnEnd];
    let targetTileGridArea = NUM[window.getComputedStyle(e.target).gridColumnEnd];
    if (
      targetTileGridArea - 1 === blankTileGridArea &&
      blankTileGridArea % 3 !== 0                  ||
      targetTileGridArea + 1 === blankTileGridArea &&
      targetTileGridArea % 3 !== 0                 ||
      targetTileGridArea + 3 === blankTileGridArea ||
      targetTileGridArea - 3 === blankTileGridArea
    ){
      blankTile.style.backgroundImage = window.getComputedStyle(e.target).backgroundImage;
      transitionTile = e.target;
      transitionTile.style.backgroundImage = 'none';
      transitionTile.style.backgroundColor = '#fff';
      blankTile = transitionTile;
      transitionTile = null;
    }
  }
}
