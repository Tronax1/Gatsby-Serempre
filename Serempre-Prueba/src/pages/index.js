import React from "react"
import Layout from '../components/layout'
import { TextField, Typography} from '@material-ui/core'
import {useSelector, useDispatch} from 'react-redux'
import {addTodo} from '../actions'
import TodoCard from '../components/todoCard'
import { makeStyles } from '@material-ui/core/styles';
import useGeoLocation from '../Custom Hooks/useGeoLocation'
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
  },
  header:{
    textAlign: 'center',
    marginBottom: '20px'
  }
}))

const IndexPage = () => {
  const todos = useSelector(state => state.todos)
  const {data, setDescription, setDefault} = useGeoLocation()
  const dispatch = useDispatch()
  
  const classes = styles()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(data))
    console.log(data)
    setDefault()
  }
  const renderTodos = () => (
    todos.map((item, i) => (
      <TodoCard key={i} cardNum={i} notes={item.description}/>
    ))
  )

  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
        <div>
          <Typography variant="h3" className={classes.header}>TODOS</Typography>
          <img src={Ocean} alt="Nature" style={imageStyle}></img>
          <form onSubmit={e => handleSubmit(e)}>
            <TextField
              className={classes.Input}
              id="outlined-secondary"
              label="Task"
              variant="outlined"
              color="secondary"
              value={data.description}
              onChange={e => setDescription(e)}
            />
          </form>
          <div style={{width: '105%', height: '58vh', overflowY: 'auto'}}>{todos ? (renderTodos()): ('')}</div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
