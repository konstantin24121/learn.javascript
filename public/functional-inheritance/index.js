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
	var parentDisable = this.disable;
	this.getCopacity = function(){
		return this._power / 100;
	}

	this.clean = function(){
		food = [];
	}

	this.disable = function(){
		if(food.length > 0)
			throw new Error('You can\'t turn off frige with food')
		parentDisable.call(this);
		return true;
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

	this.filter = function(callback){
		var arr = [];
		food.forEach(function(item){
			if ( callback(item) ) {
				arr.push(item)
			}
		})
		return arr;
	}

	this.removeFood = function(){
		for (var i = arguments.length - 1; i >= 0; i--) {
			var index = food.indexOf(arguments[i]);
			if( index !== -1 ){
				food.splice(index, 1)
			}
		}
	}

	this.getFood = function(){
		return food.slice();
	}
}

export default Fridge;