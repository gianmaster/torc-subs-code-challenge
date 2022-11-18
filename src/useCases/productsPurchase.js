const { Cart } = require("../models/cart");
const { Product } = require("../models/product");
const { productValidator } = require("../validators/productValidator");
const data = require("../data/db.json");

const getProductType = (productName) => {
  const product = data.categorizedProducts.find(
    (product) => product.name === productName
  );
  return product ? product.type : "other";
};

const showProductOutputLine = (product) => {
  const { quantity, name, totalPriceWithTaxes, imported } = product;
  const middleText = imported ? " imported " : " ";
  return `${quantity}${middleText}${name}: ${totalPriceWithTaxes.toFixed(2)}`;
};

const productsPurchase = (products) => {
  try {
    const productsWithTypes = products.map((product) => {
      const type = getProductType(product.name);
      return { ...product, type };
    });
    const cart = new Cart();

    productsWithTypes.forEach((product) => {
      productValidator(product);
      const productObj = new Product(product);
      cart.addProduct(productObj);
    });

    let output = "";
    cart.products.forEach((product) => {
      output += showProductOutputLine(product) + "\n";
    });

    const { taxes, total } = cart.getTotals;
    output += `Sales Taxes: ${taxes.toFixed(2)}\n`;
    output += `Total: ${total.toFixed(2)}`;

    return output;
  } catch (error) {
    // console.error(error.message);
    throw new Error("[productPurchase]: Something went wrong");
  }
};

module.exports = {
  productsPurchase,
};
