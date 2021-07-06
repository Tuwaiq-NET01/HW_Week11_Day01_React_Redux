import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, contactAdded, contactDelete, contactEdit } from './action';
import { useState } from 'react'
import './App.css'
function App() {
  const counter = useSelector(state => state.counter)
  const contactlist = useSelector(state => state.contactlist)
  const [phoneNumber, setphoneNumber] = useState({})
  const [ItemOfList, setItemOfList] = useState(-1)
  const dispatch = useDispatch();

  const handelChange = (event) => {
    const att = event.target.name
    const value = event.target.value
    const updatedValue = { ...phoneNumber,}
    updatedValue[att] = value
    console.log("updatedValue", updatedValue);
    setphoneNumber(updatedValue)

  }

  const handelSubmit = (event) => {
    event.preventDefault()
    dispatch(contactAdded(phoneNumber))
  }

  const handelEdit = (event) => {
    event.preventDefault()
    setItemOfList(-1)
    dispatch(contactEdit(ItemOfList,phoneNumber))
  }

  return (
    <div className="App" >
      <h1>counter {counter}</h1>

      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <ul>{contactlist.map((item, index) => {
        if(ItemOfList === index){
          return (
            <form onSubmit={handelEdit}>
            <label>
              number 
              <input type="text" name="number" value={phoneNumber.number} onChange={handelChange} />
            </label>
            <br />
            <label>
              name 
              <input type="text" name="name" value={phoneNumber.name} onChange={handelChange} />
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
            <li>Name {item.name} Number {item.number}</li>
            <button onClick={() => dispatch(contactDelete(index))}>Drop</button>
            <button onClick={() => {setItemOfList(index); setphoneNumber(item)}}>Edit</button>
          </div>
        )}
      })}</ul>

      <form onSubmit={handelSubmit}>
        <label>
          number 
          <input type="text" name="number" onChange={handelChange} />
        </label>
        <br />
        <label>
          name 
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