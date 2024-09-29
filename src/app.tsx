import { ThemeUIProvider } from 'theme-ui'

import { ColorFinder } from './games/color-finder'
import { theme } from './theme/theme'

export const App = () => {
  return (
    <ThemeUIProvider theme={theme}>
      <div>
        <ColorFinder />
      </div>
    </ThemeUIProvider>
  )
}
