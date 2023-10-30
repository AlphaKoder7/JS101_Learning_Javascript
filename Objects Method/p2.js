const inputNames = ["Rice", "Dal", "Salt"];
const inputQuantities = [2, 3, 1];
const inputPrices = [60, 50, 20];

const ProductsCart = {
  data: [],

  initialize(names, quantities, prices) {
    this.data = names.map((name, index) => ({
      name,
      quantity: quantities[index],
      price: prices[index],
    }));
  },

  total() {
    return this.data.reduce((totalValue, item) => {
      return totalValue + item.quantity * item.price;
    }, 0);
  },
};

ProductsCart.initialize(inputNames, inputQuantities, inputPrices);

const totalPrice = ProductsCart.total();
console.log(totalPrice); 
