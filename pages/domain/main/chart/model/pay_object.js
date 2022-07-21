export class PayObject {
  test = 0; // ES 최신문법 테스트
  test2 = 1; // ES 최신문법 테스트

  constructor(category, name, price, isA) {
    this.category = category;
    this.name = name;
    this.price = price;
    this.isA = isA;
  }

  test() {
    console.log(this.category);
    console.log(this.price);
    console.log(this.test);
    console.log(this.test2);
  }
}
