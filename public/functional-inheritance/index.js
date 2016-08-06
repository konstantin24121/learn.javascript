function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power){
	Machine.apply(this, arguments);
	var food = [];

	this.getCopacity = function(){
		return this._power / 100;
	}

	this.addFood = function(){
		if(!this._enabled)
			throw new Error('Нельзя ложить еду в выключенный холодильник')
		for (var i = arguments.length - 1; i >= 0; i--) {
			if( food.length >= this.getCopacity() )
				throw new Error('Холодильник переполнен')
			food.push(arguments[i])
		}
		return this;
	}

	this.getFood = function(){
		return food.slice();
	}
}

export default Fridge;