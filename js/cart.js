let cart={
    items: [],
    totalPrice: 0,
    count:0, 
    getTotalPrice: () =>{
        return cart.totalPrice
    },
    add:(name,price,count=1)=>{
        let obj={
            name,
            price,
            count
        };
        cart.items.push(obj);
        cart.calculateItemPrice();
        cart.increaseCount(count);
    },
    increaseCount:(i)=>{
        cart.count+i;
    },
    calculateItemPrice:()=>{
        cart.totalPrice=cart.items.map(e=> e.price*e.count).reduce((pref,next)=> pref+next)
    },
    clear:()=>{
        return cart={
            items:[],
            totalPrice: 0,
            count:0
        }
    },
    print:()=>{
        console.log(JSON.stringify(cart['items']))
        console.log(cart.getTotalPrice())
    }
}

cart.add('Мясо', 100, 2);
cart.add('Макароны', 50, 2);
cart.add('Пакет', 10, 1);
cart.print()
cart.clear()



