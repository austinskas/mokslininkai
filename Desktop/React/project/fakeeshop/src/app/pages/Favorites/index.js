import React from "react";
import "./index.scss";
import { ProductCard } from "../../components";

function Favorites({ favorites, products = [], toggleFavorite, addToCart }) {
  const favoritesProducts = products.filter(product =>
    favorites.includes(product.id)
  );
  return (
    <div className="Favorites">
      {!favoritesProducts.length && <p>Ohhhh,no </p>}
      {products
        .filter(product => favorites.includes(product.id))
        .map(data => (
          <ProductCard
            {...data}
            key={data.id}
            toggleFavorite={toggleFavorite}
            addToCart={addToCart}
            isFavorite
          />
        ))}
    </div>
  );
}

export default Favorites;
