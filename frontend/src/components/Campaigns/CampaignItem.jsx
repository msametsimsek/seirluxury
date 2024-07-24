import PropTypes from 'prop-types';
import "./CampaignItem.css";

const CampaignItem = ({ title, description, imageUrl, flexSize }) => {
  return (
    <div className="campaign-item" style={{ backgroundImage: `url(${imageUrl})`, flex: flexSize }}>
      <h3 className="campaign-title">
        {title}
      </h3>
      <p className="campaign-desc">
        {description}
      </p>
      <a href="/shop" className="btn btn-primary">
        Hepsini Gör
        <i className="bi bi-arrow-right"></i>
      </a>
    </div>
  );
};

CampaignItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  flexSize: PropTypes.number, // flexSize prop'i opsiyonel olabilir, number türünde
};

export default CampaignItem;
