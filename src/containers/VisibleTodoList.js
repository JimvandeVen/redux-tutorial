/* eslint-disable linebreak-style */
import { connect } from 'react-redux'
import { toggleTodo, VisibilityFilters } from '../actions/actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed)
    default:
      throw new Error(`Unknown filter: ${filter}`)
  }
}

const mapStateToProps = (state) => ({ todos: getVisibleTodos(state.todos, state.visibilityFilter) })

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => {
    dispatch(toggleTodo(id))
  },
})

const getVisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default getVisibleTodoList
