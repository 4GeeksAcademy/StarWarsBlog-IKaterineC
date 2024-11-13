import React from "react";

const CardVehicles = (props) => {
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + props.uid + ".jpg"} className="card-img-top" alt="vehicles" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
            </div>
        </div>
    )
}

export default CardVehicles