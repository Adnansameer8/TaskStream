import React, { useContext, useState } from 'react'
import {useBoard,BoardContext} from '../BoardContext'
import Column from './Column'
import TrashBin from '../TrashBin';



function TakeInput(){
  const{ dispatch }=useContext(BoardContext);
  const [text,setText]=useState(' ');

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!text.trim()) return;
    dispatch({
      type:'ADD_TASK',payload:{text}
    });
    setText(' ');
  };
  return(
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <form className="task_form" onSubmit={handleSubmit}>
      <input type='text'
      value={text}
      onChange={(e)=> setText(e.target.value)}
      placeholder='ADD NEW TASK....'/>
      <button type='submit'>Add</button>
    </form>
    </div>
  )
}
export default function Board(){
    const {state} = useBoard();
  return (
   <> <h1>KANBAN BOARD</h1>
    <TakeInput/>
    <div className='board'>
      {Object.values(state.columns).map((col)=>(
        <Column key={col.id} column = {col}/>
      ))}
      <TrashBin />
    </div>
   </>
  )
}