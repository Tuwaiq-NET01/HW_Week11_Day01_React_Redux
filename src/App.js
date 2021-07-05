import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, contactAdded, Delete, Edit } from './action';
import { useState } from 'react'
import './App.css'
function App() {
  const counter = useSelector(state => state.counter)
  const contactlist = useSelector(state => state.contactlist)
  const [phone, setPhone] = useState({})
  const [select, setselect] = useState(-1)
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
    setselect(-1)
    dispatch(Edit(select,phone))
  }
  return (
    <div className="App" >
      <h1>counter {counter}</h1>

      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <ul>{contactlist.map((item, index) => {
        if(select === index){
          return (
            <form onSubmit={handelEdit}>
            <label>
              number {"\t"}
              <input type="text" name="number" value={phone.number} onChange={handelChange} />
            </label>
            <br />
            <label>
              name {"\t"}
              <input type="text" name="name" value={phone.name} onChange={handelChange} />
            </label>
            
            <div>
            <br />
              <input type="submit" value="Sumbit" />
            </div>
          </form>
          )
        }
        else{
        return (
          <div key={index}>
            <li>name {item.name} number {item.number}</li>
            <button onClick={() => dispatch(Delete(index))}>Delete</button>
            <button onClick={() => {setselect(index); setPhone(item)}}>Edit</button>
          </div>
        )}
      })}</ul>

      <form onSubmit={handelSubmit}>
        <label>
          number {"\t"}
          <input type="text" name="number" onChange={handelChange} />
        </label>
        <br />
        <label>
          name {"\t"}
          <input type="text" name="name" onChange={handelChange} />
        </label>
        
        <div>
        <br />
          <input type="submit" value="Add to the list" />
        </div>
      </form>

    </div>
  );
}

export default App;
