import React from 'react';
import PropTypes from 'prop-types';

Todolist.propTypes = {
    todolist: PropTypes.array
};
Todolist.defaultProps = {
    todolist:[],
};

function Todolist({todolist}) {
    return (
        <ul>
            {todolist.map(todo =>(
                <li key={todo.id}>{todo.do}</li>
            )
            )}
        </ul>    
        
    );
}

export default Todolist;