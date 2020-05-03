import React from 'react'
import {connect} from 'react-redux'
import {TodoDelete} from '../actions'
let RemoveTodo = ({dispatch}) => {
    return (
        <div>
          <a onClick={e => {
            e.preventDefault()
            // dispatch(TodoDelete())
  
            console.log(dispatch(TodoDelete()));
          }}>Remove TODO</a>
        </div>
    )
  }
  
  RemoveTodo = connect()(RemoveTodo)
  
  export default RemoveTodo