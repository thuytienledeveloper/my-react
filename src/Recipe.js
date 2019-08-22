import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body text-center">
          <h1 className="display-4 text-center">{title}</h1>
          <ol className="card-text">
            {ingredients.map(ingredient => (
              <li>{ingredient.text}</li>
            ))}
          </ol>
          <p>{calories}</p>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
