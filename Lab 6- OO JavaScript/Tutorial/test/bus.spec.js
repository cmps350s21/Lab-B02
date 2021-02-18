const {expect} = require('chai');
const Bus = require('../model/bus');

//test
describe('Testing the Bus class', ()=>{
    it('when horse power is <600' , ()=>{
        let bus = new Bus('Toyota', 550, 40);
        expect(bus.getInsurance()).equal(500)
    })

    it('when horse power is <1000' , ()=>{
        let bus = new Bus('Toyota', 800, 40);
        expect(bus.getInsurance()).equal(1000)
    })

    it('when horse power is >=1000' , ()=>{
        let bus = new Bus('Toyota', 1200, 40);
        expect(bus.getInsurance()).equal(2000)
    })
})
