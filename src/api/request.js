/**
 * define common utility for api
 */
import axios from 'axios'
// import { Message } from 'element-ui'

// create an axios instance
const $http = axios.create({
  baseURL: process.env.BASE_API, // base_url for api
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'api-key': process.env.API_KEY
  }
})

// request interceptor
$http.interceptors.request.use(config => {
  console.log('api req : ', config)
  // Do something before request is sent
  return config
}, error => {
  // Do something with request error
  console.log(error)
  return Promise.reject(error)
})

// respone interceptor
$http.interceptors.response.use(resp => {
  console.log('api resp : ', resp)
  return resp.data
}, error => {
  console.log(error)
  /*
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  */
  return Promise.reject(error)
})

export default $http
