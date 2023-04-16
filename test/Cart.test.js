// const { expect } = require('chai');
const { expect } = require("@jest/globals");

const Cart= require('../src/Cart.js');
const Item = require('../src/Item.js');
// const expect = require('chai').expect;

describe('Cart', () => {
    it('should initialize as empty', () => {
    const cart = new Cart();
    let assert= [];
    let result = cart.getCart();
    expect(result).toEqual(assert);
    
    })

    it('add item and get total price',()=>{
        //  Setup
        const cart = new Cart();
        const item = new Item("hoverboard",2500, true);
        let quantity = 2;
        // act
        cart.Additem(item,quantity);
        let assert = item.price* quantity; 
        let result= cart.totalPrice;
        // assert  
        expect(result).toBe(assert);

    })



})