
function countdown() {
  
  if(countDownBegin) {
  var ct = setInterval(function () {
    if(count == 0) {
      alert("GAME OVER");
      clearInterval(ct);
      count = 100;
      dots.innerHTML = 'YOU LOSE';
      countDownBegin = true;
    }
    
    countDown.innerHTML = count;
    count--;
    return count;
  },1000);
  
  }
  
}