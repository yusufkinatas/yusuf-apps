import { Route, Routes } from 'react-router-dom'

import { GameLayout } from './components/game-layout'
import { Homepage } from './components/homepage'
import { games } from './games'

export const App = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />

    {games.map(game => (
      <Route key={game.slug} path={`/game/${game.slug}`} element={<GameLayout />}>
        <Route index element={game.component} />
      </Route>
    ))}
  </Routes>
)
