export const SET_AMOUNT = 'SET_AMOUNT';
export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';

export const setAmount = (value) => ({
  type: SET_AMOUNT,
  value: value,
});

export const changeCurrency = (newCurrency) => ({
  type: CHANGE_CURRENCY,
  value: newCurrency,
});
