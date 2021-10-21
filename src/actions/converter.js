export const SET_AMOUNT = 'SET_AMOUNT';
export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
export const CONVERT_AMOUNT = 'CONVERT_AMOUNT';
export const CHANGE_CONVERTED_AMOUNT   ='CHANGE_CONVERTED_AMOUNT';

export const setAmount = (value) => ({
  type: SET_AMOUNT,
  value: value,
});

export const changeCurrency = (newCurrency) => ({
  type: CHANGE_CURRENCY,
  value: newCurrency,
});

export const convertAmount = () => ({
  type: CONVERT_AMOUNT,
});

export const changeConvertedAmount = (newAmount) => ({
  type: CHANGE_CONVERTED_AMOUNT,
  value: newAmount,
});
