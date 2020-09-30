import React from 'react'
import { Provider } from 'react-redux'
import config  from '../config/config'
import { PersistGate } from 'redux-persist/integration/react'

const {store, persistor} = config()

export default ({element}) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {element}
        </PersistGate>
    </Provider>
)