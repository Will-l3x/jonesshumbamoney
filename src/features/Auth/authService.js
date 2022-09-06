import axios from 'axios'

const API_URL = 'http://localhost:5000/api/login'
const API_URLL = 'http://localhost:5000/api/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URLL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL , userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService