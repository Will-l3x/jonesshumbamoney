import { FaSignInAlt, FaSignOutAlt, FaUser,FaBookMedical, FaSearchLocation } from 'react-icons/fa'

import {ImAidKit} from 'react-icons/im'
import {MdLocalPharmacy} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/Auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>Shumba Money</Link>
      </div>
      <ul>
        {user ? (
        <>
        
          <li>  <Link to='/search'>
                    <ImAidKit/> Add
                </Link>
          </li>
          <li>  <Link to='/search'>
                    <MdLocalPharmacy/> Update
                </Link>
          </li>
        <li>  <Link to='/search'>
                    <FaSearchLocation/> Search
                </Link>
          </li>
         <li>
              <Link to='/booking'>
              
                  <FaBookMedical /> Delete
               
                </Link>
          </li>
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout  
            </button>
          </li>
         
          </>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header