import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ThemeProviderContext } from './context/ThemeContext/Context'
import './lang/i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProviderContext>
      <App />
    </ThemeProviderContext>
  </React.StrictMode>
)
