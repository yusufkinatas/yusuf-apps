import { Route, Routes } from 'react-router-dom'

import { GameLayout } from './components/game-layout'
import { Homepage } from './components/homepage'
import { links } from './links'

export const App = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />

    {links.map(link =>
      link.type === 'game' ? (
        <Route key={link.slug} path={`/game/${link.slug}`} element={<GameLayout />}>
          <Route index element={link.component} />
        </Route>
      ) : undefined
    )}
  </Routes>
)
