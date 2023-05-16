import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageNotFound from './components/PageNotFound'

// pages
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
