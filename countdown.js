
function countdown() {
  
  
  var ct = setInterval(function () {
    if(count == 0) {
      alert("GAME OVER");
      clearInterval(ct);
      count = 100;
      dots.innerHTML = 'YOU LOSE';
    }
    
    countDown.innerHTML = count;
    count--;
    return count;
  },1000);
  
  
  
}