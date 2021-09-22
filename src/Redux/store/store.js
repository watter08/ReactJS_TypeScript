import { createStore , applyMiddleware } from "redux";
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
  {
  reducer: {
    cartList: [],
  }, 
},
persistConfig,
applyMiddleware(SagaMiddlewares)
);


const Store = createStore(PersisterReducer);
const Persistor = persistStore(Store);

export default { 
  Store ,
  Persistor,
};
