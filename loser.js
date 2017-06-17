function loser() {
  userCash = userCash - num;
  
  if(userCash <= 0) {
        dots.innerHTML = "GAME OVER";
      } else {
        dots.innerHTML = 'YOU LOSE $' + input.value;
      }
  input.value = '';
   
}