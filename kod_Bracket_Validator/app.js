// // console.log("object");
// // const ifade = "([]{[]})[]{{}()}";
// // const ac = ["(", "[", "{"];
// // const kapat = [")", "]", "}"];
// let ifade1 = " { [ ] ( ) }";
// let ifadeler = "";

// for (let i = 0; i < 9; i++) {
//   if (
//     ifade1.indexOf("[]") >= 0 ||
//     ifade1.indexOf("()") >= 0 ||
//     ifade1.indexOf("{}") >= 0
//   ) {
    

//     for (let i = -1; a > i; i) {
//       ifadeler += ifade1.slice(0, a);
//       ifadeler += ifade1.slice(a + 2);
//       ifade1 = ifadeler;
//       ifadeler = "";
//       a = ifade1.indexOf("[]");
//       console.log(a);
//     }
//     for (let i = -1; b > i; i) {
//       ifadeler += ifade1.slice(0, b);
//       ifadeler += ifade1.slice(b + 2);
//       ifade1 = ifadeler;
//       ifadeler = "";
//       b = ifade1.indexOf("()");
//       console.log(b);
//     }
//     console.log(b);
//     for (let i = -1; c > i; i) {
//       ifadeler += ifade1.slice(0, c);
//       ifadeler += ifade1.slice(c + 2);
//       ifade1 = ifadeler;
//       ifadeler = "";
//       c = ifade1.indexOf("{}");
//       console.log(c);
//     }


//     console.log(ifade1);
//   }
//   else{
//     console.log("hatalı");
//     break
//   }
// }
