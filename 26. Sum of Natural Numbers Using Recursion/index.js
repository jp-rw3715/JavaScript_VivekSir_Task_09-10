function sumRec(n) {
    return n === 0 ? 0 : n + sumRec(n - 1);
  }
  console.log(sumRec(10));
  