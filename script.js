
const background = document.querySelector('.container');
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const white = document.getElementById('white');

red.addEventListener('click',()=>{
  background.classList.add('red');
  background.classList.remove('green');
  background.classList.remove('blue');
  background.classList.remove('white');
});

green.addEventListener('click',()=>{
  background.classList.add('green');
  background.classList.remove('red');
  background.classList.remove('blue');
  background.classList.remove('white');
});

blue.addEventListener('click',()=>{
  background.classList.add('blue');
  background.classList.remove('red');
  background.classList.remove('green');
  background.classList.remove('white');
});

white.addEventListener('click',()=>{
  background.classList.add('white');
  background.classList.remove('red');
  background.classList.remove('green');
  background.classList.remove('blue');
});





/*
const background = document.querySelector('.container');
const button = document.querySelectorAll('.botonsillo');

button.forEach((boton)=>{boton.addEventListener('click',(botonsillo)=>{
  let id = botonsillo.target.id;
  let color = background.classList.item(1);
  background.classList.remove(color);
  background.classList.add(id);
  
})
})
*/