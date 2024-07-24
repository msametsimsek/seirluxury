import PropTypes from "prop-types";
import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../../../context/CartProvider";
import "./Info.css";

const Info = ({ singleProduct }) => {
  const quantityRef = useRef();
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const originalPrice = singleProduct.price.current;
  const discountPercentage = singleProduct.price.discount;

  // Calculate discounted price
  const discountedPrice =
    originalPrice - (originalPrice * discountPercentage) / 100;

  // Find the existing cart item for this product
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === singleProduct._id
  );

  // Use effect to update quantity input if cart item changes
  useEffect(() => {
    if (existingCartItem) {
      quantityRef.current.value = existingCartItem.quantity;
    }
  }, [existingCartItem]);

  const handleAddToCart = () => {
    let quantity = parseInt(quantityRef.current.value);
  
    // Ensure quantity is between 1 and 10
    if (quantity < 1 || isNaN(quantity)) {
      quantity = 1; // Default to 1 if invalid or less than 1
    } else if (quantity > 10) {
      quantity = 10; // Limit to 10 if more than 10
    }
  
    if (existingCartItem) {
      addToCart({
        ...existingCartItem,
        quantity: 1, // Add one item at a time
      });
    } else {
      addToCart({
        ...singleProduct,
        price: discountedPrice,
        quantity: 1, // Add one item at a time
      });
    }
  
    // Update the quantity input field with the adjusted value
    quantityRef.current.value = quantity;
  };
  
  const handleRemoveFromCart = () => {
    if (existingCartItem) {
      removeFromCart(singleProduct._id, 1); // Remove one item at a time
    }
  };
  
  return (
    <div className="product-info">
      <h1 className="product-title">{singleProduct.name}</h1>
      <div className="product-review">
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
        <span>2 reviews</span>
      </div>
      <div className="product-price">
        <s className="old-price">{originalPrice.toFixed(2)}₺</s>
        <strong className="new-price">{discountedPrice.toFixed(2)}₺</strong>
      </div>
      <div
        className="product-description"
        dangerouslySetInnerHTML={{ __html: singleProduct.description }}
      ></div>
      <form className="variations-form">
        <div className="variations">
          <div className="values">
            <div className="values-label">
              <span>Ürün Kodu: {singleProduct.productCode}</span>
            </div>
          </div>
          <div className="cart-button">
            <input
              type="text"
              defaultValue={existingCartItem ? existingCartItem.quantity : 1}
              min="1"
              id="quantity"
              readOnly
              ref={quantityRef}
            />
            <button
              className="btn btn-lg btn-primary"
              id="add-to-cart"
              type="button"
              onClick={handleAddToCart}
            >
              Sepete Ekle
            </button>
            <button
              className="btn btn-lg btn-danger"
              id="remove-from-cart"
              type="button"
              onClick={handleRemoveFromCart}
            >
              Sepetten Çıkar
            </button>
          </div>
          <div className="product-extra-buttons">
            <a href="#">
              <i className="bi bi-heart"></i>
              <span>Beğendiklerime Ekle</span>
            </a>
          </div>
        </div>
      </form>
      <div className="divider"></div>
      <div className="product-meta">
        <div className="product-sku">
          <span>Ürün Kodu:</span>
          <strong>{singleProduct.productCode}</strong>
        </div>
        <div className="product-categories">
          <span>Kategori:</span>
          <strong>{singleProduct._id}</strong>
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  singleProduct: PropTypes.object,
};

export default Info;
