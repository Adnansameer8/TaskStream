import React from 'react'
import Board from './components/Board'
import { BoardProvider } from './BoardContext'

const App = () => {
  return (
    <div>
      <BoardProvider>
        <Board/>
      </BoardProvider>
    </div>
  )
}

export default App
