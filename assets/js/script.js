var gridState = 1;


function toggleGrid(newState) {
  if (newState === gridState) {
    // If the clicked state is the same as the current state, do nothing
    return;
  }

  var gridContainer = document.querySelector('.grid-container');
  var gridItems = document.querySelectorAll('.grid-item');

  var tabRight = document.querySelector('#right-tab');
  var tabLeft = document.querySelector('#left-tab');
  var contentLeft = document.querySelector('.left-content');
  var tabTop = document.querySelector('#top-tab');
  var tabBot = document.querySelector('#bot-tab');
  var tabMid = document.querySelector('#mid-tab');
  var exitBtn = document.querySelector('.exit-button');

  // Update grid state
  gridState = newState;

  document.querySelector('.exit-button').onclick = function () {
    console.log('click click click');
    gridState = 1;
  }

  switch (gridState) {
    case 1:
      console.log('toggled to 1')
      // Update grid styles for state 1
      gridContainer.style.gridTemplateColumns = '3vw 1fr 3vw';
      gridContainer.style.gridTemplateRows = '3vw 1fr 3vw';
      
      tabRight.style.cssText = 'grid-column-start: 3; grid-column-end: 4; grid-row-start: 1; grid-row-end: 3;';
      tabTop.style.cssText = 'grid-column-start: 1; grid-column-end: 3; grid-row-start: 1; grid-row-end: 2;';
      tabBot.style.cssText = 'grid-column-start: 1; grid-column-end: 4; grid-row-start: 3; grid-row-end: 4;';
      tabLeft.style.cssText = 'grid-column-start: 1; grid-column-end: 2; grid-row-start: 2; grid-row-end: 4;';
      break;

    case 2:
      // Update grid styles for state 2
      gridContainer.style.gridTemplateRows = '3vw 1fr 3vw';
      gridContainer.style.gridTemplateColumns = '1fr Ovw 3vw';
  
      tabLeft.style.cssText = 'grid-column-end:3;';

      tabRight.style.cssText = 'grid-column-start: 3; grid-column-end: 4; grid-row-start: 1; grid-row-end: 3;';
      tabTop.style.cssText = 'grid-column-start: 1; grid-column-end: 3; grid-row-start: 1; grid-row-end: 2;';
      tabBot.style.cssText = 'grid-column-start: 1; grid-column-end: 4; grid-row-start: 3; grid-row-end: 4;';
      
      // Update styles for state 2
      //contentLeft.classList.add('visible');
      exitBtn.classList.toggle('visible');
      exitBtn.onclick = function(){
        console.log('exit clicked')
        gridState = 1;
      };
      break;

    case 3:
      // Update grid styles for state 3
      gridContainer.style.gridTemplateRows = '3vw 0vw 1fr';
      gridContainer.style.gridTemplateColumns = '3vw 1fr 3vw';
      tabBot.style.cssText = 'grid-row-start:2; grid-column-end:2;';

      tabLeft.style.cssText = 'grid-column-start: 1; grid-column-end: 2; grid-row-start: 2; grid-row-end: 4;';
      tabRight.style.cssText = 'grid-column-start: 3; grid-column-end: 4; grid-row-start: 1; grid-row-end: 4;';
      tabTop.style.cssText = 'grid-column-start: 1; grid-column-end: 3; grid-row-start: 1; grid-row-end: 2;';
     
      break;

    case 4:
      // Update grid styles for state 4
        gridContainer.style.gridTemplateRows = '3vw 1fr 3vw';
        gridContainer.style.gridTemplateColumns = '3vw 0vw 1fr';
        tabRight.style.cssText = 'grid-column-start: 2; grid-row-end:3;';

      tabLeft.style.cssText = 'grid-column-start: 1; grid-column-end: 2; grid-row-start: 2; grid-row-end: 4;';
      tabTop.style.cssText = 'grid-column-start: 1; grid-column-end: 4; grid-row-start: 1; grid-row-end: 2;';
     tabBot.style.cssText = 'grid-column-start: 2; grid-column-end: 4; grid-row-start: 3; grid-row-end: 4;';
     tabMid.style.cssText = 'grid-column-start: 0; grid-column-end: 0; grid-row-start: 0; grid-row-end: 0;';
      
      break;

    case 5:
      // Update grid styles for state 5
  gridContainer.style.gridTemplateRows = '1fr 0vw 3vw';
  gridContainer.style.gridTemplateColumns = '3vw 1fr 3vw';
      tabTop.style.cssText = 'grid-row-start:1; grid-column-start:2';

      tabLeft.style.cssText = 'grid-column-start: 1; grid-column-end: 2; grid-row-start: 1; grid-row-end: 4;';
      tabRight.style.cssText = 'grid-column-start: 3; grid-column-end: 4; grid-row-start: 1; grid-row-end: 3;';
      tabBot.style.cssText = 'grid-column-start: 2; grid-column-end: 4; grid-row-start: 3; grid-row-end: 4;';
     tabMid.style.cssText = 'grid-column-start: 0; grid-column-end: 0; grid-row-start: 0; grid-row-end: 0;';
      
    
    }

  }
     
