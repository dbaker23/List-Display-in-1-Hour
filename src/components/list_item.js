import React from 'react';

export const ListItem = ( {item, onItemSelect} ) => {
    return (
        <li id='item-list-box' onClick={ () => onItemSelect(item) }>
            <div className='item-list-detail'>
                {item.name} 
                <p>{item.details}</p>
            </div>
        </li>
    );
}