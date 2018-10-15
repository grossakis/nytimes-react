import React from "react";

const Card = props => (
  <div className="card">
    <div className="card-header">
      <h2>{props.heading}</h2>
    </div>
    <div className="card-body">
      <a href={props.url}>{props.url}</a>
      <p>{props.date}</p>
      <button
        onClick={props.saveArticle}
        className="btn btn-primary"
        value={props.value}
      >
        Save Article
      </button>
    </div>
  </div>
);

export default Card;
