function fib(n) {
  const series = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextnumber = series[i - 1] + series[i - 2];
    series.push(nextnumber);
  }
  return series;
}
const result = fib(10);
for (let val in result) {
  console.log(result[val]);
}
