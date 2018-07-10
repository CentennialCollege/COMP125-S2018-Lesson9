// core module - IIFE
(function() {
  // App variables
  let RollButton;
  let Result;
  let minRange;
  let maxRange;
  let minRangeValue;
  let maxRangeValue;
  let min;
  let max;

  function RandomRange(min, max) {
    let randomNumber;

    randomNumber = Math.floor(Math.random() * max) + min;

    return randomNumber;
  }


  /**
   * This function is used for Intialization
   */
  function Start() {
    console.log(
      `%c App Initializing...`,
      "font-weight: bold; font-size: 20px;"
    );

    RollButton = document.getElementById("RollButton");
    Result = document.getElementById("Result");
    minRange = document.getElementById("minRange");
    maxRange = document.getElementById("maxRange");
    minRangeValue = document.getElementById("minRangeValue");
    maxRangeValue = document.getElementById("maxRangeValue");
    min = 1;
    max = 6;

    Main();
  }

  /**
   * This function is the where the main functionality for our
   * web app is happening
   */
  function Main() {
    console.log(`%c App Started...`, "font-weight: bold; font-size: 20px;");
    let Roll;

    Result.innerHTML = "0";

    minRangeValue.innerHTML = min;
    maxRangeValue.innerHTML = max;

    RollButton.addEventListener("click", function(){
      Roll = RandomRange(min, max);
      Result.innerHTML = Roll;
      Result.style.fontSize = "24px";
      console.log(`%c Generated Number: ${Roll}`,"font-weight: bold; font-size: 16px; color: green;");
    });

    minRange.addEventListener("input", function(){
      minRangeValue.innerHTML = minRange.value;
      min = minRange.value;
    });

    maxRange.addEventListener("input", function(){
      maxRangeValue.innerHTML = maxRange.value;
      max = maxRange.value;
    });

    
  }

  window.addEventListener("load", Start);
})();
