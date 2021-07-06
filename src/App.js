import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, contactAdded, contactDeleted, contactEdited } from './action';
import { useState } from 'react'

function App() {

  const counter = useSelector(state => state.counter)
  const contactlist = useSelector(state => state.contactlist)

  const [phone, setPhone] = useState({})
  const [edit, setEdit] = useState(false);
  const [editContact, setEditContact] = useState({});
  const dispatch = useDispatch();


  const handelChange = (event) => 
  {
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

  const handelChangeEdit = (e) => {
    const att = e.target.name;
    const value = e.target.value;
    const updatedValue = { ...editContact };
    updatedValue[att] = value;
    setEditContact(updatedValue);
  };

  const handelSubmitEdit = (e) => {
    e.preventDefault();
    dispatch(contactEdited(editContact));
    setEdit(false);
    setEditContact({});
  };
  return (
    <div >
      <center>
      <h1>counter {counter}</h1>

      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

            <ul>
        {contactlist.map((item, index) => {
          return (
            <div key={index}>
              <li>
                {item.id}. name {item.name} number {item.number}
                <button onClick={() => dispatch(contactDeleted(item))}> DELETE </button>
                <button onClick={() => { setEdit((e) => !e); setEditContact(item); }}> EDIT </button>
              </li>
              {edit && editContact.id === item.id ? (
                <form onSubmit={handelSubmitEdit}>
                  <label>
                    <input type="text" name="number" value={editContact.number} onChange={handelChangeEdit}/> number 
                  </label>
                  <br />
                  <label>
                    <input type="text" name="name" value={editContact.name} onChange={handelChangeEdit} /> name
                  </label>
                  <br />
                  <div>
                    <input type="submit" value="Edit" />
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

       </center>
    </div>
  );
}

export default App;
