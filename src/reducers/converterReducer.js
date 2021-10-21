import { CHANGE_CURRENCY, SET_AMOUNT } from "../actions/converter";

const initialState = {
  // ici l'état initial
  baseAmount: '',
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
    default:
      return state;
  }
}

export default converterReducer;
