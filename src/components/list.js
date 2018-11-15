import React from 'react';
import { ListItem } from './list_item';

export const List = ( props ) => {
    const listItems = props.data.map( item => {
        const key = `${item.name}`;
        return(
            <ListItem 
                key={key}
                item={item}
                onItemSelect={props.onItemSelect} />
        );
    });

    return (
        <ul id='data-list'>
            {listItems}
        </ul>
    );    
}