import React, { memo } from 'react'
import EditTodo from './EditTodo'
import {
  TODO_PRIORITY_1,
  TODO_PRIORITY_2,
  TODO_PRIORITY_3,
  TOOLTIP_BTN_EDIT_TODO,
  TOOLTIP_BTN_DELETE_TODO
} from '../assets/en_US'
import {
  Chip,
  ListItem,
  Checkbox,
  Tooltip,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core'
import EditOutlined from '@material-ui/icons/EditOutlined'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

const getChipColor = priority => {
  switch (priority) {
    case TODO_PRIORITY_1:
      return 'default'
    case TODO_PRIORITY_2:
      return 'primary'
    case TODO_PRIORITY_3:
      return 'secondary'
    default:
      return 'default'
  }
}

const TodoListItem = memo(props => (
  <ListItem divider={props.divider}>
    <Checkbox
      onClick={props.onCheckBoxToggle}
      checked={props.checked}
      disableRipple
    />
    <Chip
      size='small'
      color={getChipColor(props.selectValue)}
      label={props.selectValue}
      style={{ marginRight: 10 }}
    />
    <ListItemText
      primary={props.text}
      secondary={`${
        props.datepickerValue ? props.datepickerValue.toDateString() : ''
      }`}
    />
    <ListItemSecondaryAction>
      <Tooltip title={TOOLTIP_BTN_EDIT_TODO}>
        <IconButton onClick={() => EditTodo()}>
          <EditOutlined />
        </IconButton>
      </Tooltip>
      <Tooltip title={TOOLTIP_BTN_DELETE_TODO}>
        <IconButton onClick={props.onButtonClick}>
          <DeleteOutlined />
        </IconButton>
      </Tooltip>
    </ListItemSecondaryAction>
  </ListItem>
))

export default TodoListItem
