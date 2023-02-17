let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

const orderList =(arr) => {
let total = 0 ;
let price = 0 ;
let title = `QTY                    ITEM            TOTAL`;
console.log(title);

arr.forEach(e =>{
    const { itemName: name, quantity: number, unitPrice: price } = e;
  title = `${name}              ${number}               ${number*price}`;
  total += number * price ;
  console.log(title);
})
console.log(`total : ${total}`);
}
orderList(order);