import getBudgetObject from './7-getBudgetObject.js';

const getFullBudgetObject = (income, gdp, capita) => {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: (incomeParam) => {
      return `$${incomeParam}`;
    },
    getIncomeInEuros: (incomeParam) => {
      return `${incomeParam} euros`;
    },
  };

  return fullBudget;
};

export default getFullBudgetObject;
