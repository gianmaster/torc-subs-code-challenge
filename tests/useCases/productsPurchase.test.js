const { productsPurchase } = require("../../src/useCases/productsPurchase");

const mockTestCase1 = [
  { name: "book", quantity: 2, unitPrice: 12.49, imported: false },
  { name: "music CD", quantity: 1, unitPrice: 14.99, imported: false },
  { name: "chocolate bar", quantity: 1, unitPrice: 0.85, imported: false },
];

const mockTestCase2 = [
  { name: "box of chocolates", quantity: 1, unitPrice: 10.0, imported: true },
  { name: "bottle of perfume", quantity: 1, unitPrice: 47.5, imported: true },
];

const mockTestCase3 = [
  { name: "bottle of perfume", quantity: 1, unitPrice: 27.99, imported: true },
  { name: "bottle of perfume", quantity: 1, unitPrice: 18.99, imported: false },
  {
    name: "packet of headache pills",
    quantity: 1,
    unitPrice: 9.75,
    imported: false,
  },
  {
    name: "box of chocolates",
    quantity: 3,
    unitPrice: 11.25,
    imported: true,
  },
];

describe("productsPurchase", () => {
  it("should fail with wrong parameters", () => {
    const otherProducts = ["wrong data"];

    expect(() => productsPurchase(otherProducts)).toThrow(
      "[productPurchase]: Something went wrong"
    );
  });

  it("should return a receipt", () => {
    const otherProducts = [
      {
        name: "other item",
        quantity: 5,
        unitPrice: 17.56,
        imported: false,
      },
    ];
    const receipt = productsPurchase(otherProducts);
    const output = [
      "5 other item: 96.80",
      "Sales Taxes: 9.00",
      "Total: 96.80",
    ].join("\n");
    expect(receipt).toEqual(output);
  });

  it("should return the correct output for the first case", () => {
    const output = [
      "2 book: 24.98",
      "1 music CD: 16.49",
      "1 chocolate bar: 0.85",
      "Sales Taxes: 1.50",
      "Total: 42.32",
    ].join("\n");
    expect(productsPurchase(mockTestCase1)).toBe(output);
  });

  it("should return the correct output for the second case", () => {
    const output = [
      "1 imported box of chocolates: 10.50",
      "1 imported bottle of perfume: 54.65",
      "Sales Taxes: 7.65",
      "Total: 65.15",
    ].join("\n");
    expect(productsPurchase(mockTestCase2)).toBe(output);
  });

  it("should return the correct output for the third case", () => {
    const output = [
      "1 imported bottle of perfume: 32.19",
      "1 bottle of perfume: 20.89",
      "1 packet of headache pills: 9.75",
      "3 imported box of chocolates: 35.55",
      "Sales Taxes: 7.90",
      "Total: 98.38",
    ].join("\n");
    expect(productsPurchase(mockTestCase3)).toBe(output);
  });
});
