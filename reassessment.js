function a() {
  //?var b = 10;
  function c() {
    console.log(b);
  }
  c();
}
const b = 20;
a();
