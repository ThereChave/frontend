import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'

import './assets/css/tailwind.output.css'

import App from './App'
import { store, persistor } from "./redux/store"
import { SidebarProvider } from './context/SidebarContext'
import ThemedSuspense from './components/ThemedSuspense'
import { Windmill } from '@windmill/react-ui'
import * as serviceWorker from './serviceWorker'

// if (process.env.NODE_ENV !== 'production') {
//   const axe = require('react-axe')
//   axe(React, ReactDOM, 1000)
// }

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <SidebarProvider>
            <Suspense fallback={<ThemedSuspense />}>
                <Windmill usePreferences>
                    <App />
                </Windmill>
            </Suspense>
        </SidebarProvider>

        </PersistGate>
    </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
