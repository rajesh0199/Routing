import React from "react";
import { Link, Outlet} from "react-router-dom";

function Mobilelist(){
    return(
        <div>
            <Link className="phones" to="/products/mobile/iphone">Iphone</Link> <br/>
            <Link className="phones"  to="/products/mobile/poco">Poco</Link><br/>
            <Link className="phones"  to="/products/mobile/redmi">Redmi</Link>
            <Outlet/>

            {/* <ul>
                <li>Iphone</li>
                <li>Poco</li>
                <li>Realme</li>
                <li>Samsung</li>
                <li>Redmi</li>
            </ul> */}
        </div>
    )
}
export default Mobilelist 