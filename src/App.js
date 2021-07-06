import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, contactAdded, contactDelete, contactEdit} from './action';
import { useState } from 'react'

function App() {
  const counter = useSelector(state => state.counter)
  const contactlist = useSelector(state => state.contactlist)
  const [phone, setPhone] = useState({})
  const [editMode, setEditMode] = useState(false)
  const [target, setTarget] = useState({})
  
  const dispatch = useDispatch();



  const handelChange = (event) => {
    const att = event.target.name
    const value = event.target.value
    const updatedValue = { ...phone }
    updatedValue[att] = value
    console.log("updatedValue", updatedValue);
    setPhone(updatedValue)

  }


  const handelSubmit = (event) => {
    event.preventDefault()
    dispatch(contactAdded(phone))
  }


  // const handleDelete = () => {

  // }


  const handleEditMode = (item) => {

  }


  const handelChangeEdit = (event) => {
    const att = event.target.name;
    const value = event.target.value;
    const updatedValue = { ...target };
    updatedValue[att] = value;
    setTarget(updatedValue);
  };

  const handelSubmitEdit = (event) => {
    event.preventDefault();
    dispatch(contactEdit(target));
    setEditMode(false);
    setTarget({});
  };



  return (
    <div >
      <h1>counter {counter}</h1>

      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <ul>{contactlist.map((item, index) => {
        return (
          <div key={index}>
            <div >
            <li>name {item.name} number {item.number} 
            
              <button onClick={() => {  setEditMode(true); setTarget(item) } }>EDIT</button> 
            <button onClick={() => dispatch(contactDelete(index))} >DELETE</button>  

            </li>
          </div>

          </div>
        )
      })}</ul>

      {editMode ? 
      
      
      <form onSubmit={handelSubmitEdit}>
        <label>
          <input type="text" name="number" value={target.number} onChange={(e) => handelChangeEdit(e)} />
                number</label> 
        <br />
        <label>
          <input type="text" name="name" value={target.name} onChange={(e) => handelChangeEdit(e)} />
                name</label>
        <br />
        <div>
          <input type="submit" value="update" />
        </div>
      </form>
      : 
      
      
      <form onSubmit={handelSubmit}>
        <label>
          <input type="text" name="number" onChange={handelChange} />
                number</label> 
        <br />
        <label>
          <input type="text" name="name" onChange={handelChange} />
                name</label>
        <br />
        <div>
          <input type="submit" value="Add to the list" />
        </div>
      </form>
      
      }

    </div>
  );
}

export default App;
