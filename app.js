var input = document.getElementById('input');
var cash = document.getElementById('cash');
var resetButton = document.getElementById('reset');
var playAgainButton = document.getElementById('playAgain');
var dots = document.getElementById('dots');
var countDown = document.getElementById('countdown');

var userCash = 100; //starting cash
var userNum; //used to store random number
var compNum; //used to store random number
var num; // used to store input number
var i;
var count = 100;
var countDownBegin = true;
cash.innerHTML = '$ ' + userCash;
dots.innerHTML = 'PLACE BET';

luckystreak = 0;

var frame = setInterval(start,500);
input.addEventListener('keydown', function(e) {
  clearInterval(frame);
  dots.style.opacity = 1;
  dots.innerHTML = '';
  if (e.key === 'Enter') {
    if(count === 100){
    countdown();
    }
    
    dots.innerHTML = '...';
    num = parseFloat(input.value);
    
    if(num <= userCash && !isNaN(num)) {
      
      userNum = Math.floor(Math.random() * 10000) + 1;
      compNum = Math.floor(Math.random() * 100) + 1;
      
      //Below compares the two numbers and decides which one is greater.
        if(userNum > compNum) { //user wins
          luckystreak++;
          winner();
        } else if (userNum === compNum) { //its a draw
          draw();
        } else { // user loses
          loser();
          luckystreak = 0;
        }
      
      cash.innerHTML = '$ ' + userCash;
      
    } else { // if the user input is NaN
      input.value = '';
    }
    
  }
});
