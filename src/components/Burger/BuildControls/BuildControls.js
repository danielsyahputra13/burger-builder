import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
        { label: "Salad", type: "salad" },
        { label: "Bacon", type: "bacon" },
        { label: "Cheese", type: "cheese" },
        { label: "Meat", type: "meat" },
    ];

const controlButtons = controls.map(control => {
    return <BuildControl key={control.label} label={control.label} />
})

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            {controlButtons}
        </div>
    )
};

export default buildControls;
