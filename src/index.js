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
// const name = "tak";
// const age = 36;

// // [私の名前はtakです。年齢は36です。]

// // 従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// 分割代入
// const myProfile = {
//   name: 'tak',
//   age: 36
// }

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`
// console.log(message2) ;

// const myProfile = ["tak", 36];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// // デフォルト値
// const sayHello = (name = 'guest') => console.log(`こんにちは！${name}さん`);
// sayHello();

// スプレッド構文　...

// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// console.log("---------------");
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// // const [num1, num2, num3, num4, num5] = arr2;
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20]
// const arr5 = [30, 40]

// const arr6 = [...arr4];
// console.log(arr4);
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// mapやfilterを使った配列の処理
// const nameArr = ["tanaka", "yamada", "tak"];
// for (let i = 0; i < nameArr.length; i++ ) {
//   console.log(nameArr[i]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, i) => console.log(`${i + 1}番目は${name}です。。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "tak") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

// 三項演算子
// ある条件　? 条件がtrueのとき: 条件がfalseのとき
// const val1 = 1 > 0 ? `trueです`: `falseです`;
// console.log(val1);

// const num = "1300";
// // console.log(num.toLocaleString());

// const formatedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formatedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えてるう' : '許容範囲内です';
// }
// console.log(checkSum(50, 0));

// 論理演算子の本当の意味 && ||
// && または...?
// || かつ...?

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2がtrue")
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrue")
// }

// || は左側がfalseなら右側を返す。左側がtrueなら左側を返す。
// javascriptはnullはfalseとして判定される
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側をかえす。
const num2 = null;
const fee2 = num2 && "設定されています";
console.log(fee2);
