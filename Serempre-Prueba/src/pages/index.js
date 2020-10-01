import React from "react"
import Layout from '../components/layout'
import { TextField, Button } from '@material-ui/core'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addTodo} from '../actions'
import TodoCard from '../components/todoCard'

const IndexPage = () => {
  const todos = useSelector(state => state.todos)
  console.log(todos)
  const dispatch = useDispatch()
  const [data, setData] = useState({description: '', lat: 0, lng: 0})
  
  

  const handleSubmit = (e) => {
    e.preventDefault()
    //getGeoLocation()
    dispatch(addTodo(data))
    console.log(data)
    setData({
      description: '',
      lat: 0,
      lng: 0
    })
  }
  const renderTodos = () => (
    todos.map((item, i) => (
      <TodoCard key={i} cardNum={i} notes={item.description}/>
    ))
  )
  const getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  const getCoordinates = (position) => {
    setData(prevState => ({
      ...prevState,
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    }))
  }
  const handleLocationError = (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation.")
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable.")
          break;
        case error.TIMEOUT:
          alert("The request to get user location timed out.")
          break;
        case error.UNKNOWN_ERROR:
          alert("An unknown error occurred.")
          break;
        default:
          alert("An unknown error occurred")
      }
  }
  useEffect(getGeoLocation, [])

  return (
    
    <Layout>
      <div>
        <form onSubmit={e => handleSubmit(e)}>
          <TextField
            id="outlined-secondary"
            label="Task"
            variant="outlined"
            color="secondary"
            value={data.description}
            onChange={e => {
              const val = e.target.value
              setData((prevState,props)=>({
              ...prevState,
              description: val
            }))}}
          />
          <Button>N</Button>
        </form>
        {todos ? (renderTodos()): ('')}
      </div>
    </Layout>
  )
}

export default IndexPage
