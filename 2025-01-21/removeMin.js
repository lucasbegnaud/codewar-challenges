function removeSmallest(numbers) {
  if (numbers.length === 0) return [];
  const lowestIndex = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((_, index) => index !== lowestIndex);
}
