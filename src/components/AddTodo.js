import React, { memo } from 'react'
import {
  TextField,
  Paper,
  Button,
  Tooltip,
  Grid,
  Select,
  MenuItem,
  InputLabel
} from '@material-ui/core'

const AddTodo = memo(props => (
  <Paper style={{ margin: 16, padding: 16 }}>
    <Grid container>
      <Grid xs={5} md={9} item style={{ paddingRight: 16 }}>
        <InputLabel htmlFor='add-todo-id'>Add Todo</InputLabel>
        <Tooltip title='Add something to do :D'>
          <TextField
            value={props.inputValue}
            onChange={props.onInputChange}
            onKeyPress={props.onInputKeyPress}
            inputProps={{
              name: 'add-todo-name',
              id: 'add-todo-id'
            }}
            fullWidth
          />
        </Tooltip>
      </Grid>
      <Grid xs={3} md={2} item style={{ paddingRight: 16 }}>
        <InputLabel htmlFor='priority-select-id'>Priority</InputLabel>
        <Tooltip title='Select the priority of the task'>
          <Select
            value={props.selectValue}
            onChange={props.onSelectChange}
            inputProps={{
              name: 'priority-select-name',
              id: 'priority-select-id'
            }}
            fullWidth
          >
            <MenuItem value='Normal'>Normal</MenuItem>
            <MenuItem value='High'>High</MenuItem>
            <MenuItem value='Urgent'>Urgent</MenuItem>
          </Select>
        </Tooltip>
      </Grid>
      <Grid xs={2} md={1} item>
        <Tooltip title='Click here to add a task!'>
          <Button
            fullWidth
            color='secondary'
            variant='outlined'
            onClick={props.onButtonClick}
          >
            Add
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  </Paper>
))

export default AddTodo
