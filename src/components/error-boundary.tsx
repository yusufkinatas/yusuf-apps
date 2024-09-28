import { PropsWithChildren, useEffect, useState } from 'react'

export const ErrorBoundary = ({ children }: PropsWithChildren) => {
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const handleError = (event: PromiseRejectionEvent | ErrorEvent) => {
      let message = ''

      if (event instanceof PromiseRejectionEvent) {
        message =
          event.reason instanceof Error ? event.reason.message : String(event.reason)
      } else {
        message = event.message
      }

      setErrorMessage(message)
      console.error('ErrorBoundary caught an error:', message)
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleError)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleError)
    }
  }, [])

  if (errorMessage) {
    return (
      <div
        sx={{
          minHeight: '100lvh',
          backgroundColor: 'red.400',
          color: 'white',
          padding: 4,
          fontSize: 'xl',
        }}
      >
        <b>Something went wrong</b>
        <p>{errorMessage}</p>
      </div>
    )
  }

  return children
}
