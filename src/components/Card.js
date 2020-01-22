import React from 'react';
import './Card.css';
const Card = (props) => {
        const {id,name,email} = props;
   
        return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow5'>
                <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
                <div>
                        <p className='f3'>{name}</p>
                        <p>{email}</p>
                </div>
        </div>
        );
    
}

export default Card;