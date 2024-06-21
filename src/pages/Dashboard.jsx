import Navigation1 from "../components/Navigation1";
import Progress from "../components/Progress";
import Card from "../components/Card";
import ChartDays from "../components/ChartDays";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="left-sidebar">
        <div className="left-sidebar-container">
          <div className="left-sidebar-content">
            <div className="left-sidebar-items">
              <img
                className="left-sidebar-items-child"
                loading="lazy"
                alt=""
                src="/vector-89.svg"
              />
              <div className="e-wrapper">
                <a className="e">e</a>
              </div>
            </div>
          </div>
          <Navigation1 />
        </div>
        <div className="log-out-wrapper">
          <img
            className="log-out-icon"
            loading="lazy"
            alt=""
            src="/logout.svg"
          />
        </div>
      </div>
      <main className="content">
        <div className="cards">
          <div className="illustration">
            <div className="shape" />
            <div className="shapes">
              <div className="shape1" />
              <div className="shape2">
                <div className="shape-child" />
                <div className="shape-item" />
                <div className="shape-inner" />
              </div>
              <div className="shape3" />
              <div className="shape4" />
              <div className="shape5" />
            </div>
          </div>
          <div className="card-titles">
            <div className="title">{`UI/UX Beginer to Advance `}</div>
          </div>
        </div>
        <div className="cards1">
          <img
            className="illustration-icon"
            loading="lazy"
            alt=""
            src="/illustration.svg"
          />
          <div className="title-wrapper">
            <div className="title1">{`Basic Technic Illustration `}</div>
          </div>
        </div>
        <div className="cards2">
          <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
          <div className="title-container">
            <div className="title2">Logo Brand Identity</div>
          </div>
        </div>
        <div className="cards3">
          <img
            className="icon-movie"
            loading="lazy"
            alt=""
            src="/icon-movie.svg"
          />
          <div className="title-frame">
            <div className="title3">{`Movie and Animation `}</div>
          </div>
        </div>
        <div className="right-sidebar">
          <div className="profile">
            <div className="profile-container">
              <div className="profile-content">
                <div className="profile-image-container">
                  <div className="image" />
                </div>
                <div className="profile-title">
                  <a className="title4">Jonathan Lerid G</a>
                  <div className="title-container1">
                    <a className="title5">Singapore</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="stats">
              <div className="class">
                <div className="stats-titles">
                  <div className="title6">24</div>
                </div>
                <div className="class1">Class</div>
              </div>
              <div className="hours">
                <div className="frame-div">
                  <div className="title7">302</div>
                </div>
                <div className="total-hours">Total Hours</div>
              </div>
              <div className="friends">
                <div className="title-wrapper1">
                  <div className="title8">12</div>
                </div>
                <div className="friends1">Friends</div>
              </div>
            </div>
          </div>
          <Progress />
        </div>
        <h2 className="your-learning-journey-container">
          <span>Your Learning Journey</span>
          <span className="begins-here"> Begins Here!</span>
        </h2>
        <div className="search-bar">
          <div className="bg" />
          <img
            className="icon-search"
            loading="lazy"
            alt=""
            src="/icon--search.svg"
          />
          <a className="search">Search..</a>
        </div>
        <div className="cart">
          <img
            className="shopping-cart-icon"
            loading="lazy"
            alt=""
            src="/shoppingcart.svg"
          />
        </div>
        <div className="notif">
          <img className="bell-icon" loading="lazy" alt="" src="/bell.svg" />
        </div>
        <h2 className="title9">Popular Course</h2>
        <a className="title10">View All</a>
        <section className="course-cards">
          <Card
            szilgyiErik="Szilágyi Erik"
            label="12 Lessons"
            title="Logo Branding and design packaging Guideline"
          />
          <Card
            szilgyiErik="Orosz Boldizsár"
            label="10 Lessons"
            title="Movie Maker and music maker for your short movie"
            propMinWidth="107px"
          />
          <Card
            szilgyiErik="Hajdú Szilveszter"
            label="20 Lessons"
            title="Learn Basic UI/UX Design using Figma and Webflow"
            propMinWidth="118px"
          />
        </section>
        <div className="card">
          <div className="path-content">
            <div className="path-description">
              <b className="title11">Discount</b>
              <div className="path-subtitle">
                <b className="title12">{`20% `}</b>
              </div>
              <div className="path-action">
                <div className="title13">
                  <p className="for-beginer-member">for Beginer Member</p>
                  <p className="jan-2024">12-24 Jan 2024</p>
                </div>
                <button className="button">
                  <div className="label">Register Now</div>
                </button>
              </div>
            </div>
          </div>
          <div className="path-image">
            <div className="shape6" />
            <div className="shape-parent">
              <div className="shape7" />
              <img
                className="mask-group-icon"
                alt=""
                src="/mask-group@2x.png"
              />
              <div className="shape8" />
              <div className="shape9" />
            </div>
          </div>
        </div>
        <div className="activty-graph">
          <div className="label1">
            <h2 className="title14">Activity Graph</h2>
            <div className="chart-options">
              <img
                className="ic-more-icon"
                loading="lazy"
                alt=""
                src="/ic-more.svg"
              />
            </div>
          </div>
          <ChartDays />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
