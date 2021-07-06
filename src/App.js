import { useSelector, useDispatch } from 'react-redux'
import { contactAdded, contactRemoved, contactEdited } from './action';
import { useState } from 'react'

function App() {
  const contactlist = useSelector(state => state.contactlist)
  const [phone, setPhone] = useState({})
  const dispatch = useDispatch();
  const [Index, setIndex] = useState(-1)

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
    setIndex(-1)
    dispatch(contactEdited(Index
      , phone))
  }
  return (
    <div >
      <form onSubmit={handelSubmit}>
        <label> 
          number
          <input type="number" name="number" onChange={handelChange} />
         </label>
        <br />
        <label> 
          name
          <input type="text" name="name" onChange={handelChange} />
         </label>
        <br />
        <div>
          <input type="submit" value="Add to the list" />
        </div>
      </form>
      <ul>{contactlist.map((item, index) => {
        if (Index === index) {
          return (
            <form onSubmit={handelEdit}>
              <label>
                number
                <input type="text" name="number" value={phone.number} onChange={handelChange} />
              </label>
              <br />
              <label>
                name
                <input type="text" name="name" value={phone.name} onChange={handelChange} />
              </label>
              <div>
                <br />
                <input type="submit" value="Sumbit" />
              </div>
            </form>
          )
        }
        else {
          return (
            <div key={index}>
              <li>name {item.name} number {item.number}</li>
              <button onClick={() => dispatch(contactRemoved(index))}>X</button>
              <button onClick={() => {
                setIndex
                  (index); setPhone(item)
              }}>Edit</button>
            </div>
          )
        }
      })}</ul>

    </div>
  );
}

export default App;
