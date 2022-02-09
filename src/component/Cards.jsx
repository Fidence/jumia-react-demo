import React from 'react'

const cards = (props) => {
  return (
    <div>
      <div className="cards">
          <h3 className="card_title">{props.title}</h3>
          <p className="price">{props.price}</p>
          <p className="description">{props.description}</p>
        </div>
     
    </div>
  );
}

export default cards