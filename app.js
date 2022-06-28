////////////////////////////////
// Global Variables Here
let playerX = false
let playerO = true

const box = document.querySelectorAll('.box')

let playerOscore = 0
let playerXscore = 0
let tieScore = 0
let endGame = false
////////////////////////////////
// Functions For Game Logic Here

//Delcares end of game
function win() {
  document.querySelector('.endOfGame').style.display = 'block'
}

//displays draw message
function tie() {
  document.querySelector('.tieGame').style.display = 'block'
}

//logScore
function logScore() {
  document.querySelector('.p1score').innerText = playerOscore
}

//log score for playerX
function logScoreX() {
  document.querySelector('.p2score').innerText = playerXscore
}

//log Score for player O
function logScoreTie() {
  document.querySelector('.drawScore').innerText = tieScore
}

//Replay prompt confirm
function replay() {
  let answer = confirm('Play Again?')
  if (answer == true) {
    clearBoard()
    document.querySelector('.endOfGame').style.display = 'none'
    document.querySelector('.tieGame').style.display = 'none'
    endGame = false
  }
}

// Clears board after game
function clearBoard() {
  for (let i = 0; i < box.length; i++) {
    box[i].innerText = ''
  }
}

//Delcares tie game
function tieGame() {
  boxCt = 0
  let retVal = false

  for (let i = 0; i < box.length; i++) {
    if (box[i].innerText != '') {
      boxCt++
    }
  }
  if (boxCt >= 9) {
    tieScore++
    logScoreTie()
    setTimeout(replay, 500)
    tie()
    retVal = true
  }
  console.log('boxct ' + boxCt)
  console.log('retVal = ' + retVal)
  return retVal
  //count boxes, if all filled with no winner = TIE game
}

//Win variation for all win possibilities
function checkForWinner() {
  let retVal = false

  if (box[0].innerText != '') {
    if (
      (box[0].innerText == box[1].innerText &&
        box[0].innerText == box[2].innerText) ||
      (box[0].innerText == box[3].innerText &&
        box[0].innerText == box[6].innerText) ||
      (box[0].innerText == box[4].innerText &&
        box[0].innerText == box[8].innerText)
    ) {
      win()
      setTimeout(replay, 500)
      retVal = true
    }
  }
  if (!retVal && box[1].innerText != '') {
    if (
      box[1].innerText == box[4].innerText &&
      box[1].innerText == box[7].innerText
    ) {
      win()
      setTimeout(replay, 500)
      retVal = true
    }
  }
  if (!retVal && box[2].innerText != '') {
    if (
      box[2].innerText == box[5].innerText &&
      box[2].innerText == box[8].innerText
    ) {
      win()
      setTimeout(replay, 500)
      retVal = true
    }
  }
  if (!retVal && box[3].innerText != '') {
    if (
      box[3].innerText == box[4].innerText &&
      box[3].innerText == box[5].innerText
    ) {
      win()
      setTimeout(replay, 500)
      retVal = true
    }
  }
  if (!retVal && box[6].innerText != '') {
    if (
      (box[6].innerText == box[7].innerText &&
        box[6].innerText == box[8].innerText) ||
      (box[6].innerText == box[4].innerText &&
        box[6].innerText == box[2].innerText)
    ) {
      win()
      setTimeout(replay, 500)
      retVal = true
    }
  }
  console.log('retVal = ' + retVal)
  return retVal
}

////////////////////////////////

// Event Listeners Here
// --- defining player O or X -----
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', function () {
    if (
      box[i].innerText != 'O' &&
      box[i].innerText != 'X' &&
      endGame == false
    ) {
      // if  innertext is not '0 and is not 'X"
      // or innerText is ''

      if (playerO == true) {
        document.querySelectorAll('.box')[i].innerText = 'O'
        playerX = true
        playerO = false
        let isWinner = checkForWinner()
        if (isWinner == true) {
          playerOscore++
          endGame = true
          console.log('playero ' + playerOscore)
          console.log('playerx ' + playerXscore)
          logScore()
        } else {
          let isTie = tieGame()
          if (isTie == true) {
            console.log('is tie' + isTie)
            endGame = true
          }
        }
      } else {
        document.querySelectorAll('.box')[i].innerText = 'X'
        playerX = false
        playerO = true
        let isWinner = checkForWinner()
        if (isWinner == true) {
          playerXscore++
          endGame = true
          console.log('playerx ' + playerXscore)
          console.log('playero ' + playerOscore)
          logScoreX()
        } else {
          let isTie = tieGame()
          if (isTie == true) {
            console.log('is tie' + isTie)
            endGame = true
          }
        }
      }
    }

    //logs player score
    console.log('playerx = ' + playerX)
    console.log('player0 = ' + playerO)
  })
}

//test loop for winning combo

// 9-> Divs or Buttons. We can style them w Height and Width + Border
// addEventListener -> Click-> to all of our Squares
//square.innerText = X or O
//turns = 0
// turns +=1
//conditonial - If Else or Ternary
// turns % 2 = 0 -> even number -> X
//turns % 2 = 1 -> Odd Number - O
//
