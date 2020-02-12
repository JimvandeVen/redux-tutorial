/* eslint-disable linebreak-style */
import { createStore } from 'redux'
import todoApp from '../reducers/reducers'

const store = createStore(todoApp, window.STATE_FROM_SERVER)

export default store
