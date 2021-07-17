import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, contactAdded, contactDeleted, allowEdit, contactUpdated } from './action';
import { useState, useEffect } from 'react'

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
    updatedValue["isEdited"] = false;
    console.log("updatedValue", updatedValue);
    setPhone(updatedValue)
  }


  const handelEdit = (event, index) => {
    event.preventDefault()
    const object = {
      number: event.target[0].value,
      name: event.target[1].value,
      isEdited: false
    }
    dispatch(contactUpdated(index, object))
  }

  const handleDelete = (index) => {
    dispatch(contactDeleted(index))
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
            <li>
              {
                item.isEdited ? <form onSubmit={(e) => handelEdit(e, index)}>
                <label>
                  <input type="text" name="number" placeholder={item.number} />
                  number</label>
                <br />
                <label>
                  <input type="text" name="name" placeholder={item.name} />
                  name</label>
                <br />
                <input type="submit" value="Edit" />
              </form>:
              <>
                name {item.name} number {item.number}
                <button onClick={() => dispatch(allowEdit(index)) }>Edit</button>
              </>
              }

              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
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
