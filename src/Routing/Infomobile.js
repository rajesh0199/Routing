import React from "react";
import {useParams, useNavigate} from "react-router-dom"
function Infomobile(){
    const {des} = useParams()
    const navigate = useNavigate()
    const fun = ()=>{
        alert("Please fill the from")

        navigate("/otherpage", {state:
            {
            name : "Rajesh",
            last : "Thumma"
            }
        })
    }
    return(
        <div>
            <h1>{des}</h1>
            <h1>Good To Use In Coming Generation</h1>
            <button onClick={fun}>Go To New page will satifying condition</button>
        </div>
    )
}
export default Infomobile