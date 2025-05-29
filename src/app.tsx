import { Route, Routes } from 'react-router-dom'

import { Homepage } from './components/homepage'
import { games } from './games'

export const App = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    {games.map(game => (
      <Route key={game.slug} path={`/game/${game.slug}`} element={game.component} />
    ))}
  </Routes>
)
