import React from "react";
import "../../../styles/Slider.css"
import { useInView } from "react-intersection-observer";

const Slider = ({ img, title, text, flipped, link }) => {
    const { ref, inView } = useInView({

        threshold: 0.4,
    })


    const renderContent = () => {

        if (!flipped) {
            return (
                <>
                    <a href={link} ><img src={img} alt="Img" className="slider__image" /></a>
                    <div className="slider__content">
                        <a href={link} className="a" >
                            <h1 className="slider__title">{title}</h1>
                            <p>{text}</p>
                        </a>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="slider__content">
                        <a href={link} className="a" >
                            <h1 className="slider__title">{title}</h1>
                            <p>{text}</p>
                        </a>
                    </div>
                    <a href={link} ><img src={img} alt="Img" className="slider__image" /></a>
                </>
            );
        }
    };

    return (
        <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
            {renderContent()}
        </div>
    );
};

export default Slider;