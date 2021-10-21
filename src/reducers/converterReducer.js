import { CHANGE_CONVERTED_AMOUNT, CHANGE_CURRENCY, SET_AMOUNT } from "../actions/converter";

const initialState = {
  // ici l'état initial
  baseAmount: 0,
  convertedAmount: '',
  convertedCurrency: '',
};

function converterReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_AMOUNT:
      return {
        ...state,
        baseAmount: action.value,
      };
    case CHANGE_CURRENCY:
      return {
        ...state,
        convertedCurrency: action.value,
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
