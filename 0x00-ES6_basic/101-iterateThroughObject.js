export default function iterateThroughObject(reportWithIterator) {
  const resultArray = [];

  for (const item of reportWithIterator) {
    resultArray.push(item);
  }

  const result = resultArray.join(" | ");

  return result;
}
