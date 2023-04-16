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
           for( let i=0 ; i<this.items.length; i++){

           this.totalPrice += this.items[i].price*quantity;

        }
          return this.items;

    }

    itemQuantities=()=>{
       let itemQuantity=0;
       
       for( let i = 0 ; i<this.items.length; i++){
        itemQuantity +=this.items[i].quantity;

       }
      
       return itemQuantity;

    }

    itemizedList=()=>{
  let itemlist ='';
   this.items.forEach(item => {
   itemlist += `${item.name} price ${item.price}  qunity ${item.quantity} `   
   });
    return itemlist;

    }



}
