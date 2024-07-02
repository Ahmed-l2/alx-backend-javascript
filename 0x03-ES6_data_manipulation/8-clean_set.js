export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const result = [...set]
    // First we filter elements starting with startString
    .filter((value) => value.startsWith(startString))
    // Then we map to substring after startString
    .map((value) => value.substring(startString.length))
    // And finally we join elements with '-'
    .join('-');

  return result;
}
