import { addCount } from '../store/action';
import { useDispatch } from 'react-redux';
import { store } from '../store/store';


function Counter(){
    function HandleAdd(){
        const dispatch = useDispatch();
        let data = (store.getState())
        console.log(data.count)
            const payload = 1;
            const addCountAction = addCount(payload)
            dispatch(addCountAction)
          }
    return(
        <div>
      <h1>Count:</h1>
      <button onClick = {HandleAdd}>Add</button>
      <button>Sub</button>
      </div>
    )
}

export default Counter