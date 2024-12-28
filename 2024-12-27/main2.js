//8kyu - Calculate BMI//

function bmi(weight, height) {
    let calcBmi = weight / (height ** 2);
    if(calcBmi <= 18.5) {
      return 'Underweight';
    } else if(calcBmi <= 25.0) {
      return 'Normal';
    } else if(calcBmi <= 30.0) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
}