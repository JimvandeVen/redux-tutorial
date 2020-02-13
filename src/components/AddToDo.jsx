/* eslint-disable linebreak-style */
import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line import/no-mutable-exports
const AddTodo = ({ submitTodo }) => {
  let input

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          submitTodo(input.value)
          input.value = ''
        }}
      >
        <input
          ref={(node) => {
            input = node
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired,
}

export default AddTodo
