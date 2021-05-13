// Player 1

// Player 1 - Name submit
document.querySelector('#player1NameSubmit').addEventListener('click', submitPlayer1Name);

function submitPlayer1Name(){
  
  player1Name = document.querySelector('#player1Name').value;
  if (player1Name !== '') {
    // assign value
    document.querySelector('#Player-1').innerText = player1Name;
    // hide current form reveal next form and remove alerts
    document.querySelector('.player-1-name').classList.add("hide");
    document.querySelector('.player-1-weight').classList.remove("hide");
    if (document.querySelector('.alert')) { 
      document.querySelector('.alert').remove();
    }
  } else {
    if (document.querySelector('.alert')) { 
      // remove existing alerts to avoid duplication
      document.querySelector('.alert').remove();
    } else {
      // add alert
    document.querySelector('.player-1-name').insertAdjacentHTML("beforeend", '<span class="alert">Name is required.</span>');
    }
  }
}

// Player 1 - Weight submit
document.querySelector('#player1WeightSubmit').addEventListener('click', submitPlayer1Weight);

function submitPlayer1Weight(){
  player1Weight = parseFloat(document.querySelector('#player1Weight').value);

  if ( !isNaN(player1Weight) ) {
    // hide current form reveal next form and remove alerts
    document.querySelector('.player-1-weight').classList.add("hide");
    document.querySelector('.player-1-height').classList.remove("hide");
    if (document.querySelector('.alert')) { 
      document.querySelector('.alert').remove();
    }
  } else {
    if (document.querySelector('.alert')) { 
      // remove existing alerts to avoid duplication
      document.querySelector('.alert').remove();
    } else {
      // add alert
    document.querySelector('.player-1-weight').insertAdjacentHTML("beforeend", '<span class="alert">Only numbers, please.</span>');
    }
  }
}

// Player 1 - Height submit
document.querySelector('#player1HeightSubmit').addEventListener('click', submitPlayer1Height);

function submitPlayer1Height(){
  player1Height = parseFloat(document.querySelector('#player1Height').value);

  if (!isNaN(player1Height)) {
    player1BMI = player1Weight / (player1Height * player1Height);
    document.querySelector('.player1BMI').innerText = `${player1Name}, your BMI is ${player1BMI.toFixed(2)}`;
    // Cell height adjust, hide form, remove alert, reveal next form
    document.querySelector('.player-1').style.height = "85px";
    document.querySelector('.player-1-height').classList.add("hide");
    document.querySelector('.player-2-name').classList.remove("hide");
    if (document.querySelector('.alert')) { 
      document.querySelector('.alert').remove();
    }

  } else {
    if (document.querySelector('.alert')) { 
      // remove existing alerts to avoid duplication
      document.querySelector('.alert').remove();
    } else {
      // add alert
    document.querySelector('.player-1-height').insertAdjacentHTML("beforeend", '<span class="alert">Only numbers, please.</span>');
    }
  }
}

// Player 2

// Player 2 - Name submit
document.querySelector('#player2NameSubmit').addEventListener('click', submitPlayer2Name);

function submitPlayer2Name(){
  
  player2Name = document.querySelector('#player2Name').value;
  if (player2Name !== '') {
    // assign value
    document.querySelector('#Player-2').innerText = player2Name;
    // hide current form reveal next form and remove alerts
    document.querySelector('.player-2-name').classList.add("hide");
    document.querySelector('.player-2-weight').classList.remove("hide");
    if (document.querySelector('.alert')) { 
      document.querySelector('.alert').remove();
    }
  } else {
    if (document.querySelector('.alert')) { 
      // remove existing alerts to avoid duplication
      document.querySelector('.alert').remove();
    } else {
      // add alert
    document.querySelector('.player-2-name').insertAdjacentHTML("beforeend", '<span class="alert">Name is required.</span>');
    }
  }
}

// Player 2 - Weight submit
document.querySelector('#player2WeightSubmit').addEventListener('click', submitPlayer2Weight);

