import React, { useState, useEffect } from 'react';
import './Card.css';
import threedots from '../assets/threedots.svg';
import { Link } from 'react-router-dom';
import { supabase } from '../client';

const Card = (props) => {
  const [count, setCount] = useState(0);

  const updateCount = async (event) => {
    event.preventDefault();

    await supabase
      .from('chessclub') 
      .update({ betCount: count + 1 })
      .eq('id', props.id);

    setCount((count) => count + 1);
  }; 

  useEffect(() => {
    setCount(() => props.bet || 0);
  }, [props]);

  return (
    <div className="Card">
      <Link to={'edit/' + props.id}>
        <img className="moreButton" alt="edit button" src={threedots} />
      </Link>

      <h2 className="title">{props.title}</h2>
      <p>{props.caption}</p>

      {props.image && (
        <img src={props.image} alt="Post image" className="card-img" />
      )}

      {/* Uncomment this if you want a bet count button */}
      {/* <button className="betButton" onClick={updateCount}>
        👍 Bet Count: {count}
      </button> */}
    </div>
  );
};

export default Card;
