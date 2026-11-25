import { Route, Routes } from 'react-router-dom'

import { Homepage } from './components/homepage'

export const App = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
  </Routes>
)