function submitPlayer2Weight(){
  player2Weight = parseFloat(document.querySelector('#player2Weight').value);

  if ( !isNaN(player2Weight) ) {
    // hide current form reveal next form and remove alerts
    document.querySelector('.player-2-weight').classList.add("hide");
    document.querySelector('.player-2-height').classList.remove("hide");
    if (document.querySelector('.alert')) { 
      document.querySelector('.alert').remove();
    }
  } else {
    if (document.querySelector('.alert')) { 
      // remove existing alerts to avoid duplication
      document.querySelector('.alert').remove();
    } else {
      // add alert
    document.querySelector('.player-2-weight').insertAdjacentHTML("beforeend", '<span class="alert">Only numbers, please.</span>');
    }
  }
}

// Player 2 - Height submit
document.querySelector('#player2HeightSubmit').addEventListener('click', submitPlayer2Height);

function submitPlayer2Height(){
  player2Height = parseFloat(document.querySelector('#player2Height').value);

  if (!isNaN(player2Height)) {
    player2BMI = player2Weight / (player2Height * player2Height);
    document.querySelector('.player2BMI').innerText = `${player2Name}, your BMI is ${player2BMI.toFixed(2)}`;
    // Cell height adjust, hide form, remove alert
    document.querySelector('.player-2').style.height = "85px";
    document.querySelector('.player-2-height').classList.add("hide");
    if (document.querySelector('.alert')) { 
      document.querySelector('.alert').remove();
    }

    // Compare BMI
    document.querySelector('.compareBMI').classList.remove("hide");
    if (player1BMI < player2BMI) {
      document.querySelector('.compareBMI').innerText = `${player1Name}, your BMI is lower than ${player2Name}'s`;
    } else {
      document.querySelector('.compareBMI').innerText = `${player2Name}, your BMI is lower than ${player1Name}'s`;
    }

  } else {
    if (document.querySelector('.alert')) { 
      // remove existing alerts to avoid duplication
      document.querySelector('.alert').remove();
    } else {
      // add alert
    document.querySelector('.player-2-height').insertAdjacentHTML("beforeend", '<span class="alert">Only numbers, please.</span>');
    }
  }
}

// Old PLayer 2 
// document.querySelector('#player2NameSubmit').addEventListener('click', submitPlayer2Name);

// function submitPlayer2Name(){
//   player2Name = document.querySelector('#player2Name').value;
//   document.querySelector('#Player-2').innerText = player2Name;
//   document.querySelector('.player-2-name').classList.add("hide");
//   document.querySelector('.player-2-weight').classList.remove("hide");
// }

// document.querySelector('#player2WeightSubmit').addEventListener('click', submitPlayer2Weight);

// function submitPlayer2Weight(){
//   player2Weight = document.querySelector('#player2Weight').value;
//   document.querySelector('.player-2-weight').classList.add("hide");
//   document.querySelector('.player-2-height').classList.remove("hide");
// }

// document.querySelector('#player2HeightSubmit').addEventListener('click', submitPlayer2Height);

// function submitPlayer2Height(){
//   player2Height = document.querySelector('#player2Height').value;
//   document.querySelector('.player-2-height').classList.add("hide");
//   player2BMI = player2Weight / (player2Height * player2Height);
//   document.querySelector('.player2BMI').innerText = `${player2Name}, your BMI is ${player2BMI.toFixed(2)}`;
//   // Cell height adjust and reveal next form
//   document.querySelector('.player-2').style.height = "85px";

//   document.querySelector('.compareBMI').classList.remove("hide");

//   if (player1BMI < player2BMI) {
//     document.querySelector('.compareBMI').innerText = `${player1Name}, your BMI is lower than ${player2Name}'s`;
//   } else {
//     document.querySelector('.compareBMI').innerText = `${player2Name}, your BMI is lower than ${player1Name}'s`;
//   }
// }
