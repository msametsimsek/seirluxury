import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const CartItem = ({ cartItem }) => {
  const { removeFromCart } = useContext(CartContext);

  // Check if cartItem.price is a number
  const price = typeof cartItem.price === 'number' ? cartItem.price : 0;

  return (
    <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src={cartItem.img[0]} alt="" />
        <i
          className="bi bi-x delete-cart"
          onClick={() => removeFromCart(cartItem._id)}
        ></i>
      </td>
      <td>{cartItem.name}</td>
      <td>{price.toFixed(2)}₺</td>
      <td className="product-quantity">{cartItem.quantity}</td>
      <td className="product-subtotal">
        {(price * cartItem.quantity).toFixed(2)}₺
      </td>
    </tr>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    img: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;
