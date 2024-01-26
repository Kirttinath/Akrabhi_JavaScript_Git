const b = 20;
function a() {
  //?var b = 10;
  function c() {
    console.log(b);
  }
  c();
}
a();
