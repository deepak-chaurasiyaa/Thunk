import './App.css';

import { addCount,subCount } from './store/action';

import { useDispatch,useSelector } from 'react-redux';

import TodoInput from './Components/TodoInput';
import { TodoList } from './Components/TodoList';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(store => store.count)
  return (
    <div className="App">
      <div>
        <TodoInput/>
      </div>
      <div>
        <h3>Count:{state}</h3>
        <button 
          onClick = {()=>{
            dispatch(addCount(1))
          }}
          >Add 1</button>
          <button onClick = {()=>{
            dispatch(subCount(1))
          }}>Sub 1</button>
      </div>
    </div>
  );
}


export default App;
