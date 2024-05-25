import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import MonthlyView from './pages/MonthlyView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
              <Route path='/' element={<Home/>}/>
              <Route path='/month' element={<MonthlyView/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
