import { connect } from 'react-redux';

import { setAmount, changeConvertedCurrency, changeBaseCurrency, convertAmount } from 'src/actions/converter';
// on importe le composant de présentation
import Converter from 'src/components/Converter';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  baseAmount: state.converter.baseAmount,
  convertedAmount: state.converter.convertedAmount,
  convertedCurrency: state.converter.convertedCurrency,
  baseCurrency: state.converter.baseCurrency,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  setAmount: (newAmount) => {
    dispatch(setAmount(newAmount));
    dispatch(convertAmount());
  },

  changeConvertedCurrency: (newCurrency) => {
    dispatch(changeConvertedCurrency(newCurrency));
    dispatch(convertAmount());
  },

  changeBaseCurrency: (newCurrency) => {
    dispatch(changeBaseCurrency(newCurrency));
    dispatch(convertAmount());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Converter);
