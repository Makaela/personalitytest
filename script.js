
function myrandom(){
var input1= document.getElementById("choice1").checked;
var input2= document.getElementById("choice2").checked;
var input3= document.getElementById("choice3").checked;

if(input1 == true){
  document.getElementById("test1").innerHTML = "Congrats, you are best fitted to be a graphic designer!"
}
else if(input2 == true){
  document.getElementById("test1").innerHTML = "Congrats, you are best fitted to be a software developer!"
}
else if(input3 == true){
  document.getElementById("test1").innerHTML = "Congrats, you are best fitted to be a project manager!"
}
}
