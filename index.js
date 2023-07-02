
const result = document.getElementById("bmi_result");
const description = document.getElementById("bmi_decsription");
const BMIbutton = document.getElementById("bmi_button");

function showNumber() {
    var numHeight = parseInt(document.getElementById('bmi_height').value);
    document.getElementById("bmi_height-val").textContent = numHeight + " cm";
    var numWeight = parseInt(document.getElementById("bmi_weight").value);
    document.getElementById("bmi_weight-val").textContent = numWeight + " kg";
}

function calculateBMI() {
    var numHeight = document.getElementById('bmi_height').value;
    var numWeight = document.getElementById("bmi_weight").value;

    const numBMI = (numWeight / Math.pow((numHeight / 100), 2)).toFixed(2);
    result.textContent = `Your Body Mass Index (BMI) is: ${numBMI}`;
    if (numBMI > 35) {
        description.textContent = "Your result suggests you are obese";
        return description;
    }
    else if (numBMI < 17) {
        description.textContent = "Your result suggests you are underweight";
        return description;
    }
    else if (numBMI > 30) {
        description.textContent = "Your result suggests you are overweight";
        return description;
    }
    else {
        description.textContent = "Your result suggests you are a healthy weight";
        return description;
    }

}

BMIbutton.addEventListener('click', calculateBMI);