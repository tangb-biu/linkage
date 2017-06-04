import axios from 'axios'

export default {
  getPatients (callback) {
    
    axios.get('/patient').then(res => {
      callback(res.data)
    })
  }
}