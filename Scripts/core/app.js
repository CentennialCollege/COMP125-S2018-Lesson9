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
    let maxminusmin = (max - min) + 1;

    randomNumber = Math.floor(Math.random() * maxminusmin) + min;

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

    Result.textContent = "0";

    minRangeValue.textContent = min;
    maxRangeValue.textContent = max;

    RollButton.addEventListener("click", function(){
      Roll = RandomRange(min, max);
      Result.textContent = Roll;
      Result.style.fontSize = "24px";
      //console.log(`%c Generated Number: ${Roll}`,"font-weight: bold; font-size: 16px; color: green;");
    });

    minRange.addEventListener("input", function(){
      
      min = parseInt(minRange.value); 
      max = parseInt(maxRange.value);
      if(min > max) {
        minRange.value = maxRange.value;
        min = max;
      }
      minRangeValue.textContent = minRange.value;
     
    });

    maxRange.addEventListener("input", function(){
      min = parseInt(minRange.value); 
      max = parseInt(maxRange.value);
      if(max < min) {
        maxRange.value = minRange.value;
        max = min;
      }
      maxRangeValue.textContent = maxRange.value;
    });

    
  }

  window.addEventListener("load", Start);
})();
