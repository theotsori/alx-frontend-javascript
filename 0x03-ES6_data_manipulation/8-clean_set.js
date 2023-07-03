export default function cleanSet(set, startString) {
  const filtered = [...set].filter((value) => value.startsWith(startString));
  const clean = filtered.map((value) => value.substring(startString.length));
  return clean.join('-');
}
