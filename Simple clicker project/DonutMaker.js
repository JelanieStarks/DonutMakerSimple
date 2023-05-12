
// Open a new file in your text editor.
// Add the following code to define the DonutMaker class:
// Define DonutMaker class
class DonutMaker {
  // Set initial variable values
  constructor() {
    this.donutCount = 0;
    this.autoClickerCount = 0;
    this.autoClickerCost = 10;
    this.donutMultiplierCount = 0;
    this.donutMultiplierCost = 50;
    this.autoClickerInterval = null;
    this.clickInterval = null;

    // Set up event listeners for buttons
    const donutButton = document.querySelector("#donut-button");
    const autoClickerButton = document.querySelector("#auto-clicker-button");
    const donutMultiplierButton = document.querySelector("#donut-multiplier-button");
    const donutCountElement = document.querySelector("#donut-count");
    const autoClickerCountElement = document.querySelector("#auto-clicker-count");
    const autoClickerCostElement = document.querySelector("#auto-clicker-cost");
    const donutMultiplierCountElement = document.querySelector("#donut-multiplier-count");
    const donutMultiplierCostElement = document.querySelector("#donut-multiplier-cost");
    const resetButton = document.querySelector("#reset-button");

    //Add event listener
    function resetPage() {
      location.reload();
    }
    resetButton.addEventListener("click", resetPage);


    //Add event listener to the donut button to increase count with each click
    donutButton.addEventListener("mousedown", () => {
      this.clickInterval = setInterval(() => {
        this.addDonut();
        donutCountElement.innerText = this.donutCount;
      }, 66.67);
    });

    //End donut click on mouseup event
    donutButton.addEventListener("mouseup", () => {
      clearInterval(this.clickInterval);
    });

    //Add event listener to the auto-clicker button to purchase auto-clickers
    autoClickerButton.addEventListener("click", () => {
      if (this.donutCount >= this.autoClickerCost) {
        this.buyAutoClicker();
        this.donutCount -= this.autoClickerCost;
        autoClickerCountElement.innerText = this.autoClickerCount;
        
        // Increase the cost of the next auto-clicker
        this.autoClickerCost = Math.round(this.autoClickerCost * 1.1);
        autoClickerCostElement.innerText = this.autoClickerCost;
        
        donutCountElement.innerText = this.donutCount;
      }
    });

    //Add event listener to the donut multiplier button to purchase multipliers
    donutMultiplierButton.addEventListener("click", () => {
      if (this.donutCount >= this.donutMultiplierCost) {
        this.buyDonutMultiplier();
        this.donutCount -= this.donutMultiplierCost;
        donutMultiplierCountElement.innerText = this.donutMultiplierCount;
        
        // Increase the cost of the next donut multiplier
        this.donutMultiplierCost *= 2;
        donutMultiplierCostElement.innerText = this.donutMultiplierCost;
        
        donutCountElement.innerText = this.donutCount;
      }
    });
  }

  //Add function for adding donuts
  addDonut() {  
    this.donutCount += this.donutMultiplierCount + 1;
  }

  //Add function for buying auto-clickers
  buyAutoClicker() {
    this.autoClickerCount++;
    this.autoClickerInterval = setInterval(() => {
      this.addDonut();
      donutCountElement.innerText = this.donutCount;
    }, 1000);
  }

  //Add function for buying donut multipliers
  buyDonutMultiplier() {
    this.donutMultiplierCount++;
  }


}


//Create new DonutMaker object and begin game
const game = new DonutMaker(); 

// Save the file with a .js extension.

