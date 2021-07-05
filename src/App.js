import { useSelector, useDispatch } from 'react-redux'
import { contactAdded, contactDeleted, contactEdited } from './action';
import { useState } from 'react'
function App() {

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

  const handelEdit = (event) => {
  event.preventDefault()
  setSelected(-1)
  dispatch(contactEdited(selected, phone))
  }

  return (
    <div >
      <center>
        <h1>Contact List</h1>
        {contactlist.map((item, index) => {
          if (selected === index) {
            return (
              <form onSubmit={handelEdit}>
                <label> Name : <input type="text" name="name" class="form-label" value={phone.name} onChange={handelChange} /> </label>
                <br/>
                <label> Number : <input type="text" name="number" value={phone.number} onChange={handelChange} /> </label>
                <div>
                <br/>
                <button type="submit"> Save changes</button>
                </div>
              </form>
            )
          }
          else {
            return (
              <div key={index}>
              <label> Name : {item.name}</label> <br/> <label>Phone Number :{item.number} </label> <br/>
              <br></br>
              <button onClick={() => dispatch(contactDeleted(index))}> Delete </button>
              <button onClick={() => { setSelected(index); setPhone(item) }} >Edit </button>
     
              </div>
             
            )
           
          }
   
        })}
        <form onSubmit={handelSubmit}>
        <br></br>
        <label> Name : <input type="text" name="name" onChange={handelChange} /> </label>
          <br/>
          <label> Number : <input type="text" name="number" onChange={handelChange} /> </label>
          <div>
          <br/>
          <button type="submit" > Add to list</button>
          </div>
        </form>
      </center>
    </div>
  );
}
export default App;