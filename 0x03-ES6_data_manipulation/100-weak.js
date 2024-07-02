export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  //  First we initialize count if it does not exist for this endpoint
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Second we increment the count for this endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Finally we check if count is >= 5, throw error if true
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
