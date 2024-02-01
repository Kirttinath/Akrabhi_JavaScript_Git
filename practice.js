const result = new Promise((result, reject) => {
  let num = 2;
  if (num % 2 == 0) {
    result(num + " is an even number");
  } else reject(num + " is not an even number");
});
result
  .then(function (data) {
    console.log("success : " + data);
  })
  .catch(function (err) {
    console.log("error : " + err);
  });
