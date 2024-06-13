/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./Card.css";

const Card = (props) => {
  // console.log(props)
  return (
        <>
          <div className="card" key={props.id} onClick={() => {props.onClick()}}>
            <div className="cardImg">
              <img src={props.img} />
              <p>Episode {props.episode}</p>
            </div>
            <div className="cardName">{props.name}</div>
          </div>
        </>
      );
    }


export default Card;

