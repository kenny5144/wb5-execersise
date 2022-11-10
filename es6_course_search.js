//page 1-22 exercise.
let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
   ];   cart.sort(function(a, b) {
    if (a.item < b.item) return -1;
    else if (a.item == b.item) return 0;
    else return 1;
 });   
 function insideCart(itemElement)     {return itemElement.item + " " }   
 let ourShoppingCart = cart.map(insideCart);   
 let cartElements = ourShoppingCart.length;
 //    for (let i=0; i < cartElements; i ++ ){
 //     console.log(ourShoppingCart[i]);
 //    }
 function displayCartItems(itemElement){
    console.log(itemElement);
 //}
 ourShoppingCart.forEach(displayCartItems);
 //////////////////////////NUMBER 2function totalPriceOfProducts(itemTotal, priceValue) {
 return itemTotal + priceValue.price;
 }
 let sumTotal = cart.reduce(totalPriceOfProducts, 0);
 console.log("Total value of " + sumTotal);