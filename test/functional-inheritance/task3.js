import chai from 'chai';
import Fridge from '../../public/functional-inheritance';

const expect = chai.expect;

describe('Task#3 Унаследовать холодильник', function() {
	it('должна быть ошибка если пытаемся добавить еду в отклченный холодильник', function() {
		var fridge = new Fridge(200);
		expect(fridge.addFood.bind(fridge, 'котлета')).to.throw(Error);
	});

	it('выкидывает ошибку если пытаемся положить в холодильник больше еды чем он выносит', function() {
		var fridge = new Fridge(500);
		fridge.enable();
		fridge.addFood("котлета");
		fridge.addFood("сок", "зелень");
		expect(fridge.addFood.bind(fridge, "варенье", "пирог", "торт")).to.throw(Error);
	});

	it('массив продуктов модифицировать извне нельзя', function () {
		var fridge = new Fridge(500);
		let product = ['cheese', 'carrot'];
		fridge.enable();
		for (var i = product.length - 1; i >= 0; i--) {
			fridge.addFood(product[i]);
		}
		var fridgeFood = fridge.getFood();
		fridgeFood.push("something");

		expect(fridge.getFood()).to.have.members(product);
		expect(fridge.getFood()).to.have.not.members(["something"]);
	});

	it('продукты успешно добавляются в холодильник', function () {
		let fridge = new Fridge(500);
		fridge.enable();
		let product = 'cheese';
		fridge.addFood(product);

		expect(fridge.getFood()).to.eql([product]);
	});
});
