import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { updateReciever, reset } from '../features/Recipients/recipientsSlice'
import Spinner from '../Components/Spinner'

function UpdateReciever() {
  const [formData, setFormData] = useState({
    fullname:'',
    city:'',
    phonenumber:'',
    email:'',
    IDnumber:''
  })

  const { fullname, city, phonenumber, email, IDnumber} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {  isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.recipient
  )

  useEffect(() => {
    if (isError) {
      toast.error("Failed to update reciever")
    }

    if (isSuccess ) {
      toast.success("Reciever Registered")
      navigate('/')
    }

    dispatch(reset())
  }, [ isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    
      const userData = {
        fullname,
        email,
        city,
        phonenumber,
        IDnumber
      }

      dispatch(updateReciever(userData))
   
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> 
        </h1>
        <p>Update</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='fullname'
              name='fullname'
              value={fullname}
              placeholder='Enter your full name'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='phonenumber'
              name='phonenumber'
              value={phonenumber}
              placeholder='Enter your phone number'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='city'
              name='city'
              value={city}
              placeholder='Enter the city'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='IDnumber'
              name='IDnumber'
              value={IDnumber}
              placeholder='Enter your ID number'
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Proceed
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default UpdateReciever