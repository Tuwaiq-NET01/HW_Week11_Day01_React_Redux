import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, contactAdded,contactEdited,contactDeleted } from './action';
import { useState } from 'react'

function App() {
  const counter = useSelector(state => state.counter)
  const contactlist = useSelector(state => state.contactlist)
  const [phone, setPhone] = useState({})
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editItem, setEditItem] = useState({});




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


  const handelChangeEdit = (event) => {
    const att = event.target.name;
    const value = event.target.value;
    const updatedValue = { ...editItem };
    updatedValue[att] = value;
    setEditItem(updatedValue);
  };


  const handelSubmitEdit = (event) => {
    event.preventDefault();
    dispatch(contactEdited(editItem));
    setIsEdit(false);
    setEditItem({});
  };


  return (
    <div>
    <h1>counter {counter}</h1>

    <button onClick={() => dispatch(increment(2))}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>

    <ul>{contactlist.map((item, index) => {
      return (
        <div key={index}>
          <li>name {item.name} number {item.number}</li>
          <button onClick={() => dispatch(contactDeleted())}>Delete</button>
          <button onClick={() => {
            setIsEdit((e) => !e);
            setEditItem(item)
          }}> Edit </button>


    
      {isEdit && editItem.id === item.id ? (
        <form onSubmit={handelSubmitEdit}>
          <label>
            <input
              type="text"
              name="number"
              value={editItem.number}
              onChange={handelChangeEdit}
            />
            number
          </label>
          <br />
          <label>
            <input
              type="text"
              name="name"
              value={editItem.name}
              onChange={handelChangeEdit}
            />
            name
          </label>
          <br />
          <div>
            <input type="submit" value="Updat" />
          </div>
        </form>
      ) : null}
          </div>
        );
      })}
    </ul>

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
  </div> 


);
    }
      


export default App;
