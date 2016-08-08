import chai from 'chai';
import Fridge from '../../public/functional-inheritance';

const expect = chai.expect;

describe('Task#5 redefine disable', function() {
	it('return error if we try to disable fidge when he contains food', function () {
		var fridge = new Fridge(200);
		fridge.enable();
		fridge.addFood({'title' :'carrot'});
		expect(fridge.disable.bind(fridge)).to.throw(Error);
	});
	it('successfully disabled when empty', function () {
		var fridge = new Fridge(200);
		fridge.enable();
		let product = {'title' :'carrot'};
		fridge.addFood(product);
		fridge.removeFood(product);
		expect(fridge.disable()).to.be.true;
	});
})