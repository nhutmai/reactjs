import React from 'react';
import PropTypes from 'prop-types';
import Todolist from './components/todolist';

Todofeatures.propTypes = {
    
};

function Todofeatures(props) {
    const List=[
        {
            id:1,
            do:'mai'
        },
        {
            id:2,
            do:'minh'
        },
        {
            id:3,
            do:'nhut'
        }
    ]
    return (
        <div>
            <h3>todo list</h3>
            <Todolist todolist={List}/>
        </div>
    );
}

export default Todofeatures;