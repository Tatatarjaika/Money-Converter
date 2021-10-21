import { CHANGE_CONVERTED_AMOUNT, CHANGE_CONVERTED_CURRENCY, SET_AMOUNT, CHANGE_BASE_CURRENCY } from "../actions/converter";

const initialState = {
  // ici l'état initial
  baseAmount: 0,
  convertedAmount: '',
  convertedCurrency: 'EUR',
  baseCurrency: 'EUR',
};

function converterReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_AMOUNT:
      return {
        ...state,
        baseAmount: action.value,
      };
    case CHANGE_CONVERTED_CURRENCY:
      return {
        ...state,
        convertedCurrency: action.value,
      };
    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.value,
      };
    case CHANGE_CONVERTED_AMOUNT:
      return {
        ...state,
        convertedAmount: action.value,
      };
    default:
      return state;
  }
}

export default converterReducer;
