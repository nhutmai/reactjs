import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Albumlist from './components/albumlist';

Albumfeture.propTypes = {};

function Albumfeture(props) {
    const List=[
        {
            id:1,
            name:'nhac a',
            link:'https://avatar-ex-swe.nixcdn.com/playlist/2022/11/18/e/6/4/a/1668763448902_300.jpg'
        },
        {
            id:2,
            name:'nhac b',
            link:'https://avatar-ex-swe.nixcdn.com/playlist/2022/11/18/e/6/4/a/1668760057301_300.jpg'
        },
        {
            id:3,
            name:'nhac c',
            link:'https://avatar-ex-swe.nixcdn.com/playlist/2022/11/14/2/0/5/1/1668415364486_300.jpg'
        },
    ];
    const [count, setcount]= useState(0);
    return (
        <div>
            {count}
            <button onClick={() => setcount(x => x+1)}>tang</button>
            <button onClick={() => setcount(0)}>reset</button>
            <p>co the ban se thich</p>
            <Albumlist albumlist={List}/>
        </div>
    );
}

export default Albumfeture;