let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];

   // Which candies cost less than $4.00?
   let lessThanFourDollars = 
   products.filter(p  => p.price < 4);
 
   for (let i = 0; i < lessThanFourDollars.length; i++) {
    console.log(" The candies less that $4.00 is "+ lessThanFourDollars[i].product);
   }
   

   // Which candies has M&M its name?

   let FindMandM = 
   products.filter(p  => p.price == 2.89);
 
   for (let i = 0; i < FindMandM.length; i++) {
    console.log("                            ")
    console.log(" The candies with M&M in it is "+ FindMandM[i].product);
   }

   // Do we carry "Swedish Fish"

     let swedishFish = products.find((arrayValue) => arrayValue.product == "Swedish Fish");
    if (swedishFish != undefined) {
        console.log("       ")
     console.log(" Yes we do carry  "+ swedishFish.product);
    }
    else {
     console.log("No Swedish Fish");
    }
