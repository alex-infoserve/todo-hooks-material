import React, { memo } from 'react'
import ReactDOM from 'react-dom'

import Layout from './components/TodoLayout'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import {
  useInputValue,
  useDatePicker,
  useSelectValue,
  useTodos
} from './custom-hooks'

//import CustomizedSnackbars from './components/SnackbarMessage'

import './style.css'

//const showTheMessage = message => {
/* console.log(message)
  const lol = <CustomizedSnackbars />*/
//console.log(message)

//return <CustomizedSnackbars />
//}

const TodoApp = memo(props => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue()
  const { datepickerValue, changeDatepicker, clearDatepicker } = useDatePicker()
  const { selectValue, changeSelect, clearSelect } = useSelectValue()
  const { todos, addTodo, checkTodo, removeTodo } = useTodos()

  //const [message, setMessage] = useState({ type: '', message: '' })

  const clearInputAndAddTodo = _ => {
    clearInput()
    clearDatepicker()
    clearSelect()
    addTodo(inputValue, selectValue)
    //setMessage({ type: 'Success', message: 'This shit was added successfully' })
  }

  /* useEffect(() => {
    if (message.type !== '') {
      showTheMessage(message)
    }
  }, [message]) */

  return (
    <Layout>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
        datepickerValue={datepickerValue}
        onDatepickerChange={changeDatepicker}
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
