import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import converterMiddleware from 'src/middlewares/converterMiddleware';
import rootReducer from 'src/reducers';

const enhancers = composeWithDevTools(
  // applyMiddleware(
  //   converterMiddleware,
  //   // ... d'autres middlewares
  // ),
);

const store = createStore(
  // reducer
  rootReducer,
  // enhancer
  enhancers,
);

export default store;
