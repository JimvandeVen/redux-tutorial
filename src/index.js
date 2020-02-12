/* eslint-disable no-console */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import './styles/globalStyles.css'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions/actions'

render(<Provider store={store}>{}</Provider>, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

unsubscribe()
