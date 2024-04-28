function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  //let bmi = weight/(height**2);
  let bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1)


 

  if(bmi < 18.5){
    alert(`BMI : ${bmi}  Underweight`);
  }else if( bmi <= 24.9){
    alert(`BMI : ${bmi}  Healthy weight`);
  }else if( bmi <= 29.9){
    alert(`BMI : ${bmi}  Overweight`);
  }else if(  bmi >= 30){
    alert(`BMI : ${bmi}  Above Obesity`);
  }else{
    alert(`please Enter the empty slot's`);
  }

  if(age < 24 && bmi >= 19 &&  bmi <=24 ){
    alert(`Healty`)
  }else if(age < 34 &&  bmi >=20 && bmi <=25 ){
    alert(`Healty`)
  }else if(age < 44 && bmi >= 21 && bmi <=26 ){
    alert(`Healty`)
  }else if(age < 54 && bmi >= 22  && bmi <=27 ){
    alert(`Healty`)
  }else if(age < 64 && bmi >= 23  && bmi <=28 ){
    alert(`Healty`)
  }else if(age >= 65 && bmi >= 24 && bmi <=29 ){
    alert(`Healty`)
  }else{
    alert(`Not Healty`)
  }
  


}
