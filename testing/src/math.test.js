const {
  calculateTotal,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  fibonacci,
} = require("./math.js");

describe("calculate", () => {
  it("kontrol", () => {
    expect(calculateTotal).toBeDefined();
  });
});
