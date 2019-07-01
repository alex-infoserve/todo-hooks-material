import React, { memo } from 'react'
import ReactDOM from 'react-dom'

import Layout from './components/TodoLayout'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { useInputValue, useSelectValue, useTodos } from './custom-hooks'

import './style.css'

const TodoApp = memo(props => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue()
  const { selectValue, changeSelect, clearSelect } = useSelectValue()
  const { todos, addTodo, checkTodo, removeTodo } = useTodos()

  const clearInputAndAddTodo = _ => {
    clearInput()
    clearSelect()
    addTodo(inputValue, selectValue)
  }

  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
        selectValue={selectValue}
        onSelectChange={changeSelect}
      />
      <TodoList
        items={todos}
        onItemCheck={idx => checkTodo(idx)}
        onItemRemove={idx => removeTodo(idx)}
      />
    </Layout>
  )
})

ReactDOM.render(<TodoApp />, document.getElementById('root'))
