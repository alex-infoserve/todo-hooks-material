import React, { memo } from 'react'
import {
  ADD_TODO,
  TOOLTIP_TODO_INPUT_TEXT,
  TOOLTIP_TODO_DUE_DATE,
  TOOLTIP_TODO_SELECT_PRIORITY,
  TOOLTIP_BTN_ADD_TODO,
  TODO_PRIORITY,
  TODO_PRIORITY_1,
  TODO_PRIORITY_2,
  TODO_PRIORITY_3,
  BTN_ADD_TODO
} from '../assets/en_US'
import 'date-fns'
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
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'

const AddTodo = memo(props => (
  <Paper style={{ margin: 16, padding: 16 }}>
    <Grid container>
      <Grid xs={5} md={8} item style={{ paddingRight: 16 }}>
        <InputLabel htmlFor='add-todo-id'>{ADD_TODO}</InputLabel>
        <Tooltip title={TOOLTIP_TODO_INPUT_TEXT}>
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
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Tooltip title={TOOLTIP_TODO_DUE_DATE}>
          <Grid xs={5} md={1} item style={{ paddingRight: 16 }}>
            <KeyboardDatePicker
              margin='normal'
              id='mui-pickers-date'
              value={props.datepickerValue}
              onChange={props.onDatepickerChange}
              inputProps={{
                name: 'due-date-name',
                id: 'due-date-id'
              }}
              KeyboardButtonProps={{
                'aria-label': 'change date'
              }}
            />
          </Grid>
        </Tooltip>
      </MuiPickersUtilsProvider>
      <Grid xs={3} md={2} item style={{ paddingRight: 16 }}>
        <InputLabel htmlFor='priority-select-id'>{TODO_PRIORITY}</InputLabel>
        <Tooltip title={TOOLTIP_TODO_SELECT_PRIORITY}>
          <Select
            value={props.selectValue}
            onChange={props.onSelectChange}
            inputProps={{
              name: 'priority-select-name',
              id: 'priority-select-id'
            }}
            fullWidth
          >
            <MenuItem value={TODO_PRIORITY_1}>{TODO_PRIORITY_1}</MenuItem>
            <MenuItem value={TODO_PRIORITY_2}>{TODO_PRIORITY_2}</MenuItem>
            <MenuItem value={TODO_PRIORITY_3}>{TODO_PRIORITY_3}</MenuItem>
          </Select>
        </Tooltip>
      </Grid>
      <Grid xs={2} md={1} item>
        <Tooltip title={TOOLTIP_BTN_ADD_TODO}>
          <Button
            fullWidth
            color='secondary'
            variant='outlined'
            onClick={props.onButtonClick}
          >
            {BTN_ADD_TODO}
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  </Paper>
))

export default AddTodo
