const { ProductType } = require("../models/productType");

const productValidator = (params) => {
  const { name, quantity, unitPrice, type } = params;

  if (!name || name === "" || typeof name !== "string") {
    throw new Error(
      "Error: [Product.name] is required, must be a string and cannot be empty"
    );
  }

  if (!quantity || typeof quantity !== "number" || quantity <= 0) {
    throw new Error(
      "Error: [Product.quantity] is required and must be a number greater than 0"
    );
  }

  if (!unitPrice || typeof unitPrice !== "number" || unitPrice <= 0) {
    throw new Error(
      "Error: [Product.unitPrice] is required and must be a number greater than 0"
    );
  }

  if (!type || typeof type !== "string" || type === "") {
    throw new Error(
      "Error: [Product.type] is required, must be a string and cannot be empty"
    );
  }

  if (!Object.values(ProductType.types).includes(type)) {
    throw new Error(
      "Error: [Product.type] must be one of the following: " +
        Object.values(ProductType.types).join(", ")
    );
  }
};

module.exports = {
  productValidator,
};
