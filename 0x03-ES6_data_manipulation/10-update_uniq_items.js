export default function updateUniqueItems(groceries) {
  groceries.forEach((value, key) => {
    if (value === 1) {
      groceries.set(key, 100);
    }
  });
}
