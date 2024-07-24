import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import "./ProductItem.css";

const ProductItem = ({ productItem }) => {
  const { addToCart, cartItems } = useContext(CartContext);
  const originalPrice = productItem.price.current;
  const discountPercentage = productItem.price.discount;

  const discountedPrice =
    originalPrice - (originalPrice * discountPercentage) / 100;

  const handleAddToCart = () => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem._id === productItem._id
    );

    const quantityToAdd = existingCartItem ? 1 : 1;

    addToCart({
      ...productItem,
      price: discountedPrice,
      quantity: quantityToAdd,
    });
  };

  return (
    <div className="product-item glide__slide glide__slide--active">
      <div className="product-image">
        <Link to={`/product/${productItem._id}`} className="product-link">
          <img src={productItem.img[0]} alt="" className="img1" />
          <img src={productItem.img[1]} alt="" className="img2" />
        </Link>
      </div>
      <div className="product-info">
        <Link to={`/product/${productItem._id}`} className="product-link">
          {productItem.name}
        </Link>
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <div className="product-prices">
          <strong className="new-price">{discountedPrice.toFixed(2)}₺</strong>
          <span className="old-price">{originalPrice.toFixed(2)}₺</span>
        </div>
        <span className="product-discount">-{productItem.price.discount}%</span>
        <div className="product-links">
          <button
            className="add-to-cart"
            onClick={handleAddToCart}
          >
            <i className="bi bi-basket-fill"></i>
          </button>
          <Link to={`/product/${productItem._id}`} className="product-link">
            <span>
              <i className="bi bi-eye-fill"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  productItem: PropTypes.object.isRequired,
};

export default ProductItem;
