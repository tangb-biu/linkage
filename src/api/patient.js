import axios from 'axios'

export default {
  getProducts (callback) {
    
    axios.get('/patient').then(res => {
      callback(res.data)
    })
  }
}