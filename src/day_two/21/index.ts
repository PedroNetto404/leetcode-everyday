function generate(numRows: number): number[][] {
  const r: number[][] = [[1]]

  for (let i = 1, j = 1; i < numRows; i++, j++) {     
    const tmp: number[] = []
    let t = r[i - 1][i - 1]
    if (!t) {
      t = 0
    }
    tmp[j] = r[i - 1][j] + t
    r[i] = tmp
  }
  return r;
};
console.log("Result: \n", generate(5))