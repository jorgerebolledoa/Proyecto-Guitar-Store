import React from "react";
import PropTypes from "prop-types";

const CardComparacion = (props) => {
  return (
    <div className="card border-0">
      <img src={props.img} className="card-img-top" />
      <div className="card-body">
        <select className="form-select" aria-label="Default select example">
          <option selected>{props.title}</option>
          <option value="1">{props.select}</option>
          <option value="2">{props.select2}</option>
          <option value="3">{props.select3}</option>
        </select>
        <p className="card-text">{props.text}</p>
      </div>
      <ul className="list-group list-group-flush border-0">
        <li className="list-group-item border-0 m-1">{props.item}</li>
        <li className="list-group-item border-0 m-1">{props.item2}</li>
        <li className="list-group-item border-0 m-1">{props.item3}</li>
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
  select: PropTypes.string,
  select2: PropTypes.string,
  select3: PropTypes.string,
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
