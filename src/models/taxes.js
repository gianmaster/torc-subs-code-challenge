const { ProductType } = require("./productType");

class Taxes {
  static getTaxesByType(type) {
    const taxes = {
      [ProductType.types.FOOD]: 0.0,
      [ProductType.types.BOOKS]: 0.0,
      [ProductType.types.MEDICAL]: 0.0,
      [ProductType.types.OTHER]: 0.1,
    };
    return taxes[type];
  }

  static getImportDutyByType(type) {
    const importDuty = {
      [ProductType.types.FOOD]: 0.05,
      [ProductType.types.BOOKS]: 0.05,
      [ProductType.types.MEDICAL]: 0.05,
      [ProductType.types.OTHER]: 0.05,
    };
    return importDuty[type];
  }
}

module.exports = { Taxes };
