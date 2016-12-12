import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodosList from '../containers/VisibleTodosList'

const App = () =>
  <div>
    <AddTodo />
    <VisibleTodosList />
    <Footer />
  </div>

export default App
