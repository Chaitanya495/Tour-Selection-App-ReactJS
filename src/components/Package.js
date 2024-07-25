import React, { useState } from 'react';

import './Package.css';

function Package(props) {

    let tourInfo = props.info;
    const [readmore, setReadmore] = useState(false);

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    const description = readmore? props.info : `${tourInfo.substring(0,200)}....`;

    return(
        <div className='card'>
            <div className='image-container'>
                <img src={props.image} className='image'/>
            </div>

            <div className='tour-info'>
                <div className='tour-details'>
                    <h4 className='tour-price'>{props.price}</h4>
                    <h4 className='tour-name'>{props.name}</h4>
                </div>

                <div className='description'>
                    {description}
                    <span className='read-more' onClick={readmoreHandler}>
                        {readmore? 'show less' : 'read more'}
                    </span>
                </div>
            </div>

            <button className='tour-rejection-btn' onClick={() => props.removeTour(props.id)}>
                Not Interested
            </button>
        </div>
    )
}

export default Package;