/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./Header.css";

const Header = (props) => {
  console.log(props);
  return (
    <div className="header">
      <div className="headerTitle">{props.currData.movieName}</div>
      <div className="headerContent">
        <div className="headerImg">
          <img src={props.currData.image} />
        </div>
        <div className="textContent">
          <div className="episode">Episode {props.currData.episode}</div>
          <div className="headerText">{props.currData.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
