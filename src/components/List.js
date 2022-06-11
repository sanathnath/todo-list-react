import React,{useState} from 'react'

function List(props) {
  const [isEdit, setisEdit] = useState(false);
  const [value, setValue] = useState(props.data);

  const editFn = (event)=>{
    event.preventDefault();
    if(value !== ""){
    props.dispatch({type:"edit", value:value, index:props.index});
    setisEdit(false);
    }
  }
  const deleteFn = ()=>{
    props.dispatch({type:"delete", value:value, index:props.index});
  }

  return (
    <div className='list' style={{"margin-top":"15px"}}>
    <li >
        {props.data}
    </li>
      {isEdit?<form onSubmit={editFn}>
      <input className='editTask' value={value} onChange={(event)=>{setValue(event.target.value)}} required/>
      <button className='saveTask btns'>Save</button>
      </form>:null}
    <button className='edit btns' onClick={()=>{setisEdit(true)}}>Edit</button>
    <button className='delete btns' onClick={deleteFn}>Delete</button>
    </div>
  )
}

export default List