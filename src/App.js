import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, contactAdded, contactDeleted, contactEdited } from './action';
import { useState } from 'react'

function App() {
  const counter = useSelector(state => state.counter)
  const contactlist = useSelector(state => state.contactlist)
  const [phone, setPhone] = useState({})
  const dispatch = useDispatch();
  const [isEdite, setisEdite] = useState(false)
  const [index, setindex] = useState()

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
    { isEdite ? dispatch(contactEdited(index, phone)) : dispatch(contactAdded(phone)) }
    // event.target.name = ""
    // event.target.value = ""

    setisEdite(false)
  }

  const handleDelete = (index) => {
    dispatch(contactDeleted(index))
  }

  const handleEdited = (index) => {
    setisEdite(true)
    setindex(index)
  }

  return (
    <div>
      {contactlist.map((item, index) => {
        return (

          <div key={index} className="card" style={{ width: 18 + 'rem' }}>
            <div className="card-body">
              <h5 className="card-title">Name {item.name}</h5>
              <p className="card-text">Number {item.number} </p>
              <button onClick={() => handleDelete(index)} className="btn btn-primary">Delete</button>
              <button onClick={() => handleEdited(index)} className="btn btn-primary">Edit</button>
            </div>
          </div>
        )
      })}

      {!isEdite ?
        <form onSubmit={handelSubmit} className="m-auto w-50">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Name </label>
            <input type="text" name="name" className="form-control" id="exampleInputEmail1" onChange={handelChange} />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Phone Number </label>
            <input type="number" name="number" className="form-control" id="exampleInputPassword1" onChange={handelChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form> :

        <form onSubmit={handelSubmit} className="m-auto w-50">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Name </label>
            <input type="text" name="name" className="form-control" id="exampleInputEmail1" onChange={handelChange} />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Phone Number </label>
            <input type="number" name="number" className="form-control" id="exampleInputPassword1" onChange={handelChange} />
          </div>
          <button type="submit" className="btn btn-primary">Edit Contact</button>
        </form>}
    </div>
  );
}

export default App;
