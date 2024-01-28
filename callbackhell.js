//* CallBack Hell : It is a structural process that uses calback functions inside another callback function and so on.

//todo Nested callbacks without proper indentation

asyncFunction1(function (result1) {
  asyncFunction2(result1, function (result2) {
    asyncFunction3(result2, function (result3) {
      asyncFunction4(result3, function (result4) {
        //? More nested callbacks...
      });
    });
  });
});
//todo This is also called as Pyramid Of Doom
//todo -----------------------------------------
