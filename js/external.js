var openModalBtn = document.getElementById('fille1');
var closeModalBtn = document.getElementsByClassName('close')[0];
var modal = document.getElementById('modal');
var modal2 = document.getElementById('modal');




document.getElementById('fille1').addEventListener('load', function () {
    // Le contenu de l'objet est chargé, 
    var objectContent = document.getElementById('fille1').contentDocument;


    var fille1 = objectContent.getElementById('Calque_2');
    fille1.addEventListener('click', function () {
        modal.style.display = 'block';
    });
})


document.getElementById('fille2').addEventListener('load', function () {
    var objectContent = document.getElementById('fille2').contentDocument;


    var fille2 = objectContent.getElementById('Calque_2');
    fille2.addEventListener('click', function () {
        modal2.style.display = 'block';
    });

})

// fille3

document.getElementById('fille3').addEventListener('load', function () {
    var objectContent = document.getElementById('fille3').contentDocument;

    var fille3 = objectContent.getElementById('Calque_2');
    fille3.addEventListener('click', function () {
        modal.style.display = 'block';
    });

});

// fille4

document.getElementById('fille4').addEventListener('load', function () {
    var objectContent = document.getElementById('fille4').contentDocument;

    var fille4 = objectContent.getElementById('Calque_2');
    fille4.addEventListener('click', function () {
        modal.style.display = 'block';
    });

})


// game1
var score = 0;
var scoreDisplay = document.getElementById('score');
var moles = document.getElementsByClassName('mole');
var currentMole = null;
var moleTimeout;
var modalVisible = false;
var playButton = document.getElementById('playButton');
var pauseButton = document.getElementById('pauseButton');
var isPaused = false;
var textScore = document.getElementById('text_saka');
var vitesse = document.getElementById('text_vitesse');
var interval = 1500;
vitesse.textContent = 'Hafainganam-pandeha : ' + (interval / 1000) + ' segondra';

function randomMole() {
  var randomIndex = Math.floor(Math.random() * moles.length);
  return moles[randomIndex];
}

function showMole() {
  if (currentMole) {
    currentMole.classList.remove('active');
    if (!currentMole.classList.contains('caught') && !modalVisible && !isPaused) {
      score--;
      scoreDisplay.textContent = score;
      if (score < 0) {
        textScore.textContent = 'Lasako ny sakanao !!!';
        scoreDisplay.style.backgroundColor = 'red';
      } else if (score == 0) {
        textScore.textContent = 'TSY MANANA SAKA IANAO !!';
      } else {
        textScore.textContent = 'SAKA AZONAO';
        scoreDisplay.style.backgroundColor = 'green';
      }
    }
    currentMole.classList.remove('caught');
  }

  currentMole = randomMole();
  currentMole.classList.add('active');

  moleTimeout = setTimeout(function() {
    currentMole.classList.remove('active');
    showMole();
  }, interval);
}

function increaseScore() {
  score++;
  scoreDisplay.textContent = score;
  currentMole.classList.add('caught');
  if (score < 0) {
    textScore.textContent = 'Lasako ny sakanao !!!';
    scoreDisplay.style.backgroundColor = 'red';
  } else if (score == 0) {
    textScore.textContent = 'TSY MANANA SAKA IANAO !!';
  } else {
    textScore.textContent = 'SAKA AZONAO';
    scoreDisplay.style.backgroundColor = 'green';
  }

  if (score > 10 && score % 10 === 0) {
    interval -= 200;
    vitesse.textContent = 'Hafainganam-pandeha : ' + (interval / 1000) + ' segondra';
  }
}

function startGame() {
  score = 0;
  scoreDisplay.textContent = score;
  clearTimeout(moleTimeout);
  interval = 1500;
  showMole();
}

function pauseGame() {
  isPaused = true;
  clearTimeout(moleTimeout);
}

function resumeGame() {
  isPaused = false;
  showMole();
}

playButton.addEventListener('click', function() {
  startGame();
});

pauseButton.addEventListener('click', function() {
  if (isPaused) {
    resumeGame();
    pauseButton.textContent = 'Haka aina kely';
  } else {
    pauseGame();
    pauseButton.textContent = 'Hiverina hilalao';
  }
});

for (var i = 0; i < moles.length; i++) {
  moles[i].addEventListener('click', function() {
    if (this === currentMole) {
      clearTimeout(moleTimeout);
      this.classList.remove('active');
      increaseScore();
      showMole();
    }
  });
}



closeModalBtn.addEventListener('click', function (e) {
    modal.style.display = 'none';
    score = 0;
    pauseGame();
});


