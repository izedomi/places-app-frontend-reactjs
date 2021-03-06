import React from 'react';
import Card from '../../../../shared/components/UIElement/Card/Card';
import Button from '../../../../shared/components/FormElements/Button/Button'

import PlaceItem from '../placeItem/PlaceItem';


import './PlaceList.css';



const PlaceList = (props) => {

    if(props.items.length === 0){

        return (
        
            <div className="place-list center">
                <Card>
                    <h2>No Places found</h2><br/>
                    <Button to="/places/new">Add A Place</Button>
                </Card>
            </div>
        );
    }

    return (
        <ul className='place-list'>
            {props.items.map(place => <PlaceItem key={place._id} place={place} onDelete={props.onDelete}/>)}
        </ul>
    )
     
 
}

export default PlaceList;