import React, {useState} from 'react';

import './Tours.css';
import Package from './Package';

function Tours({tours, removeTour}){
    return(
        <div className='container'>
            <div className='title-box'>
                <h1 className='title'>Plan With IndiaTours</h1>
            </div>
            <div className='cards'>
                {
                    tours.map( (tour) => {
                        return(
                            <Package key={tour.id} {...tour} removeTour={removeTour}></Package>
                        );
                    }) 
                }
            </div>  
        </div>
    );
}

export default Tours;