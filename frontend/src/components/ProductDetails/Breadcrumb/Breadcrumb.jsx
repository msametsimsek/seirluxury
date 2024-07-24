import PropTypes from "prop-types";
import "./Breadcrumb.css";

const Breadcrumb = ({ category, productName }) => {
  return (
    <div className="single-topbar">
      <nav className="breadcrumb">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">{category}</a>
          </li>
          <li>{productName}</li>
        </ul>
      </nav>
    </div>
  );
};

Breadcrumb.propTypes = {
  category: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
};

export default Breadcrumb;
