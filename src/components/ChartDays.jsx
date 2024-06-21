import PropTypes from "prop-types";
import "./ChartDays.css";

const ChartDays = ({ className = "" }) => {
  return (
    <div className={`chart-days ${className}`}>
      <div className="weekday-parent">
        <div className="weekday">
          <div className="shape16" />
          <div className="shape17" />
        </div>
        <div className="weekend">
          <div className="short-day">
            <div className="m">M</div>
            <div className="t">T</div>
          </div>
        </div>
      </div>
      <div className="shape-group">
        <div className="shape18" />
        <div className="w-wrapper">
          <div className="w">W</div>
        </div>
      </div>
      <div className="active-day">
        <img className="active-icon" loading="lazy" alt="" src="/active.svg" />
        <div className="day-label">
          <div className="t1">T</div>
        </div>
      </div>
      <div className="shape-container">
        <div className="shape19" />
        <div className="f-wrapper">
          <div className="f">F</div>
        </div>
      </div>
      <div className="frame-parent">
        <div className="shape-parent1">
          <div className="shape20" />
          <div className="shape21" />
        </div>
        <div className="frame-wrapper">
          <div className="s-parent">
            <div className="s">S</div>
            <div className="s1">S</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ChartDays.propTypes = {
  className: PropTypes.string,
};

export default ChartDays;
