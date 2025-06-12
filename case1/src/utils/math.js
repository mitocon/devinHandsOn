/**
 * 数値配列の全要素の合計を計算します
 * @param {number[]} arr - 合計を計算する数値の配列
 * @returns {number} 配列内全要素の合計値
 */
export function sumNumbers(arr) {
  let total = 0;
  for (const n of arr) {
    total += n;
  }
  return total;
}

/**
 * 数値配列の平均値を計算します
 * @param {number[]} arr - 平均値を計算する数値の配列
 * @returns {number} 配列の平均値（空配列の場合は0）
 */
export function average(arr) {
  if (arr.length === 0) return 0;
  let total = 0;
  for (const n of arr) {
    total += n;
  }
  return total / arr.length;
}
