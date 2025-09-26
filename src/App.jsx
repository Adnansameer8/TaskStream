import React from 'react'
import Kanban from './Kanban'
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
