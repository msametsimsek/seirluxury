import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const CartProgress = () => {
  const { cartSubtotal } = useContext(CartContext);

  const freeShippingThreshold = 1000;
  const remainingAmount = freeShippingThreshold - cartSubtotal;
  const progressBarWidth = Math.min((cartSubtotal / freeShippingThreshold) * 100, 100);

  return (
    <div className="free-progress-bar">
      <p className="progress-bar-title">
        {cartSubtotal >= freeShippingThreshold ? (
          <>Kargo bedava!</>
        ) : (
          <>Sepete <strong>{remainingAmount.toFixed(2)}₺</strong> değerinde ürün ekle, kargo bedeva olsun!</>
        )}
      </p>
      <div className="progress-bar">
        <span className="progress" style={{ width: `${progressBarWidth}%` }}></span>
      </div>
    </div>
  );
};

export default CartProgress;
