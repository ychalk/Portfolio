const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const map = document.querySelectorAll('.map')
let currentlySelected = 0;

prevButton.disabled=true;

prevButton.addEventListener('click',function(){
  
  map[currentlySelected].classList.remove("active")
  currentlySelected--
  map[currentlySelected].classList.add("active");
  nextButton.disabled=false;

  if(currentlySelected===0){
      prevButton.disabled=true;
  }

});

nextButton.addEventListener('click',function(){
  map[currentlySelected].classList.remove("active")
  currentlySelected++
  map[currentlySelected].classList.add("active");
  prevButton.disabled = false;

  if(map.length === currentlySelected+1){

      nextButton.disabled=true;
  }

});