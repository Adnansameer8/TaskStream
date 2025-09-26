import React from 'react'

const Kanban = () => {
  return (
    <div>
      <h1 style={{
        marginTop:'4px',
        color:'brown',
        fontSize:'2rem',
        textAlign:'center'
      }}>KANBAN BOARD</h1>
     <div style={{
        display:'flex',
        justifyContent:'center',
        gap:'6px'
     }}>
         <input type="text" placeholder='  Add New Task ' style={{
        width:'460px',
        height:'30px',
       borderRadius:'50px',
       border:'none',
       boxShadow:'0px 0px 8px rgba(0, 0, 0, 0.3)',
       backgroundColor:'rgba(255, 255, 255, 0.73)'


      }} />
      <button style={{backgroundColor:'rgba(255, 255, 255, 0.73)',
        border:'none',
        boxShadow:'0px 0px 8px rgba(255, 19, 19, 1)',
        borderRadius:'50px'
      }}>Add</button>
     </div>
     
        <div style={{backgroundColor:'rgba(130, 62, 62, 0.73)',height:'600px',width:'100%',marginTop:'30px'}}>
        <div>To Do</div>
        <div>In Progress</div>
        <div>Done</div>
        <div>🚮<br />Trash Bin</div>
        </div>
     
    </div>
  )
}

export default Kanban
