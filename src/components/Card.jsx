import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ className = "", szilgyiErik, label, title, propMinWidth }) => {
  const szilgyiErikStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`card3 ${className}`}>
      <div className="image1">
        <div className="image2" />
        <div className="profile-info">
          <div className="profile1" />
          <div className="instructor-name">
            <div className="coach">Coach</div>
            <div className="szilgyi-erik" style={szilgyiErikStyle}>
              {szilgyiErik}
            </div>
          </div>
        </div>
      </div>
      <div className="course-stats">
        <div className="course-rating">
          <div className="rating-stars">
            <img
              className="icon-star"
              loading="lazy"
              alt=""
              src="/icon--star.svg"
            />
          </div>
          <div className="label3">4,8</div>
        </div>
        <div className="course-progress">
          <div className="progress-icon">
            <img
              className="clipboard-icon"
              loading="lazy"
              alt=""
              src="/clipboard@2x.png"
            />
          </div>
          <div className="label4">{label}</div>
        </div>
      </div>
      <div className="title18">{title}</div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  szilgyiErik: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default Card;
