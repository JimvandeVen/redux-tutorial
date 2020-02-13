/* eslint-disable linebreak-style */

// action types
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// action creators
let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  // eslint-disable-next-line no-plusplus
  id: nextTodoId++,
  text,
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
})

// other constants

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}
