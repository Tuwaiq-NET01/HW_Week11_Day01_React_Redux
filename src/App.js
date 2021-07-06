import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, contactAdded, Delete, Edit } from './action';
import { useState } from 'react'
import Number from './Number'
import './App.css'

function App() {
  const [phone, setPhone] = useState({})
  const [selected, setSelected] = useState(-1)

  const counter = useSelector(state => state.counter)
  const contactlist = useSelector(state => state.contactlist)

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

  const handelEdit = (event) => {
    event.preventDefault()
    setSelected(-1)
    dispatch(Edit(selected, phone))
  }

  return (
    <center >
      {/* <h1>counter {counter}</h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button> */}
      <h1>My Contact List</h1>
      <ul>{contactlist.map((item, index) => {
        return (
          <div key={index}>
            <Number myContact={item} />
            <button onClick={() => dispatch(Delete(index))}>Delete</button>
            <button onClick={() => { setSelected(index); setPhone(item) }}>Edit</button>
            {selected === index ?
              <form onSubmit={handelEdit}>
                <p>
                  number:
                  <input type="text" name="number" value={phone.number} onChange={handelChange} />
                </p>
                <p>
                  name :
                  <input type="text" name="name" value={phone.name} onChange={handelChange} />
                </p>
                <div>
                  <input type="submit" value="update" />
                </div>
              </form> : null}
          </div>)

      }
      )
      }</ul>

      <form onSubmit={handelSubmit}>
        <p>
          number:
          <input type="text" name="number" onChange={handelChange} />
        </p>
        <p>
          name :
          <input type="text" name="name" onChange={handelChange} />
        </p>
        <div>
          <input type="submit" value="Add to the list" />
        </div>
      </form>

    </center>
  );
}

export default App;
