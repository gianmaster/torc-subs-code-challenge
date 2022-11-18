/**
 * @param {number} number
 * @returns {number}
 */
const roundDecimalToTheNearest05 = (number) => {
  if (typeof number !== "number") {
    throw new Error("roundDecimalToTheNearest05 must receive a number");
  }
  const roundedNumber = Math.ceil(number * 20) / 20;
  return roundedNumber;
};

module.exports = {
  roundDecimalToTheNearest05,
};
