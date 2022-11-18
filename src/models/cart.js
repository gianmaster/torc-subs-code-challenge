class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  get getTotals() {
    const totalPrice = this.products.reduce(
      (acc, product) => {
        acc["taxes"] += product.taxes;
        acc["total"] += product.totalPriceWithTaxes;
        return acc;
      },
      { total: 0, taxes: 0 }
    );
    return totalPrice;
  }
}

module.exports = { Cart };
