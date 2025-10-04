import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BoardProvider } from './BoardContext'
import Board from './components/Board'
import Landing from './components/Landing'
import Login from './components/Login' 

const App = () => {
  return (
    <div>
      <BoardProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/board' element={<Board />} />
          </Routes>
        </BrowserRouter>
      </BoardProvider>
    </div>
  )
}

export default App
