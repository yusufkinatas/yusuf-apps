import { Theme, ThemeUIProvider } from 'theme-ui'

import { ColorFinder } from './games/color-finder'

const theme: Theme = {
  fonts: {},
  colors: {},
}

export const App = () => {
  return (
    <ThemeUIProvider theme={theme}>
      <div>
        <ColorFinder />
      </div>
    </ThemeUIProvider>
  )
}
