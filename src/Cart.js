module.exports = class Cart {
  

    constructor (){
        this.items= [];
        this.totalPrice=0;
    }

    getCart=()=>{
        return this.items;
       }


    Additem =(item , quantity) => {
        
           this.items.push({...item, quantity})
           this.totalPrice += this.items[0].price*quantity;
 b       
          return this.items;

    }
   
    


}
