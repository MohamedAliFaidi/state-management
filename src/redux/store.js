import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import todoSlice from './slices/todo.slice'


const persistConfig = {
    key: 'tasks',
    storage,
}


const persistedReducer = persistReducer(persistConfig, todoSlice)



const store = configureStore({
    reducer: persistedReducer,
  });
  
  const persistor = persistStore(store);
  
  export  { store, persistor };
