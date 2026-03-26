import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SeguradorasPage from './pages/SeguradorasPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seguradoras" element={<SeguradorasPage />} />

        <Route path="/seguros" element={<Navigate to="/seguradoras" replace />} />
        <Route path="/seguro" element={<Navigate to="/seguradoras" replace />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App