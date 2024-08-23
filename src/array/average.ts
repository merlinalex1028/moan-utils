/**
 * Calculates the average of an array of numbers.
 *
 * @param arr - The array of numbers.
 * @param decimalPlaces - The number of decimal places to round the average to (optional).
 * @returns The average of the numbers in the array.
 */
export function average(arr: number[], decimalPlaces?: number): number {
  if (arr.length === 0) {
    return 0
  }
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  const average = sum / arr.length
  if (decimalPlaces !== undefined) {
    return Number(average.toFixed(decimalPlaces))
  }
  return average
}
