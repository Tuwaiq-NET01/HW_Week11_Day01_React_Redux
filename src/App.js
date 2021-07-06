import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, contactAdded , Delete, contactEdited} from './action';
import { useState } from 'react'

function App() {
  const counter = useSelector(state => state.counter)
  const contactlist = useSelector(state => state.contactlist)
  const [phone, setPhone] = useState({})
  const [selected, setSelected] = useState(-1)
  const [editItem, setEditItem] = useState({});
  const dispatch = useDispatch();
  
  const handelChange = (event) => {
    const att = event.target.name
    const value = event.target.value
    const updatedValue = { ...phone }
    updatedValue[att] = value
    console.log("updatedValue", updatedValue);
    setPhone(updatedValue)

  }
 
  const handelEdit = (event) => {
    event.preventDefault();
    dispatch(contactEdited(phone,selected));
    setSelected(-1)
    setPhone({});
    
  }


  const handelSubmit = (event) => {
    event.preventDefault()
    dispatch(contactAdded(phone))
  }
  return (
    <div style={{margin: "80px auto",
      width: "50%",
      border: "1px solid black",
      padding: "10px"}}>
      <h1>counter {counter}</h1>

      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <ul>{contactlist.map((item, index) => {
        return (
          <div key={index}>
            <li>name {item.name} number {item.number} 
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
                  <input type="text" name="name" value={phone.name} onChange={handelChange}  />
                </p>
                <div>
                  <input type="submit" value="update" />
                </div>
              </form> : null}
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
