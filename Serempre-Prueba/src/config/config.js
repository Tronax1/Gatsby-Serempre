import { createStore, applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import reduxThunk from 'redux-thunk'

import rootReducer from '../reducers'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer, {}, applyMiddleware(reduxThunk))
    let persistor = persistStore(store)
    return { store, persistor }
}