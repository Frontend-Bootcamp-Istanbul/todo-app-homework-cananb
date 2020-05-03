import React from 'react';
import TodoAppHeader from "./TodoAppHeader";
import TodoAppList from "./TodoAppList";

class TodoApp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{background:"no-repeat,linear-gradient(#ff6161,#ff768c)",backgroundSize:"auto",height:"850px",fontFamily:"sans-serif"}}>
                <TodoAppHeader/>
                <TodoAppList />
            </div>
        );
    }
}

export default TodoApp