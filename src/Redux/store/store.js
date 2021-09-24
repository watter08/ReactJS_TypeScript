import { createStore , applyMiddleware , combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import CreateSagaMiddleware from 'redux-saga';




const persistConfig = {
  key: 'SoraMarket',
  storage,
}



/***************************************************
 *  IMPORTS REDUCERS
 * *************************************************/

  const Reducer = combineReducers({CarList : []});



/***************************************************
 *  END IMPORTS REDUCERS
 * *************************************************/





/***************************************************
 *  IMPORTS SAGAS
 * *************************************************/





/***************************************************
 *  END IMPORTS SAGAS
 * *************************************************/


const SagaMiddlewares = CreateSagaMiddleware();




const PersisterReducer = persistReducer(
  persistConfig,  
  Reducer,
  applyMiddleware(SagaMiddlewares)
);


const Store = createStore(PersisterReducer);
const Persistor = persistStore(Store);

export default { 
  Store ,
  Persistor,
};
