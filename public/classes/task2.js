
function CoffeeMachine(power) {
  this._power = power;
  this.waterAmount = 0;
  this.WATER_HEAT_CAPACITY = 4200;
  this._getTimeToBoil = function(){
    return this.waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
  }
}

CoffeeMachine.prototype.run = function(){
  setTimeout(function() {
      alert( 'Кофе готов!' );
    }, this._getTimeToBoil());
}

CoffeeMachine.prototype.setWaterAmount = function(amount){
  this.waterAmount = amount;
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();