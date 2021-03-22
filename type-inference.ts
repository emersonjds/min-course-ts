let message2 = 'Mensagem';

message2 = 2 // error of inference

// document window working with type inference
window.addEventListener('click', (e) => {
  console.log(e.target)
})