import PropTypes from "prop-types";

const SliderItem = ({ imageSrc }) => {
  return (
    <div className="slider-item fade">
      <div className="slider-image">
        <img src={imageSrc} className="img-fluid" alt="" />
      </div>
      <div className="container">
        <p className="slider-title">SEIR PERFUME: HER ANI EFSANELEŞTİRİN</p>
        <h2 className="slider-heading"> Her Şişe Bir Anı</h2>
        <a href="/shop" className="btn btn-lg btn-primary">
          Hemen Keşfet
        </a>
      </div>
    </div>
  );
};

export default SliderItem;

SliderItem.propTypes = {
  imageSrc: PropTypes.string,
};