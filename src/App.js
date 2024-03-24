import React from 'react'
import Home from './Home'      // Importing the Home component
import { Provider } from 'react-redux'  // Importing Provider from react-redux
import { store } from './store'  // Importing the Redux store

export default function App() {
  return (
    <div>
      <Provider store={store}>   {/* Providing the Redux store to the entire application */}
        <Home/>                 {/* Rendering the Home component */}
      </Provider>
    </div>
  )
}
