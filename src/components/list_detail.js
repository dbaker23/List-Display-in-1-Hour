import React from 'react';

export const ListDetail = ( {details} ) => {
    return(
        <div id='list-detail'>
            <h1>{details.name}</h1>
            <p>{details.details}</p>
        </div>
    );
}