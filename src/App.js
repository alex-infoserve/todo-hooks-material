import React, { useState } from 'react'

import {
  Fab,
  List,
  IconButton,
  Checkbox,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  TextField,
  Typography
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'

import './styles.css'

function App() {
  const [todo, setTodo] = useState('')

  const updateTodo = e => {
    setTodo(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className='todo-wrapper'>
      <div className='todo-header'>
        <Typography component='h1' variant='h2'>
          Todos
        </Typography>
      </div>
      <div className='todo-form'>
        <form onSubmit={handleSubmit}>
          <TextField
            value={todo}
            margin='normal'
            variant='outlined'
            onChange={updateTodo}
            className='todo-input'
            placeholder='Add a todo item'
          />
          <Fab
            color='secondary'
            onClick={handleSubmit}
            className='btn-add-todo'
            aria-label='Add'
          >
            <AddIcon />
          </Fab>
        </form>
      </div>
      <div className='todo-list-wrapper'>
        <div className='todo-list-items'>
          <List>
            <ListItem>
              <Checkbox tabIndex={-1} disableRipple />
              <ListItemText primary='testing' />
              <ListItemSecondaryAction>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  )
}

export default App
