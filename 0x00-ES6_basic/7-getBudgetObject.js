export default function getBudgetObject(income, gdp, capita) {
  // eslint-disable-next-line object-shorthand
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };
  
  return budget;
}
