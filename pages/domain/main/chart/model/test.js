import { PayObject } from "./pay_object.js";
const list = [];

// list.push(payObj);
// list.push(payObj2);

console.log(list);

const 작성 = (category, name, price, isA) => {
  list.push(new PayObject(category, name, price, isA));
  console.log(list);
  console.log(JSON.stringify(list));
};

작성("식비", "빅맥버거세트1개", 7800, false);
작성("식비2", "버거세트개2개", 12000, true);
