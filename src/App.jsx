

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Menu from './Pages/Menu'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import PageNotFound from './Pages/PageNotFound'
import Cart from './Pages/Cart'

function App() {

  return (
    <main className='overflow-hidden m-o p-0'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </main>
  )
}

export default App
