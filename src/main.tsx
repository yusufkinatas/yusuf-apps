import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'
import { Global, ThemeUIProvider } from 'theme-ui'

import { App } from './app'
import { AppError } from './components/app-error'
import { theme } from './theme/theme'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeUIProvider theme={theme}>
        <ErrorBoundary FallbackComponent={AppError}>
          <Global styles={{ body: { overscrollBehavior: 'none' } }} />
          <App />
        </ErrorBoundary>
      </ThemeUIProvider>
    </BrowserRouter>
  </React.StrictMode>
)
