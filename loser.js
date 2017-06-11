function loser() {
  userCash = userCash - num;
  input.value = '';
   if(userCash <= 0) {
        dots.innerHTML = "GAME OVER";
      } else {
        dots.innerHTML = 'YOU LOSE';
      }
}