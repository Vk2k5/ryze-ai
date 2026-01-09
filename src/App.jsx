import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Benefits from './pages/Benefits'
import WhoAreWe from './pages/WhoAreWe'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f5f6f8] text-black overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/who-are-we" element={<WhoAreWe />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
