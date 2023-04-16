// const { expect } = require('chai');
const { expect } = require("@jest/globals");

const Cart= require('../src/Cart.js');
const Item = require('../src/Item.js');
const { assert } = require("chai");
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
    // 4th test case
    it("return itemize list",()=>{
        let assert = `power-bank price 5000  qunity 1 iphone-x price 60000  qunity 1 `
         const cart = new Cart();
         const item = new Item("power-bank",5000, true);
         const item1 = new Item("iphone-x",60000, false);
       cart.Additem(item,1);
       cart.Additem(item1,1);
      
       
       let result = cart.itemizedList();

       expect(result).toBe(assert);
    
    })
    it('Toatal price of item',()=>{
      let assert = 100000;
      const cart = new Cart();
      const item = new Item("power-bank",500, true);
      const item1 = new Item("iphone-x",50000, false);
    cart.Additem(item,1);
    cart.Additem(item1,4);

    let result = cart.totalPrice;
   expect(result).toBe(assert)
        
    })
    it('list of item thats are on sale ',()=>{
        let assert =  [{name: "power-bank", onSale: true, price: 500, quantity: 1}];
       const cart = new Cart();
       const item = new Item("power-bank",500, true);
      const item1 = new Item("iphone-x",50000, false);
      cart.Additem(item,1);
      cart.Additem(item1,4)
          let result = cart.onsaleitem();
          expect(result).toStrictEqual(assert);
        

    })

    



})