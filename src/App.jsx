import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Jobs from './pages/jobs/Jobs'
import Footer from './components/footer/Footer'
import JobsDetails from './pages/jobs/JobDetails'
import SignUp from './pages/auth/SignUp'
import Login from './pages/auth/Login'
import SearchResult from './pages/search/SearchResult'
import Bookmarks from './pages/bookmark/Bookmarks'
import CurrentJob from './pages/bookmark/CurrentJob'
import SearchJobDetails from './pages/search/SearchJobDetails'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* header component */}
        <Header />
        {/* all pages */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/jobs' element={<Home />} />
          <Route path='/jobs/:jobType' element={<Jobs />} />
          <Route path='/job/:jobId' element={<JobsDetails />} />
          <Route path='/search' element={<SearchResult />} />
          <Route path='/s/:jobId' element={<SearchJobDetails />} />
          <Route path='/bookmarks' element={<Bookmarks />} />
          <Route path='/b/job/:jobId' element={<CurrentJob />} />
        </Routes>
        {/* footer component */}
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
