document.getElementById("calcForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const age = Number(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const height = Number(document.getElementById("height").value);
    const weight = Number(document.getElementById("weight").value);
    const activity = Number(document.getElementById("activity").value);
    const goal = document.getElementById("goal").value;

    // BMI
    const heightM = height / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    let bmiStatus = "";
    if (bmi < 18.5) bmiStatus = "Underweight";
    else if (bmi < 25) bmiStatus = "Normal";
    else if (bmi < 30) bmiStatus = "Overweight";
    else bmiStatus = "Obese";

    // BMR
    let bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // TDEE
    let calories = bmr * activity;

    // Goal adjustment
    if (goal === "lose") calories -= 500;
    if (goal === "gain") calories += 300;

    calories = Math.round(calories);

    // Macros
    const protein = Math.round((calories * 0.3) / 4);
    const carbs = Math.round((calories * 0.45) / 4);
    const fat = Math.round((calories * 0.25) / 9);

    // Water intake
    const water = (weight * 0.033).toFixed(2);

  document.getElementById("result").innerHTML = `
    <h3>Your Results</h3>
    <p><strong>BMI:</strong> ${bmi} (${bmiStatus})</p>
    <p><strong>Daily Calories:</strong> ${calories} kcal</p>
    <p><strong>Protein:</strong> ${protein} g</p>
    <p><strong>Carbs:</strong> ${carbs} g</p>
    <p><strong>Fat:</strong> ${fat} g</p>
    <p><strong>Water Intake:</strong> ${water} L/day</p>

    
`;


});



