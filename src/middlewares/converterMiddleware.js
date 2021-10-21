import axios from 'axios';

import {
  changeConvertedAmount,
  CONVERT_AMOUNT
} from '../actions/converter';

const converterMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CONVERT_AMOUNT: {
      const {
        baseAmount,
        baseCurrency,
        convertedCurrency,
      } = store.getState().converter;

      axios.get(
        `https://v6.exchangerate-api.com/v6/08edbaa009568832ca77d2e1/pair/${baseCurrency}/${convertedCurrency}`,
      )
        .then((response) => {
          const conversionRate = (response.data.conversion_rate);
          const newConvertedAmount = baseAmount * conversionRate;
          console.log(newConvertedAmount);
          store.dispatch(changeConvertedAmount(newConvertedAmount));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
        });
      break;
    }
    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default converterMiddleware;
