var characterList = document.getElementById('characterGrid');
var enemySelected = characterList.getElementsByClassName('charaterImage')[1];
var playerSelected = characterList.getElementsByClassName('charaterImage')[0];
var playerSelectedNbr = 0;
var enemySelectedNbr = 1;
var characterNameList=['Charlotte the knightess','Fiend in the Night shades','Noel the lost Ancient Hero', 'Zartax the Wise Wizzard', 'Darius the Tamer of electricity','McFit the body-builder']

//nawigacja po menu wyboru postaci przy pomocy klawiszy
document.addEventListener('keydown', function(event) {
  var listLength = characterList.getElementsByClassName('charaterImage').length - 1;
  if (event.key === 'ArrowRight') {
    enemySelectedNbr++;
    if(enemySelectedNbr === playerSelectedNbr) enemySelectedNbr++
    //nexst
    if (enemySelected) {
      removeClass(enemySelected, 'characterChosenP2');
      next = characterList.getElementsByClassName('charaterImage')[enemySelectedNbr];
      if (typeof next !== undefined && enemySelectedNbr <= listLength) {
        enemySelected = next;
      } else {
        if (playerSelectedNbr === 0) {
            enemySelectedNbr =1
            enemySelected = characterList.getElementsByClassName('charaterImage')[1]; }
        else {enemySelectedNbr = 0;
        enemySelected = characterList.getElementsByClassName('charaterImage')[0];}
      }
      addClass(enemySelected, 'characterChosenP2');
    }

  } else if (event.key === 'ArrowLeft') {
    if (enemySelected) {
      removeClass(enemySelected, 'characterChosenP2');
      enemySelectedNbr--;
      if(enemySelectedNbr === playerSelectedNbr) enemySelectedNbr--
      next = characterList.getElementsByClassName('charaterImage')[enemySelectedNbr];
      if (typeof next !== undefined && enemySelectedNbr >= 0) {
        enemySelected = next;
      } else {
        if(playerSelectedNbr === listLength){
            enemySelectedNbr = listLength-1;
            enemySelected = characterList.getElementsByClassName('charaterImage')[listLength-1];
            } else {
            enemySelectedNbr = listLength;
            enemySelected = characterList.getElementsByClassName('charaterImage')[listLength];
            }
      }
      addClass(enemySelected, 'characterChosenP2');
    }
  }
  document.getElementById('character2').innerHTML = 'PLAYER 2: ' + characterNameList[enemySelectedNbr]
}, false);

document.addEventListener('keydown', function(event) {
    var listLength = characterList.getElementsByClassName('charaterImage').length - 1;
    if (event.key === 'd') {
      playerSelectedNbr++;
      if(enemySelectedNbr === playerSelectedNbr) playerSelectedNbr++
      if (playerSelected) {
        removeClass(playerSelected, 'characterChosenP1');
        next = characterList.getElementsByClassName('charaterImage')[playerSelectedNbr];
        if (typeof next !== undefined && playerSelectedNbr <= listLength) {
          playerSelected = next;
        } else {
          if (enemySelectedNbr === 0) {
            playerSelectedNbr =1
            playerSelected = characterList.getElementsByClassName('charaterImage')[1]; }
          else {playerSelectedNbr = 0;
          playerSelected = characterList.getElementsByClassName('charaterImage')[0];}
        }
        addClass(playerSelected, 'characterChosenP1');
      }
  
    } else if (event.key === 'a') {
      if (playerSelected) {
        removeClass(playerSelected, 'characterChosenP1');
        playerSelectedNbr--;
        if(enemySelectedNbr === playerSelectedNbr) playerSelectedNbr--
        next = characterList.getElementsByClassName('charaterImage')[playerSelectedNbr];
        if (typeof next !== undefined && playerSelectedNbr >= 0) {
          playerSelected = next;
        } else {
            if(enemySelectedNbr === listLength){
            playerSelectedNbr = listLength-1;
            playerSelected = characterList.getElementsByClassName('charaterImage')[listLength-1];
            } else {
            playerSelectedNbr = listLength;
            playerSelected = characterList.getElementsByClassName('charaterImage')[listLength];
            }
        }
        addClass(playerSelected, 'characterChosenP1');
      }
    }
    document.getElementById('character1').innerHTML = 'PLAYER 1: ' + characterNameList[playerSelectedNbr]
  }, false);


//Funkcjonalność przycisków
document.getElementById('button').onclick = function() {buttonStart()}

function buttonStart() {
    const playerCharacter = playerSelectedNbr
    const enemyCharacter = enemySelectedNbr
    localStorage.setItem('playerCharacter', playerCharacter)
    localStorage.setItem('enemyCharacter', enemyCharacter)
    window.location.href='index.html';
}

function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};

function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
};

