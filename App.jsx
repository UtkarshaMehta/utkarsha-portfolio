import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import ExperienceDetail from './pages/ExperienceDetail'
import CaseStudies from './pages/CaseStudies'
import CaseStudyDetail from './pages/CaseStudyDetail'
import Contact from './pages/Contact'
import Results from './pages/Results'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/experience/:id" element={<ExperienceDetail />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

