const shopControllers = {
    shop: (req, res) => res.send('Route for Shop View'), 
    shopItemId: (req, res) => res.send('Route for find and retrieve a product from an ID'),
    shopItemIdAdd: (req, res) => res.send('Route for add the current item to the shop cart'),
    shopCartGet: (req, res) => res.send('Route for Cart View'),
    shopCartPost: (req, res) => res.send('Route for got to checkout page')
 }

 module.exports = shopControllers;