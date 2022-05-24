import React from "react";
import PropTypes from "prop-types";

const Cardlateral = (props) => {
  return (
    <div className="card p-5 border-0">
      <div className="row g-0">
        <div className="col-md-4 p-2">
          <img src={props.img} className="card-img-top " />
        </div>
        <div className="col-md-8 p-2">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href={props.linkbtn} className="btn btn-warning">
            {props.textbtn}
          </a>
        </div>
      </div>
    </div>
  );
};
Cardlateral.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  linkbtn: PropTypes.string,
  textbtn: PropTypes.string,
};
export default Cardlateral;
