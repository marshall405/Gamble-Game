playAgainButton.addEventListener('click', function () {
  if(userCash <= 0) {
    userCash = 100;
    cash.innerHTML = '$ ' + userCash;
    dots.innerHTML = 'PLACE BET';
    frame = setInterval(start,500);
  }
});

resetButton.addEventListener('click', function () {
  userCash = 100;
  cash.innerHTML = '$ ' + userCash;
  dots.innerHTML = 'PLACE BET';
});