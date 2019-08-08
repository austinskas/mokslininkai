import React from "react";
import "./index.scss";

function ProductCard({
  name,
  image,
  description,
  price,
  currencySymbol,
  toggleFavorite,
  id,
  isFavorite,
  addToCart
}) {
  const className = isFavorite
    ? "ProductCard ProductCard__favorite"
    : "ProductCard";

  return (
    <div className={className}>
      <div className="ProductCard--image">
        <img className="image" alt={`product: ${name}`} src={image} />
      </div>
      <div className="ProductCard--info">
        <p> {name}</p>
        <p> {description}</p>
      </div>

      <div className="Product--cta">
        <p>
          <span>Price:</span> <span>{`${price}${currencySymbol}`}</span>
        </p>

        <div>
          <button type="button" onClick={() => toggleFavorite(id)}>
            <span role="img" aria-label="add to chart ilustrtion" />
            {isFavorite ? "x" : "💜"}
          </button>

          <button type="button" onClick={() => addToCart(id)}>
            <span role="img" aria-label="add to chart ilustrtion" />
            🛒
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
