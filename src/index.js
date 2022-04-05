// const let

// var val1 = "var";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = 'let変数';
// console.log(val2);

// val2 = 'let変数を上書き';
// console.log(val2);

// let val2 = 'let変数を再宣言';

// const val3 = 'const変数';
// console.log(val3);

// // val3 = 'const変数を上書き';

// // const val3 = 'const変数を再宣言';

// const val4 = {
//   name: 'name',
//   age: 28
// };

// // console.log(val4);
// val4.name = 'new name';
// val4.address = 'address';
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");

// console.log(val5);

// テンプレート文字列
const name = "tak";
const age = 36;

// [私の名前はtakです。年齢は36です。]

// 従来
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);
