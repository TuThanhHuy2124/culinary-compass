import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
