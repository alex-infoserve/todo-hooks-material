/* import React from 'react'
import ReactDOM from 'react-dom'
//import App from './App'
import TodoLayout from './TodoLayout'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<TodoLayout />, document.getElementById('root'))
serviceWorker.unregister()
 */
import './style.css'

import React, { memo } from 'react'
import ReactDOM from 'react-dom'

import { useInputValue, useTodos } from './custom-hooks'

import Layout from './components/TodoLayout'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

const TodoApp = memo(props => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue()
  const { todos, addTodo, checkTodo, removeTodo } = useTodos()

  const clearInputAndAddTodo = _ => {
    clearInput()
    addTodo(inputValue)
  }

  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
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
