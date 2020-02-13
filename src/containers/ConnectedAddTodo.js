/* eslint-disable linebreak-style */
import { connect } from 'react-redux'
import AddTodo from '../components/AddToDo'
import { addTodo } from '../actions/actions'

const mapDispatchToProps = (dispatch) => ({
  submitTodo: (todo) => dispatch(addTodo(todo)),
})
export default connect(null, mapDispatchToProps)(AddTodo)
