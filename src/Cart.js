module.exports = class Cart {
  
    
    constructor (){
        this.items= [];
        this.totalPrice=0;
       
    }

    getCart=()=>{
        return this.items;
       }


    Additem =(item , quantity) => {
        console.log(item)
        //    this.items.push({...item, quantity})
        //    for( let i=0 ; i<this.items.length; i++){
            // console.log({i})
            // console.log({price: this.items[i].price * this.items[i].quantity})
           this.totalPrice += item.price * quantity;

        // }
        console.log(this.totalPrice)
        this.items.push({...item, quantity})
          return this.items;

    }

    itemQuantities=()=>{
       let itemQuantity=0;
       
       for( let i = 0 ; i<this.items.length; i++){
        itemQuantity +=this.items[i].quantity;
        // this.totalPrice += this.items[i].price * this.items[i].quantity;

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
    onsaleitem=()=>{


        const onSaleItems = this.items.filter(item => item.onSale);
        return onSaleItems;

    }



}
