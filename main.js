// var val1 = "var変数";
// console.log(val1);
// var val1 = "var変数";

// let val2 = "let";

// const val4 = {
//   name: "aaa",
//   age:10
// }
// val4.name = "bbb";
// val4.age = 20;
// val4.address = "hiroshima";
// console.log(val4);

// const val5 = ["dog","cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// const myProfile = {
//   name: "aaa",
//   age:  20
// };
// const massege = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(massege);

// const { name,age } = myProfile;
// const massege2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(massege2);
// const func1 = (str) =>  str;
// console.log(func1("aaa"));

// const func3 = (num1,num2) =>  num1 + num2;
// console.log(func3(2,3));

// const myProfile = ["aaa", 20];
// const massege = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(massege);
// const [ name,age ] = myProfile;
// const massege2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(massege2);

// const sayHello = (name = "gesut") => console.log(`こんにちは${name}さん`);
// sayHello("aaaa");
// sayHello();

// const myProfile = {
  //   age:  20
  // };
  // const { name = 'bbb',age = 40 } = myProfile;
  // const massege2 = `私の名前は${name}です。年齢は${age}です。`;
  // console.log(massege2);
  
  // const name = 'aaa';
  // const age = 10;
  // const myProfile = {
    //   name,
    //   age
    // };
    // console.log(myProfile);
    
    // const arr1 = [1,2];
    // console.log(arr1);
    // console.log(...arr1);
    // const func3 = (num1,num2) =>  num1 + num2;
    // console.log(func3(...arr1));

    // const arry2 = [1,2,3,4,5];
    // const [num1,num2, ...arry3] = arry2;
    // console.log(num1);
    // console.log(num2);
    // console.log(arry3);
    
    // const arry4 = [1,2,3,4,5];
    // const arry5 = [6,7];
    
    // const arry6 = [...arry4];
    // console.log(arry6);
    // const arry7 = [...arry4,...arry5];
    // console.log(arry7);
    
    const nameArry = ['aaa','bbb','ccc'];
    // for (let index = 0; index < nameArry.length; index++ ){
      //   console.log(nameArry[index]);
      // }
      
      // nameArry.map((name,index) => console.log(`${index}${name}`));
      
      
      // const nameArry2 = nameArry.map((name)=>{
        //   return name;
        // });
        
        // const numArry = [1,2,3,4,5];
        // const newNumArry = numArry.filter((num) =>{
        //   if(num % 2 === 1){
        //     return num
        //   }
        // });
        // const newNumArry = numArry.filter((num) => num % 2 === 1 );
// const newNameArry = nameArry.map((name) => {
//   if(name === 'aaa'){
//     return name;
//   }else{
//     return `${name}さん`
//   }
// })
// const newNameArry = nameArry.map((name) => {

//     return name==='aaa' ? `${name}`:`${name}さん`;
  
// })
// console.log(newNameArry);

// const val1 = 1>0 ? 'true':'false';
// console.log(val1);

// const num = 'aaa';
// console.log(typeof num === 'number' ? num.toLocaleString():'数値を入力してください');

const cheakSum = (num1,num2) => {
  return num1 + num2 < 100 ? '100ika':'100ijyou';
}

console.log(cheakSum(90, 50));