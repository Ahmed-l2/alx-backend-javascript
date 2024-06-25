export default function appendToEachArrayValue(array, appendString) {
  const temp = array.slice();
  for (const idx in temp) {
    if (Object.prototype.hasOwnProperty.call(temp, idx)) {
      const value = temp[idx];
      temp[idx] = appendString + value;
    }
  }

  return temp;
}
