const { Taxes } = require("./taxes");
const { roundDecimalToTheNearest05 } = require("../utils");

class Product {
  constructor({ quantity, name, type, unitPrice, imported }) {
    this.quantity = quantity;
    this.name = name;
    this.type = type;
    this.unitPrice = unitPrice;
    this.imported = imported;
  }

  get taxRate() {
    const salesTax = Taxes.getTaxesByType(this.type);
    const importDuty = this.imported ? Taxes.getImportDutyByType(this.type) : 0;
    return salesTax + importDuty;
  }

  get taxes() {
    if (this.taxRate <= 0) return 0;

    return (
      roundDecimalToTheNearest05(this.unitPrice * this.taxRate) * this.quantity
    );
  }

  get totalPriceWithTaxes() {
    const { quantity, unitPrice, taxes } = this;
    return quantity * unitPrice + taxes;
  }
}

module.exports = { Product };
