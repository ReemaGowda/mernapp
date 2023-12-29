import { useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import { readTodos } from './functions/index';
import { createTodos } from './functions/index';
import { deleteTodo } from './functions/index';

function App() {

  const [ todo, setTodo] = useState({title :'', content:''})
  const [todos, setTodos] = useState(null)
  const [currentId , setCurrentId] = useState(0)
  useEffect(() => {
    let currentTodo = currentId!=0?todos.find(todo=>todo._id===currentId):{title:'', content:''}
    setTodo(currentTodo)
  }, [currentId])
  useEffect(()=> {
    const fetchData = async()=> {
      const result = await readTodos();
      console.log(result)
      setTodos(result)
    }
    fetchData()
  }, [])

  const clear = () => {
    setCurrentId(0)
    setTodo({title:'', content:''})
  }
  useEffect(() => {
    const clearField = (e) => {
      if(e.keyCode === 27){
        clear()
      }
    }
    window.addEventListener('keydown', clearField)
  return () => window.removeEventListener('keydown', clearField)
},[])
  const onSubmitHandler = async(e)=> {
    e.preventDefault();
    const result = await createTodos(todo)
    setTodos([...todos, result])
    clear();
  }

  const removeTodo = async(id)=> {
    await deleteTodo(id);
    const todosCopy = [...todos];
    todosCopy.filter(todo => todo._id !== id);
    setTodos(todosCopy);
    //console.log("clicked")
  }

  
  return (
    <div className="container">
     <div className="row">
      {/* <pre>{JSON.stringify(todo)}</pre> */}
  <form className="col s12" onSubmit={onSubmitHandler}>
    <div className="row" >
      <div className="input-field col s6" >
        <i className="material-icons prefix">title</i>
        <input id="icon_prefix" type="text" className="validate"
        value={todo.title}
        onChange={e=>setTodo({...todo,title:e.target.value})} />
        <label htmlFor="icon_prefix">Title</label>
      </div>
      <div className="input-field col s6">
        <i className="material-icons prefix">description</i>
        <input id="description" type="tel" className="validate" 
        value={todo.content}
         onChange={e=>setTodo({...todo,content:e.target.value})}/>
        <label htmlFor="description">Content</label>
      </div>
    </div>
    <div className='row right-align'>
      <button className='waves-effect.waves-lights btn'>
        submit
      </button>
     

    </div>
  </form>
  {
    !todos ? <Preloader/> : todos.length > 0 ?  
    <ul class="collection">
      {todos.map(todo=>
      (
        <li key={todo._id}  class="collection-item">
          
          <div >
        <h5>{todo.title}</h5>
        <p>{todo.content}
        <a href="#!"  onClick={()=>removeTodo(todo._id)}
        class="secondary-content"><i 
        class="material-icons">delete</i></a>
        </p></div></li>
      ))}
   
   </ul>
  :<div><h5>Nothing to do</h5></div>
  }
 
</div>
    </div>
  );
}

export default App;
