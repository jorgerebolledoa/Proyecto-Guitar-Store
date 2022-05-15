import React from "react";
import PropTypes from "prop-types";

const Carousel = (props) => {
  return (
    <div className="card ">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.img} className="card-img-top" />
        </div>
        <div className="col-md-8">
          <h5 className="card-title">{props.title} </h5>
          <p className="card-text">{props.text}</p>
          <a href={props.linkbtn} className="btn btn-primary">
            {props.textbtn}
          </a>
        </div>
      </div>
    </div>
  );
};
Carousel.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  linkbtn: PropTypes.string,
  textbtn: PropTypes.string,
};
export default Carousel;
