import chai from 'chai';
import {pockets, bed, table} from '../../public/prototype/task2.js';

const expect = chai.expect;

describe('Портотипное наследование', function(){
	it('pocket shoud extends by bed', function () {
		expect(pockets.pen).to.equal(3);
	});
	it('bed shoud extends by table', function () {
		expect(bed.glasses).to.equal(1);
	});
	it('table shoudnot extends by pocket', function () {
		expect(table.money).to.be.undefined;
	});

})