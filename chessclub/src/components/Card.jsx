// import React from 'react'
// import { useState, useEffect } from 'react'
// import './Card.css'
// import more from '../assets/more.png'
// import { Link } from 'react-router-dom'
// import { supabase } from '../client'

// const Card = (props) =>  {

//   const [count, setCount] = useState(0)
//   const updateCount = async (event) => {
//     event.preventDefault();

//     await supabase
//       .from('Posts')
//       .update({ betCount: count + 1})
//       .eq('id', props.id)
      
//     setCount((count) => count + 1);
//   }

//   useEffect(()=>{
//     setCount(()=>props.bet)
//   },[props])

//   return (
//       <div className="Card">
//           <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
//           <h2 className="title">{props.title}</h2>
//           {/* <h3 className="author">{"by " + props.author}</h3>
//           <p className="description">{props.description}</p>
//           <button className="betButton" onClick={updateCount} >👍 Bet Count: {count}</button> */}
//       </div>
//   );
// };

// export default Card;

// components/Card.jsx
import React from 'react';
import './Card.css'; // optional

const Card = ({ title, caption, image }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{caption}</p>
      {image && <img src={image} alt="Post visual" style={{ maxWidth: '300px' }} />}
    </div>
  );
};

export default Card;
// This component is a simple card that displays a title, caption, and an image.