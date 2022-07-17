export class PayObject {
  constructor(category, name, price, isA) {
    this.category = category;
    this.name = name;
    this.price = price;
    this.isA = isA;
  }

  test() {
    console.log(this.category);
    console.log(this.price);
  }
}
