import PropTypes from "prop-types";
import "./Navigation1.css";

const Navigation1 = ({ className = "" }) => {
  return (
    <div className={`navigation ${className}`}>
      <div className="line" />
      <div className="home-wrapper">
        <div className="home">
          <div className="wrapper-icon-home">
            <img
              className="icon-home"
              loading="lazy"
              alt=""
              src="/icon--home.svg"
            />
          </div>
        </div>
      </div>
      <div className="icons">
        <div className="guide">
          <img
            className="book-open-icon"
            loading="lazy"
            alt=""
            src="/bookopen.svg"
          />
        </div>
      </div>
      <div className="icons1">
        <div className="chat">
          <input className="message-square" type="checkbox" />
        </div>
      </div>
      <div className="chat-settings-wrapper">
        <div className="chat-settings">
          <div className="chat1">
            <img
              className="award-icon"
              loading="lazy"
              alt=""
              src="/award.svg"
            />
          </div>
          <div className="chat2">
            <img
              className="users-icon"
              loading="lazy"
              alt=""
              src="/users.svg"
            />
          </div>
          <div className="settings-button">
            <img
              className="settings-icon"
              loading="lazy"
              alt=""
              src="/settings.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
