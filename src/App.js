import { useSelector, useDispatch } from 'react-redux'
import { contactAdded ,contactDeleted, contactEdit } from './action';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


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
        dispatch(contactEdit(selected,phone))
      }
  return (
    <div >
    <center>
    <h1>Contact List</h1>
    <ul>{contactlist.map((item, index) => {
        if(selected === index){
          return (
            <form onSubmit={handelEdit}>
            <h3>
              number: 
              <input type="text" name="number" value={phone.number} onChange={handelChange} />
            </h3>
            <h3>
              name :
              <input type="text" name="name" value={phone.name} onChange={handelChange} />
            </h3>
            <div>
            <Button variant="outline-secondary" type="submit" value="Sumbit" >Update</Button>
            </div>
          </form>
          )
        }
        else{
        return (
          <div key={index}>
            <li>name {item.name} number {item.number}</li>
            <Button variant="outline-danger" onClick={() => dispatch(contactDeleted(index))} >Remove</Button>
            <Button variant="outline-warning" onClick={() => {setSelected(index); setPhone(item)}}>Update</Button>
          </div>
        )}
      })}</ul>
     <form onSubmit={handelSubmit}>
     <hr />
        <h3>
          number :
          <input type="text" name="number" onChange={handelChange} />
        </h3>
        <h3>
          name :
          <input type="text" name="name" onChange={handelChange} />
        </h3>
        <div>
        <Button variant="outline-info" type="submit" >Add new item</Button>
        </div>
      </form>
      </center>
      </div>
  );
}
export default App;

