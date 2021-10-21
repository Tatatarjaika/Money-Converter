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
          // ON récupère la réponse de l'api
          const conversionRate = (response.data.conversion_rate);
          // On applique le taux de conversion
          const newConvertedAmount = baseAmount * conversionRate;
          // On arrondit le résultat
          const roundedAmount = newConvertedAmount.toFixed(2);
          store.dispatch(changeConvertedAmount(roundedAmount));
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
