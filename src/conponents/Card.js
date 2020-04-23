import React from 'react';
import "./Card.css";

const Card = ({id,username,email})=>{
    return (
            <div className="dib br3 pa3 ma2 grow tc bw2 shadow-5">
                <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
                <div>
                    <h2>{username}</h2>
                    <p>{email}</p>
                </div>
            </div>
    );
  
}



export default Card;