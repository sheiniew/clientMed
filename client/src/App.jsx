import Chat from "./Chat"
import Header from "./Header"
import Login from "./forms/Login"
import Home from "./Home"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./hooks/ProtectedRoute"
import PublicRoute from "./hooks/PublicRoute"
import Footer from "./Footer"

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
