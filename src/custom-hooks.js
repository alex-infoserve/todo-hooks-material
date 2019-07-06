import { useState } from 'react'

//input text
export const useInputValue = (initialValue = '') => {
  const [inputValue, setInputValue] = useState(initialValue)

  return {
    inputValue,
    changeInput: event => setInputValue(event.target.value),
    clearInput: () => setInputValue(''),
    keyInput: (event, callback) => {
      if (event.which === 13 || event.keyCode === 13) {
        callback(inputValue)
        return true
      }

      return false
    }
  }
}

//selectbox
export const useSelectValue = (initialValue = []) => {
  const [selectValue, setSelectValue] = useState(initialValue)

  return {
    selectValue,
    changeSelect: event => setSelectValue(event.target.value),
    clearSelect: () => setSelectValue([])
  }
}

//date picker
export const useDatePicker = (initialValue = null) => {
  const [datepickerValue, setDatepicker] = useState(initialValue)

  return {
    datepickerValue,
    changeDatepicker: event => setDatepicker(event),
    clearDatepicker: () => setDatepicker(null)
  }
}

// funcoes
export const useTodos = (initialValue = []) => {
  const [todos, setTodos] = useState(initialValue)

  return {
    todos,
    addTodo: (text, selectValue, datepickerValue) => {
      if (text !== '') {
        if (!selectValue.length) selectValue = 'Normal'
        setTodos(
          todos.concat({
            text,
            selectValue,
            datepickerValue,
            checked: false
          })
        )
      }
    },
    checkTodo: idx => {
      setTodos(
        todos.map((todo, index) => {
          if (idx === index) {
            todo.checked = !todo.checked
          }

          return todo
        })
      )
    },
    removeTodo: idx => {
      setTodos(todos.filter((todo, index) => idx !== index))
    }
  }
}
