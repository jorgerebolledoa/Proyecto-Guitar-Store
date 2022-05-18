import React from "react";
import PropTypes from "prop-types";

const CardComparacion = (props) => {
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.item}</li>
        <li className="list-group-item">{props.item2}</li>
        <li className="list-group-item">{props.item3}</li>
      </ul>
      <div className="card-body">
        <a href={props.linkbtn} className="card-link">
          {props.textbtn}
        </a>
        <a href={props.linkbtn2} className="card-link">
          {props.textbtn2}
        </a>
      </div>
    </div>
  );
};
CardComparacion.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  item: PropTypes.string,
  item2: PropTypes.string,
  item3: PropTypes.string,
  linkbtn: PropTypes.string,
  linkbtn2: PropTypes.string,
  textbtn: PropTypes.string,
  textbtn2: PropTypes.string,
};
export default CardComparacion;
