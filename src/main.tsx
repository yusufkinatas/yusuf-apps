import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app'
import { ErrorBoundary } from './components/error-boundary'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
