import React from "react";

export const CardPlanets = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={"https://starwars-visualguide.com/assets/img/planets/"+ props.uid + ".jpg" } className="card-img-top" alt="01" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
