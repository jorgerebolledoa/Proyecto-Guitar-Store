import React from "react";
import "../../../styles/Slider.css"
import { useInView } from "react-intersection-observer";

const Slider = ({ img, title, text, flipped }) => {
    const { ref, inView } = useInView({

        threshold: 0.4,
    })

    const renderContent = () => {
        if (!flipped) {
            return (
                <>
                    <img src={img} alt="Travel" className="slider__image" />
                    <div className="slider__content">
                        <h1 className="slider__title">{title}</h1>
                        <p>{text}</p>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="slider__content">
                        <h1 className="slider__title">{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <img src={img} alt="Travel" className="slider__image" />
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