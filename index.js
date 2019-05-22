let calculate = document.getElementById("calculate")
calculate.addEventListener("click", () => {
  let userWeight = document.getElementById("user-weight").value;
  let planets = document.getElementById("planets");
  let weightResult = document.getElementById("weight-result");
  if (userWeight != "") {
    //parseFloat(userWeight.value);}
    let weightToTransform = parseFloat(userWeight)
    let finalWeight = 0
    console.log(weightToTransform)
    if (planets.value == "mercurio") {
      finalWeight = (weightToTransform * 3.70) / 9.8
    }
    else if (planets.value == "venus") {
      finalWeight = (weightToTransform * 8.87) / 9.8
    }
    else if (planets.value == "tierra") {
      finalWeight = (weightToTransform * 9.8) / 9.8
    }
    else if (planets.value == "marte") {
      finalWeight = (weightToTransform * 3.71) / 9.8
    }
    else if (planets.value == "jupiter") {
      finalWeight = (weightToTransform * 23.12) / 9.8
    }
    else if (planets.value == "saturno") {
      finalWeight = (weightToTransform * 8.96) / 9.8
    }
    else if (planets.value == "urano") {
      finalWeight = (weightToTransform * 3.71) / 9.8
    }
    else if (planets.value == "neptuno") {
      finalWeight = (weightToTransform * 11) / 9.8
    }
    else if (planets.value == "pluton") {
      finalWeight = (weightToTransform * 0.81) / 9.8
    }
    else {
      finalWeight = weightToTransform
    }
    weightResult.innerHTML = finalWeight.toFixed(1)
  }
})