function countKprimes(k, start, nd) {
    // your code
  let arr = [];
  let arr1 = [];
  // 得到start-nd中的每个数
  for (let i = start; i <= nd; i++) {
    // 得出每个数的所有因数
    for (let j = 1; j <= i; j++) {
      if( i % j == 0) { 
        // 所有因数
        arr1.push[j];
      }
      
    }
  }
  return arr;
}
function puzzle(s) {
    // your code
}