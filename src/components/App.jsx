/* eslint-disable linebreak-style */
import React from 'react'
import Footer from './Footer'
import ConnectedAddTodo from '../containers/ConnectedAddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <ConnectedAddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)
export default App
