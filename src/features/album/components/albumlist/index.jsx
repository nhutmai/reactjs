import React from 'react';
import PropTypes from 'prop-types';
import Album from '../album';

Albumlist.propTypes = {
    albumlist: PropTypes.array.isRequired,
};

function Albumlist({albumlist}) {
    return (
        <ul className='albumList'>
            {albumlist.map(album=>(
                <li key={album.id}>
                    <Album album={album}/>
                </li>
            ))}
        
        </ul>
    );
}

export default Albumlist;