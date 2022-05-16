import React from "react";
import PropTypes from "prop-types";

const CardDerecha = (props) => {
  return (
    <div className="card p-5 border-0 ">
      <div className="row g-0">
        <div className="col-md-8">
          <h5 className="card-title text-center">{props.title}</h5>
          <p className="card-text text-center">{props.text}</p>
        </div>
        <div className="col-md-4">
          <img src={props.img} className="card-img-top h-75" />
        </div>
      </div>
    </div>
  );
};
CardDerecha.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  linkbtn: PropTypes.string,
  textbtn: PropTypes.string,
};
export default CardDerecha;
