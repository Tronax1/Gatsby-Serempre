import React from "react"
import Layout from '../components/layout'
import { TextField } from '@material-ui/core'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addTodo} from '../actions'
import TodoCard from '../components/todoCard'

const IndexPage = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const [data, setData] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(data))
    setData('')
  }
  const renderTodos = () => (
    todos.map((item, i) => (
      <TodoCard key={i} cardNum={i} notes={item}/>
    ))
  )
  return (
    
    <Layout>
      <div>
        <form onSubmit={e => handleSubmit(e)}>
          <TextField
            id="outlined-secondary"
            label="Task"
            variant="outlined"
            color="secondary"
            value={data}
            onChange={e => setData(e.target.value)}
          />
        </form>
        {todos ? (renderTodos()): ('')}
      </div>
    </Layout>
  )
}

export default IndexPage
