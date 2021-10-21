export const SET_AMOUNT = 'SET_AMOUNT';
export const CHANGE_CONVERTED_CURRENCY = 'CHANGE_CONVERTED_CURRENCY';
export const CHANGE_BASE_CURRENCY = 'CHANGE_BASE_CURRENCY';
export const CONVERT_AMOUNT = 'CONVERT_AMOUNT';
export const CHANGE_CONVERTED_AMOUNT   ='CHANGE_CONVERTED_AMOUNT';

export const setAmount = (value) => ({
  type: SET_AMOUNT,
  value: value,
});

export const changeConvertedCurrency = (newCurrency) => ({
  type: CHANGE_CONVERTED_CURRENCY,
  value: newCurrency,
});

export const changeBaseCurrency = (newCurrency) => ({
  type: CHANGE_BASE_CURRENCY,
  value: newCurrency,
});

export const convertAmount = () => ({
  type: CONVERT_AMOUNT,
});

export const changeConvertedAmount = (newAmount) => ({
  type: CHANGE_CONVERTED_AMOUNT,
  value: newAmount,
});
