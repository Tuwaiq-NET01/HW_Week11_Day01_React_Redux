import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, contactAdded, contactDeleted, contactEdited } from './action';
import { useState } from 'react'

function App() {
  const counter = useSelector(state => state.counter)
  const contactlist = useSelector(state => state.contactlist)
  const [phone, setPhone] = useState({})
  const [selected, setSelected] = useState(-1)
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

  function handleRemove(index) {
    dispatch(contactDeleted(index))
    console.log("handleRemove", index)
  }

  function handleUpdate(event) {
    event.preventDefault();
    dispatch(contactEdited(phone, selected));
    setSelected(-1)
    setPhone({});
  }

  return (
    <center >
      <h1>counter {counter}</h1>

      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <ul>{contactlist.map((item, index) => {
        return (
          <div key={index}>
            {selected === index ?
              <form onSubmit={handleUpdate}>
                <p>
                  number:
                  <input type="text" name="number" value={phone.number} onChange={handelChange} />
                </p>
                <p>
                  name :
                  <input type="text" name="name" value={phone.name} onChange={handelChange} />
                </p>
                <input type="submit" value="update" />
              </form>
              : <li>
                name {item.name} number {item.number}
                <button onClick={() => { setSelected(index); setPhone(item) }}>Edit</button>
                <button onClick={() => handleRemove(index)}>Delete</button>
              </li>}
          </div>
        )
      })}</ul>

      <form onSubmit={handelSubmit}>
        <label> number: </label>
        <input type="text" name="number" onChange={handelChange} />
        <br />
        <label> name:  </label>
        <input type="text" name="name" onChange={handelChange} />
        <br />
        <div>
          <input type="submit" value="Add to the list" />
        </div>
      </form>

    </center>
  );
}

export default App;
