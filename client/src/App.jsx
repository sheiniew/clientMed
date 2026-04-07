import Chat from "./Chat"
import Header from "./Header"
import Login from "./forms/Login"
import Home from "./Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./hooks/ProtectedRoute"
import PublicRoute from "./hooks/PublicRoute"
import Footer from "./Footer"
import Servicios from "./Servicios"
import Guides from "./Guides"
import Investigation from "./Investigation"

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/team" element={<Investigation />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/services" element={<Servicios />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
