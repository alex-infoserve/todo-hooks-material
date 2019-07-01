import React, { memo } from 'react'

import {
  Chip,
  ListItem,
  Checkbox,
  Tooltip,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core'

import DeleteOutlined from '@material-ui/icons/DeleteOutlined'

const getChipColor = priority => {
  switch (priority) {
    case 'High':
      return 'primary'
    case 'Urgent':
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
    <ListItemText primary={props.text} />
    <ListItemSecondaryAction>
      <Tooltip title='Delete'>
        <IconButton aria-label='Delete Todo' onClick={props.onButtonClick}>
          <DeleteOutlined />
        </IconButton>
      </Tooltip>
    </ListItemSecondaryAction>
  </ListItem>
))

export default TodoListItem
