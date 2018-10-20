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
  var index = 0;

  body.addEventListener('keydown', function(e) {
    const key = e.key;
    if(e == codes[index]){
      if(index == codes.length - 1){
        alert('Hurray!');
      }else{
        index++;
      }
    }else{
      index = 0;
    }
  })
}
