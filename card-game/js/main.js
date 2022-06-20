
// making a card game called war. It's a game between two players (for now). When two cards are drawn, the player with the higher card value wins and collects both cards. If both players have cards with the same value, it means war. During war, 4 cards are flipped consecutively, the value of the fourth card determines who wins and carries all 4 cards. The game is won when one person holds all 52 cards.

// PUSH: Use localStorage so that the same deck of card is used until the end of a game.

// first, lets fetch the deck of cards.

let cardId = ''

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    cardId = data.deck_id
  })
  .catch(err => {
          console.log(`error ${err}`)
      });

document.querySelector('button').addEventListener('click', getCards)

function getCards () {
  fetch(`https://deckofcardsapi.com/api/deck/${cardId}/draw/?count=2`)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    document.querySelector('#player1').src = data.cards[0].image
    document.querySelector('#player2').src = data.cards[1].image
    
    let Player1Val = convertToNum(data.cards[0].value)
    let Player2Val = convertToNum(data.cards[1].value)
    
    if(Player1Val > Player2Val) {
      document.querySelector('h3').innerText = 'Player1 wins'
      document.querySelector('h3').style.color = 'blue'
    } else if (Player1Val < Player2Val) {
      document.querySelector('h3').innerText = 'Player2 wins'
      document.querySelector('h3').style.color = 'green'
    } else if (Player1Val === Player2Val){
      document.querySelector('h3').innerText = 'THIS MEANS WARRRRR'
      document.querySelector('h3').style.color = 'red'
      thisMeansWar()
    }
    
    
    
  })
  .catch(err => {
    console.log(`error ${err}`)
  });
  
  // let winner = whoWins()
}



function convertToNum (val) {
  
  if(val === 'ACE') {
    return '14'
  }else if (val === 'KING') {
    return 13
  } else if (val === 'QUEEN') {
    return 12
  }else if(val === 'JACK') {
    return 11
  } else {
    return Number(val)
  }
}


function thisMeansWar () {
  fetch(`https://deckofcardsapi.com/api/deck/${cardId}/draw/?count=8`)
  .then(res => res.json())
  .then(data => {
    console.log(data)

    // document.querySelector('#remains').innerText = data.remaining

    //  let warPlayer1 = convertToNum(data.cards[0].value)
    // let warPlayer2 = convertToNum(data.cards[1].value)
    
    // if(warPlayer1 > warPlayer2) {
    //   document.querySelector('#winner').innerText = 'Player1 wins'
    //   document.querySelector('#winner').style.color = 'blue'
    // } else if (warPlayer1 < warPlayer2) {
    //   document.querySelector('#winner').innerText = 'Player2 wins'
    //   document.querySelector('#winner').style.color = 'green'
    // } else if (warPlayer1 === warPlayer2){
    //   document.querySelector('#winner').innerText = 'THIS MEANS WARRRRR AGAIN'
    //   document.querySelector('#winner').style.color = 'red'
    // }

    document.querySelector('#remains').innerText = data.remaining

    
    document.querySelector('#warrior1').src = data.cards[0].image
    document.querySelector('#warrior2').src = data.cards[1].image
    document.querySelector('#warrior3').src = data.cards[2].image
    document.querySelector('#warrior4').src = data.cards[3].image
    document.querySelector('#warrior5').src = data.cards[4].image
    document.querySelector('#warrior6').src = data.cards[5].image
    document.querySelector('#warrior7').src = data.cards[6].image
    document.querySelector('#warrior8').src = data.cards[7].image
    
    
     let warPlayer1 = convertToNum(data.cards[0].value)
    let warPlayer2 = convertToNum(data.cards[1].value)

    let player1FirstDraw = convertToNum(data.cards[0].value)
    let player2FirstDraw = convertToNum(data.cards[1].value)
    let player1SecondDraw = convertToNum(data.cards[2].value)
    let player2SecondDraw = convertToNum(data.cards[3].value)
    let player1ThirdDraw = convertToNum(data.cards[4].value)
    let player2ThirdDraw = convertToNum(data.cards[5].value)
    let player1LastDraw = convertToNum(data.cards[6].value)
    let player2LastDraw = convertToNum(data.cards[7].value)
    
    
    if(player1FirstDraw > player2FirstDraw && player1FirstDraw < player2FirstDraw && player1FirstDraw === player2FirstDraw) {
      document.querySelector('#winner').innerText = 'turn 1 is done'
      document.querySelector('#winner').style.color = 'blue'
    } else if (player1SecondDraw < player2SecondDraw && player1SecondDraw > player2SecondDraw && player1SecondDraw === player2SecondDraw) {
      document.querySelector('#winner').innerText = 'Turn 2 is done'
      document.querySelector('#winner').style.color = 'green'
    } else if(player1ThirdDraw < player2ThirdDraw && player1ThirdDraw > player2ThirdDraw && player1ThirdDraw === player2ThirdDraw){
      document.querySelector('#winner').innerText = 'Turn 3 is done'
    } else if (player1LastDraw > player2LastDraw){
      document.querySelector('#winner').innerText = 'Player 1 wins!'
    } else if (player1LastDraw < player2LastDraw) {
      document.querySelector('#winner').innerText = 'Player 2 wins!'
    } else {
      document.querySelector('#winner').innerText = 'THIS MEANS WARRRRR AGAIN'
      document.querySelector('#winner').style.color = 'red'
    }


  })
  .catch(err => {
          console.log(`error ${err}`)
      });
}




















/*
//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
  const url = 'https://pokeapi.co/api/v2/pokemon/'+choice
  // const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
*/
