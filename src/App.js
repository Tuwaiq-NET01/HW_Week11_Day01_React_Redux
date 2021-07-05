import { useSelector, useDispatch } from 'react-redux'
import { contactAdded,contactDeleted,contactEdited } from './action';
import { useState } from 'react'
import Form from './Form';

function App() {
  const contactlist = useSelector(state => state.contactlist)

  const [contact, setContact] = useState({})
  const [isEdit, setIsEdit] = useState(false)
  const [index, setindex] = useState()

  const [NameValue, setNameValue] = useState('')
  const [NumberValue, setNumberValue] = useState('')
  const dispatch = useDispatch();



  const handelChange = (event) => {
    const att = event.target.name
    const value = event.target.value
    const updatedValue = { ...contact }
    updatedValue[att] = value
    console.log("updatedValue", updatedValue);
    setContact(updatedValue)
  }


  const handelSubmit = (event) => {
    event.preventDefault()

    !isEdit ? dispatch(contactAdded(contact)) :
     dispatch(contactEdited({"index":index,"name":contact.name,"number":contact.number}))

     setIsEdit(false)
  }

  const DeleteContact=(index)=>{
    
   dispatch(contactDeleted(index))
  }

  const EditedContact=(index,item)=>{
    setindex(index)
    setNameValue(item.name)
    setNumberValue(item.number)
    setIsEdit(true)
   }

  return (
    <div >
    <center>

      <ul>{contactlist.map((item, index) => {
        return (
          <div key={index}>
            

            <h3>Name: <br/> {item.name}</h3>
            <h4>Number: <br/> {item.number}</h4>
            { !isEdit? <div><button  className="btn btn-danger" onClick={()=>DeleteContact(index)}>Delete Contact</button>
            <button className="btn btn-warning" onClick={()=>EditedContact(index,item)}>Edit Contact</button></div>:null}
          </div>
        )
      })}</ul>

      {!isEdit?  <Form   handelChange={handelChange} handelSubmit={handelSubmit} buttonString={"Add to the list"}/> :
      <Form NameValue={NameValue} NumberValue={NumberValue} handelChange={handelChange} handelSubmit={handelSubmit} buttonString={"Edit Contact"}/>}
     
     </center>
    </div>
  );
}

export default App;
