import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SeguradorasPage from './pages/SeguradorasPage'
import { ScrollToHash } from './components/ScrollToHash'
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
  
    <BrowserRouter>
	<ScrollToTop /> 
	<ScrollToHash /> 
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