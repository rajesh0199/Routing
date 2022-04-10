import React from "react";
import { useLocation } from "react-router-dom";

function Otherpage(){
    const location = useLocation()
    return(
        <div>
            <h1>{location.state.name} and {location.state.last}</h1>
            Otherpage

        </div>
    )
}
export default Otherpage