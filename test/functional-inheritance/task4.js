import chai from 'chai';
import Fridge from '../../public/functional-inheritance';

const expect = chai.expect;

describe('Task#4 Расширить холодильник', function() {
	var fridge = new Fridge(500);
	let food = null;
	let anotherFood = null;

	beforeEach(function() {
		fridge.enable();
		food = [
		{
			'title' : 'carrot',
			calories: 50
		},
		{
			'title' : 'cheese',
			calories: 150
		},
		{
			'title' : 'butter',
			calories: 250
		}];
		anotherFood = {
			'title' : 'cucumber',
			calories: 30
		};
		food.push(anotherFood);
	});
	afterEach(function() {
	    fridge.clean()
	  });

	it('foods removed successfully', function() {
		food.forEach(function(item){
			fridge.addFood(item);
		})
		fridge.removeFood(anotherFood);
		expect(fridge.getFood()).to.have.lengthOf(3);
	});
	it('remove function returns null if it attempts to remove an item that is not present', function() {
		food.forEach(function(item){
			fridge.addFood(item);
		})
		let trash = {
			'title': 'apple',
			calories: 45
		};
		fridge.removeFood(trash);
		expect(fridge.getFood()).to.have.lengthOf(4);
	});
	it('method filter shoud returns array of items which satisfy callback condition', function() {
		food.forEach(function(item){
			fridge.addFood(item);
		})
		let diet =  fridge.filter(function(item){
			return item.calories < 100
		})
		expect(diet).to.have.lengthOf(2);
	});
})