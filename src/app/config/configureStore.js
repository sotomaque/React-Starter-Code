import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistedReducer from '../reducers';

const initialState = {};
const middleware = [];
const __prod__ = process.env.NODE_ENV === 'production';

// Create Store with Persisted Reducer
const store = createStore(
  persistedReducer,
  initialState,
  !__prod__
    ? composeWithDevTools(applyMiddleware(...middleware))
    : applyMiddleware(...middleware)
);

// Export Persistor
export const persistor = persistStore(store);
// Export Store
export default store;
