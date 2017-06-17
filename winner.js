function winner() {
  if(luckystreak >= 3) {
    
    userCash = userCash + (num * 1.5);
    dots.innerHTML = 'Lucky Streak ' + luckystreak + ' in a row! <br /> YOU WIN $' + input.value * 1.5;
    input.value = '';
  } else {
    userCash = userCash + num;
    dots.innerHTML = 'YOU WIN $' + input.value;
    input.value = '';
  }
}