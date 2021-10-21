import { connect } from 'react-redux';

import { setAmount, changeCurrency } from 'src/actions/converter';
// on importe le composant de présentation
import Converter from 'src/components/Converter';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  baseAmount: state.converter.baseAmount,
  convertedAmount: state.converter.convertedAmount,
  convertedCurrency: state.converter.convertedCurrency,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  setAmount: (newAmount) => {
    dispatch(setAmount(newAmount));
  },

  changeCurrency: (newCurrency) => {
    dispatch(changeCurrency(newCurrency));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Converter);
