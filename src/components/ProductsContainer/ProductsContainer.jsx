import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { ProductCard } from '../ProductCard/ProductCard';
import "./container.css";

export const ProductsContainer = ({ addToCart, addWishlist }) => {

  const { stock } = useContext(UserContext)

  return (

    <div className="container">
      {stock.map((product) => {

        return (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            img={product.img}
            addToCart={addToCart}
            addWishlist={addWishlist}
          />
        )
      })}
    </div>
  )
};