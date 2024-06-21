import PropTypes from "prop-types";
import "./Progress.css";

const Progress = ({ className = "" }) => {
  return (
    <div className={`progress ${className}`}>
      <div className="progress-container">
        <div className="progress-content">
          <div className="progress-bar">
            <div className="progress-info">
              <h2 className="title15">Activity</h2>
              <div className="progress-date">
                <img
                  className="radio-button-icon"
                  alt=""
                  src="/radio-button.svg"
                />
                <div className="date-label">
                  <div className="today-2030">Today • 20:30</div>
                </div>
              </div>
            </div>
            <div className="more-icon">
              <img
                className="ic-more-icon1"
                loading="lazy"
                alt=""
                src="/ic-more.svg"
              />
            </div>
          </div>
          <div className="card1">
            <img
              className="illustration-icon1"
              loading="lazy"
              alt=""
              src="/illustration-1.svg"
            />
            <div className="card-title-container">
              <div className="title16">{`Basic Technic Illustration `}</div>
            </div>
            <div className="chevron-container">
              <img
                className="chevron-right-icon"
                loading="lazy"
                alt=""
                src="/chevronright.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="calendar">
        <div className="calendar-content">
          <div className="today">
            <img className="line-icon" alt="" src="/line.svg" />
            <img
              className="radio-button-icon1"
              alt=""
              src="/radio-button-1.svg"
            />
          </div>
          <div className="today-label">
            <div className="sun-20-jan">Sun, 20 Jan 2023 • 08:00</div>
          </div>
        </div>
      </div>
      <div className="monday">
        <div className="monday-content">
          <img
            className="radio-button-icon2"
            alt=""
            src="/radio-button-1.svg"
          />
          <div className="monday-label">
            <div className="mon-21-jan">Mon, 21 Jan 2023 • 13:00</div>
          </div>
        </div>
      </div>
      <div className="tuesday">
        <div className="tuesday-content">
          <div className="tuesday-button">
            <img
              className="radio-button-icon3"
              alt=""
              src="/radio-button.svg"
            />
            <div className="tuesday-label">
              <div className="tue-22-jan">Tue, 22 Jan 2023 • 12:00</div>
            </div>
          </div>
          <div className="event-card">
            <div className="card2">
              <div className="illustration1">
                <div className="shape10" />
                <div className="event-shapes">
                  <div className="shape11" />
                  <div className="shape12">
                    <div className="rectangle-div" />
                    <div className="shape-child1" />
                    <div className="shape-child2" />
                  </div>
                  <div className="shape13" />
                  <div className="shape14" />
                  <div className="shape15" />
                </div>
              </div>
              <div className="event-title-container">
                <div className="title17">{`UI/UX Beginer to Advance `}</div>
              </div>
              <img
                className="chevron-right-icon1"
                loading="lazy"
                alt=""
                src="/chevronright.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="button1">
        <div className="label2">Add Schedule</div>
      </button>
    </div>
  );
};

Progress.propTypes = {
  className: PropTypes.string,
};

export default Progress;
