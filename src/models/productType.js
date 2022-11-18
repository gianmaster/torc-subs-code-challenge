class ProductType {
  static get types() {
    return {
      FOOD: "food",
      BOOKS: "books",
      MEDICAL: "medical",
      OTHER: "other",
    };
  }
}

module.exports = { ProductType };
