import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

// <!-- Fav Icon -->
import "./assets/imgs/logo/favicon.png"



{/* <!-- Vendor CSS Files --> */}
import "./assets/vendor/bootstrap.min.css"
import "./assets/vendor/all.min.css"
import "./assets/vendor/swiper-bundle.min.css"
import "./assets/vendor/progressbar.css"
import "./assets/vendor/meanmenu.min.css"
import "./assets/vendor/magnific-popup.css"
import "./assets/vendor/animate.min.css"
import "./assets/vendor/nice-select.css"

import "./assets/css/style.css"
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename="/reactDigitalAgency">
      <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/home' element={<HomePage />}></Route>
      <Route path='/contact' element={<ContactPage />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
