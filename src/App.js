import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, contactAdded, removeContact, editContact } from './action';
import { useState } from 'react'

function App() {
  const counter = useSelector(state => state.counter)
  const contactlist = useSelector(state => state.contactlist)
  const [phone, setPhone] = useState({})
  const dispatch = useDispatch();
  const handelChange = (event) => {
    const att = event.target.name
    const value = event.target.value
    const updatedValue = { ...phone }
    updatedValue[att] = value
    console.log("updatedValue", updatedValue);
    setPhone(updatedValue)
  }

  const editContact = (index) => {
    if(!contactlist[index] ||
       (contactlist[index].name === phone.name &&
        contactlist[index].number === phone.number))
      return;
    
    const arg = {index, phone};
    
    dispatch(editContact(arg));
  }

  const deleteContact = (index) => {
    dispatch(removeContact({index}));
  }
  
  const handelSubmit = (event) => {
    event.preventDefault()
    dispatch(contactAdded(phone))
  }
  return (
    <div >
      <h1>counter {counter}</h1>

      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <ul>{contactlist.map((item, index) => {
        return (
          <div key={index}>
            <li>name {item.name} number {item.number} <input onClick={() => editContact(index)} type="button" value="edit" /> <input onClick={() => deleteContact(index)} type="button" value="delete" /></li>

          </div>
        )
      })}</ul>

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
