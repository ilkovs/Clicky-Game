import React from "react";
import "./nav.css";

const nav = props => (
    <div>
        <ul className="nav nav-justified">
            <li><a href="#">Animals Clicky Game</a></li>
            <li
                className={props.message.indexOf("incorrectly") !== -1 ?
                    "desc-incorrect" :
                    props.message.indexOf("correctly") !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "red"}}>{props.curScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default nav;
 