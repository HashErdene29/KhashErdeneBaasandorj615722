let cart = [

  ];

const addToCart = (req, res) => {
    try {
        const userId = req.body.userId; 
        const productId = req.body.id;
        const existingCartItem = cart.find(
          (cartItem) => cartItem.userId === userId && cartItem.id === productId
        );
    
        if (existingCartItem) {
          // If the user already has  product in their cart, increment the quantity
          existingCartItem.quantity++;
        } else {
          let temp = req.body;
          temp.quantity = 1;
          cart.push(temp);
        }
    
        res.status(200).json(cart);
      } catch (error) {
        console.error(error);
        res.status(500).send("Error adding product to cart");
      }
};


const updateCart = (req, res) => {
    try {

      const userId = req.body.userId;
        const productId = req.body.id;
        const newQuantity = req.body.quantity;
        let existingCartItem = cart.find(item => item.id === productId && item.userId === userId)
        let existingCartItemIndex = cart.findIndex(item => item.id === productId && item.userId === userId)


        if (existingCartItem) {
          existingCartItem.quantity = newQuantity;
          if(newQuantity === 0) {
            existingCartItem = {};
            cart[existingCartItemIndex] = {};
          }
          res.status(200).json(cart);
        } else {
          res.status(404).send("Cart item not found");
        }
      } catch (error) {
        console.error(error);
        res.status(500).send("Error updating cart");
      }
};

const getCartList = (req, res) => {
    try {
        const userId = req.params.userid;
        const cartList = cart.filter(
          (cartItem) => cartItem.userId === userId
        );
        res.status(200).json(cartList)
      } catch (error) {
        res.status(500).send("Error getting cart");
      }
};


const emptyCart = (req, res) => {
    try {
        const userId = req.params.userid;
        const filteredItems = cart.filter(item => item.userId !== userId);
        cart = filteredItems;
        res.status(200).json({
            data : "hello"
        })
      } catch (error) {
        res.status(500).send("Error getting cart");
      }
};


module.exports = { addToCart, updateCart, getCartList, emptyCart};
