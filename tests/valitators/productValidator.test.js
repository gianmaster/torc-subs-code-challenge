const { productValidator } = require("../../src/validators/productValidator");

describe("productValidator", () => {
  it("should throw an error if name is missing", () => {
    const params = {
      quantity: 1,
      unitPrice: 12.49,
      type: "food",
    };
    expect(() => productValidator(params)).toThrow(
      "Error: [Product.name] is required, must be a string and cannot be empty"
    );
  });
  it("should throw an error if name is not a string", () => {
    const params = {
      name: 1,
      quantity: 1,
      unitPrice: 12.49,
      type: "food",
    };
    expect(() => productValidator(params)).toThrow(
      "Error: [Product.name] is required, must be a string and cannot be empty"
    );
  });
  it("should throw an error if name is empty", () => {
    const params = {
      name: "",
      quantity: 1,
      unitPrice: 12.49,
      type: "food",
    };
    expect(() => productValidator(params)).toThrow(
      "Error: [Product.name] is required, must be a string and cannot be empty"
    );
  });
  it("should throw an error if quantity is missing", () => {
    const params = {
      name: "book",
      unitPrice: 12.49,
      type: "food",
    };
    expect(() => productValidator(params)).toThrow(
      "Error: [Product.quantity] is required and must be a number greater than 0"
    );
  });

  it("should throw an error if quantity is not a number", () => {
    const params = {
      name: "book",
      quantity: "1",
      unitPrice: 12.49,
      type: "food",
    };
    expect(() => productValidator(params)).toThrow(
      "Error: [Product.quantity] is required and must be a number greater than 0"
    );
  });

  it("should throw an error if quantity is less than 0", () => {
    const params = {
      name: "book",
      quantity: -1,
      unitPrice: 12.49,
      type: "food",
    };
    expect(() => productValidator(params)).toThrow(
      "Error: [Product.quantity] is required and must be a number greater than 0"
    );
  });

  it("should throw an error if unitPrice is missing", () => {
    const params = {
      name: "book",
      quantity: 1,
      type: "food",
    };
    expect(() => productValidator(params)).toThrow(
      "Error: [Product.unitPrice] is required and must be a number greater than 0"
    );
  });

  it("should throw an error if unitPrice is not a number", () => {
    const params = {
      name: "book",
      quantity: 1,
      unitPrice: "12.49",
      type: "food",
    };
    expect(() => productValidator(params)).toThrow(
      "Error: [Product.unitPrice] is required and must be a number greater than 0"
    );
  });

  it("should throw an error if unitPrice is less than 0", () => {
    const params = {
      name: "book",
      quantity: 1,
      unitPrice: -1,
      type: "food",
    };
    expect(() => productValidator(params)).toThrow(
      "Error: [Product.unitPrice] is required and must be a number greater than 0"
    );
  });

  it("should throw an error if type is missing", () => {
    const params = {
      name: "book",
      quantity: 1,
      unitPrice: 12.49,
    };
    expect(() => productValidator(params)).toThrow(
      "Error: [Product.type] is required, must be a string and cannot be empty"
    );
  });

  it("should throw an error if type is not valid", () => {
    const params = {
      name: "book",
      quantity: 1,
      unitPrice: 12.49,
      type: "unknown",
    };
    expect(() => productValidator(params)).toThrow(
      "Error: [Product.type] must be one of the following: food, books, medical, other"
    );
  });
});
