import React from "react"
import Layout from '../components/layout'
import { TextField, Button } from '@material-ui/core'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addTodo} from '../actions'
import TodoCard from '../components/todoCard'
import { makeStyles } from '@material-ui/core/styles';
import Ocean from '../images/Ocean.jpg'

const imageStyle = { 
  position: 'absolute', 
  top: 0, 
  bottom: 0, 
  left: 0,
  right: 0,
  width: '100%',
  height: '100%',
  zIndex: -3
}
const styles = makeStyles(theme=>({
  Input:{
    width: '50vw',
  }
}))

const IndexPage = () => {
  const todos = useSelector(state => state.todos)
  console.log(todos)
  const dispatch = useDispatch()
  const [data, setData] = useState({description: '', lat: 0, lng: 0})
  
  
  const classes = styles()
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
        <img src={Ocean} alt="Nature" style={imageStyle}></img>
        <form onSubmit={e => handleSubmit(e)}>
          <TextField
            className={classes.Input}
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
