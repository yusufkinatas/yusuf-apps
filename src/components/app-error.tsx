import { FallbackProps } from 'react-error-boundary'

export const AppError = ({ error }: FallbackProps) => (
  <div
    sx={{
      minHeight: '100lvh',
      backgroundColor: 'tomato',
      color: 'white',
      padding: 4,
      fontSize: 4,
    }}
  >
    <b>Something went wrong</b>
    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
    <pre>{JSON.stringify(error.message)}</pre>
  </div>
)
