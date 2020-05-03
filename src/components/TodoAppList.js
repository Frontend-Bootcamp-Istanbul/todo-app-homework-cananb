import React from 'react';
import TodoAppListItem from "./TodoAppListItem";
import {connect} from "react-redux";

const TodoAppList = ({todos}) => {
    return (
        <div class="row">
        <div style={{backgroundColor:"#fff",height:"30px",width:"310px",margin:"auto",padding:"10px",borderRadius:"10px"}}>
            {
                todos.map((todo) => {
                    return <TodoAppListItem {...todo} />
                })
            }
        </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todoReducer
    }
}


export default connect(mapStateToProps)(TodoAppList);