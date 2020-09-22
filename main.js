var myButton = document.querySelector('.button');

myButton.addEventListener('click', function(){
  changeBackground()}
  );

var changeColor = document.body.style.backgroundColor;

function changeBackground(){
  // if color is not red change to red
  
  if(document.body.style.backgroundColor === "red"){
    document.body.style.backgroundColor = "green"
  } else if(document.body.style.backgroundColor === "green"){
    document.body.style.backgroundColor = "red"
  }
  if(!document.body.style.backgroundColor){
    console.log("Background is red.")
    document.body.style.backgroundColor = "red"
  }
  console.log(document.body.style.backgroundColor)
  
  
}