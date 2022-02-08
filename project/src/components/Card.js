import React from "react";

const Card =({
    title='',
    description='',
    buttonText='',
    link=''

})=>{
  return(
      <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <a className="card-button" href={link} target="blank"> {buttonText}</a>
      </div>
  )
}

export default Card;