// import PropTypes from react explicitly to avoid retyping React before every instance below. see Todo.js for alternative usage.
import React, { PropTypes } from 'react'
import Todo from './Todo'

const ToDoList = ({ todos, onToDoClick }) =>
  <ul>
    {todos.map((todo) => {
      <Todo
        key={todo.id}
        {...todo} // everything else that came with todo object, pass them in unaltered
        onClick={onTodoClick} />
    })}
  </ul>

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onToDoClick: PropTypes.func.isRequired
}

export default Object.assign(ToDoList, propTypes)
