import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, contactAdded, contactDelete, contactEdit } from './action';
import { useState } from 'react'
import './App.css'



function App() {
  const counter = useSelector(state => state.counter)
  const contactlist = useSelector(state => state.contactlist)
  const [phone, setPhone] = useState({})
  const [selected, setSelected] = useState(-1)
  const dispatch = useDispatch()


  const handleChange = (event) => {
    const att = event.target.name
    const value = event.target.value
    const updatedValue = { ...phone }
    updatedValue[att] = value
    console.log("updatedValue", updatedValue);
    setPhone(updatedValue)

  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(contactAdded(phone))
  }

  const handleEdit = (event) => {
    event.preventDefault()
    setSelected(-1)
    dispatch(contactEdit(selected,phone))
  }

  return (
    <div className="App" >
      <h4>counter {counter}</h4>
      <button onClick={() => dispatch(increment(3))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <hr />
      
      <div>{contactlist.map((item, index) => {
        if(selected === index){
          return (
            <form onSubmit={handleEdit}>
            <label>
              number: {"\n"}
              <input type="text" name="number" value={phone.number} onChange={handleChange} />
            </label>
            <br />
            <label>
              name: {"\n"}
              <input type="text" name="name" value={phone.name} onChange={handleChange} />
            </label>
            
            <div>
            <br />
              <input type="submit" value="Submit" />
            </div>
          </form>
          )
        }
        else{
        return (
          <div key={index}>
            <div>name: {item.name}</div> <div> number: {item.number}</div>
            <button onClick={() => dispatch(contactDelete(index))}>✘</button>
            <button onClick={() => {setSelected(index); setPhone(item)}}>✎</button>
            <hr></hr>
          </div>
        )}
      })}</div>

      <form onSubmit={handleSubmit}>
        
        
        <label>
          name {"\t"}
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <br />
        <label>
          number {"\t"}
          <input type="text" name="number" onChange={handleChange} />
        </label>
        <div>
        <br />
          <input type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
}

export default App;