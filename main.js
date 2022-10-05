const numbersDiv = document.querySelector('.numbers');
const draw = document.querySelector('#draw');
const reset = document.querySelector('#reset');

const sixNumbers = [];

function getRandomColor(){
  return "#"+Math.floor(Math.random()*16277721).toString(16)
}

function paintNumber(number){
  const eachNumDiv = document.createElement('div');
  eachNumDiv.classList.add('eachnum');
  eachNumDiv.textContent = number;
  eachNumDiv.style.backgroundColor = getRandomColor();
  numbersDiv.appendChild(eachNumDiv);
}

draw.addEventListener('click',()=>{
  while(sixNumbers.length < 6){
    let num = Math.floor(Math.random()*45)+ 1;
    if(sixNumbers.indexOf(num) == -1){
      sixNumbers.push(num);
      console.log(num);
      paintNumber(num);
    }
    
  }
})

reset.addEventListener('click', () =>{
  sixNumbers.splice(0,6);
  numbersDiv.innerHTML="";
})