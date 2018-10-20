const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  const body = document.querySelector('body');
  let index = 0;

  body.addEventListener('keydown', keydownHandler(event));
}

function keydownHandler(e) {
  const key = e.key;
  if(e === codes[index]){
    index++;
    if(index === codes.length){
      alert('Hurray!');
      index = 0;
    }
  }else{
    index = 0;
  }
}
