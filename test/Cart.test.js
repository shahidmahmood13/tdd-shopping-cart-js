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
    it ('show the total no of item i have added',()=>{
        let assert = 8;
       const cart = new Cart();
       const item = new Item("iphone-13pro",80000, false);
       const item1 = new Item("iphone-x",60000, false);
       const item2 = new Item("water botel",120,true);
       const item3 = new Item("latop",50000, true);
        cart.Additem(item,4);
        cart.Additem(item1,2);
        cart.Additem(item2,1);
        cart.Additem(item3,1);
          
        let result = cart.itemQuantities();

        expect(result).toBe(assert);
         
    })


})