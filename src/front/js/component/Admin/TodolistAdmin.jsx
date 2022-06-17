import React, { useEffect, useState } from 'react'
import Form from '../Admin/to do list/Form.jsx'
import Header from '../Admin/to do list/Header.jsx'
import Layout from '../Admin/to do list/Layout.jsx'
import Lists from '../Admin/to do list/Lists.jsx'

const TodoListAdmin = () => {
  const [error, setError] = useState(null)
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  // saving the todos in browser storage to prevent loss of todos on refreshing tab
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const submitHandler = (e) => {
    e.preventDefault()

    if (todo.length < 5) {
      setError('Agrega al menos 5 letras!')
      return false
    }

    setTodos([{ id: Date.now(), title: todo, done: false }, ...todos])

    setTodo('')
    setError(null)
  }

  const delHandler = (todoId) => {
    if (window.confirm('Estás seguro?')) {
      const updatedTodos = todos.filter((item) => item.id !== todoId)

      setTodos(updatedTodos)
    }
  }

  const doneHandler = (todoId) => {
    const index = todos.findIndex((emp) => emp.id === todoId)
    const newTodo = [...todos]

    newTodo[index] = {
      id: todos[index].id,
      title: todos[index].title,
      done: !todos[index].done,
    }

    setTodos(newTodo)
  }

  return (
    <Layout >
      <Header />
      <Form
        error={error}
        value={todo}
        submit={submitHandler}
        onChange={(e) => setTodo(e.target.value)}
      />
      <hr className='border-light' />
      <Lists todos={todos} delHandler={delHandler} doneHandler={doneHandler} />
    </Layout>
  )
}

export default TodoListAdmin