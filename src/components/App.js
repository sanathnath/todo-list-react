import React, {useState, useReducer} from "react";
import reducer from './../reducer.js'
import List from "./List.js";
import "./../styles/App.css";

function App() 
{
	const initialObj = [];
	const [todo, setTodo] = useState("");
	const [state, dispatch] = useReducer(reducer, initialObj)
	function valueHandler(event){
		setTodo(event.target.value);
		console.log(todo);
	}
	const addTodo = (event)=>{
		event.preventDefault()
		if(todo !== ""){
			dispatch({type:"add",value:todo,index:""});
			setTodo("");
		}else{
			setTodo("");
		}
	}
	return (
	<div id="main">
		<h1>Todo List</h1>
		<div className="add-div">
			<input type="text" id="task" placeholder="Add todo" value={todo} onChange={valueHandler} required/>
			<button id="btn" onClick={addTodo}>Add</button>
		</div>
		<div>
			<ol>
				{state.map((item,index)=>{
					console.log(index);
					return <List data={item} dispatch={dispatch} index={index}/>
				})}
			</ol>
		</div>
	</div>
	);
}


export default App;
