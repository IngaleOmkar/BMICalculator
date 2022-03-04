// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  var bmi = calculateBMI();
  if(Number.isNaN(bmi)){
    alert("Please enter valid values for the input fields!");
    return;
  } 
  var category = "";
  if(bmi < 16){
    category = "Severely Thinness";
  } else if (bmi < 17){
    category = "Moderate Thinness";
  } else if (bmi < 18.5){
    category = "Mild Thinness";
  } else if (bmi < 25){
    category = "Normal";
  } else if (bmi < 30){
    category = "Overweight";
  } else if (bmi < 35){
    category = "Obese Class I";
  } else if (bmi < 40){
    category = "Obese Class II";
  } else {
    category = "Obese Class III";
  }
  document.getElementById("BMIValue").innerHTML = "Your BMI Value: " + bmi + "<br><br> Your category: " + category;
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function calculateBMI(){
    var height = document.getElementById("height").value/100;
    var weight = document.getElementById("weight").value;
    var bmi = weight / (height * height);
    return bmi;
}