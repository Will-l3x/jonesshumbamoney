import axios from 'axios'


// Register user
const registerReciever = async (userData) => {
  const response = await axios.post("http://localhost:5000/api/create", userData)

  if (response.data) {
   console.log(response.data)
  }

  return response.data
}

const findReciever = async (userData) => {
    const response = await axios.get("http://localhost:5000/api/read", userData)
  
    if (response.data) {
     console.log(response.data)
    }
  
    return response.data
  }

  const updateReciever = async (userData) => {
    const response = await axios.post("http://localhost:5000/api/update", userData)
  
    if (response.data) {
     console.log(response.data)
    }
  
    return response.data
  }

  const deleteReciever = async (userData) => {
    const response = await axios.delete("http://localhost:5000/api/create", userData)
  
    if (response.data) {
     console.log(response.data)
    }
  
    return response.data
  }



const recipientService = {
 registerReciever,
 findReciever,
 updateReciever,
 deleteReciever
}

export default recipientService