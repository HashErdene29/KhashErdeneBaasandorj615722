let products = [
  {
    id: 1,
    title: "Node JS",
    price: 9.99,
    image: "https://cdn.freebiesupply.com/logos/thumbs/2x/nodejs-1-logo.png",
    stock: 8,
  },
  {
    id: 2,
    title: "React JS",
    price: 19.99,
    image: "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png",
    stock: 5,
  },
  {
    id: 3,
    title: "Angular",
    price: 29.99,
    image: "https://pluralsight2.imgix.net/paths/images/angular-14a0f6532f.png",
    stock: 13,
  }]

const getProductList = (req, res) => {
  try {
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving product list");
  }
};

const updateProduct = (req, res) => {
  try {
    let data = req.body.data;

    data.forEach(element => {
      let existingCartItem = products.findIndex(item => item.id === element.id)
      console.log(existingCartItem)
      if (existingCartItem > -1) {
        if(products[existingCartItem].stock >= element.stock - element.quantity && products[existingCartItem].stock > 0) {
          products[existingCartItem].stock = element.stock - element.quantity;
        }
      }
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).send("Error updating cart");
  }
};

module.exports = { getProductList, updateProduct};
