  const score = JSON.parse(localStorage.getItem('score')) || { wins: 0, loses: 0, ties: 0 };

  // Set initial emoji map for display
  const emojis = { rock: '✊', paper: '✋', scissors: '✌️' };

  updateScoreDisplay();

  function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === computerMove) {
      result = 'TIE GAME';
    } else if (
      (playerMove === 'rock' && computerMove === 'scissors') ||
      (playerMove === 'paper' && computerMove === 'rock') ||
      (playerMove === 'scissors' && computerMove === 'paper')
    ) {
      result = 'YOU WIN';
      score.wins++;
    } else {
      result = 'YOU LOSE';
      score.loses++;
    }

    if (result === 'TIE GAME') score.ties++;

    localStorage.setItem('score', JSON.stringify(score));
    updateScoreDisplay();

    const resEl = document.querySelector('.js-result');
    resEl.innerHTML = result;
    resEl.className = 'result-text js-result pop'; // Trigger animation
    
    // Remove animation class after it finishes so it can re-trigger
    setTimeout(() => resEl.classList.remove('pop'), 400);

    document.querySelector('.js-moves').innerHTML = 
      `${emojis[playerMove]} Player vs Computer ${emojis[computerMove]}`;
  }

  function updateScoreDisplay() {
    document.querySelector('.js-wins').innerText = score.wins;
    document.querySelector('.js-loses').innerText = score.loses;
    document.querySelector('.js-ties').innerText = score.ties;
  }

  function resetScore() {
    score.wins = 0; score.loses = 0; score.ties = 0;
    localStorage.removeItem('score');
    updateScoreDisplay();
    document.querySelector('.js-result').innerHTML = '';
    document.querySelector('.js-moves').innerHTML = 'Score Reset';
  }

  function pickComputerMove() {
    const rand = Math.random();
    if (rand < 1/3) return 'rock';
    if (rand < 2/3) return 'paper';
    return 'scissors';
  }
