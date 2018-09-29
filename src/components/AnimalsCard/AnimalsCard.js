import React from "react";
import "./AnimalsCard.css";

const AnimalsCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectAnimals(props.kind)}
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.kind} src={props.image} />
            </a>
        </div>
    </div>
);

export default AnimalsCard;