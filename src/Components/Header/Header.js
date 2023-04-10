import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
function Header() {
    let Images_Array = ["https://thumbs.dreamstime.com/b/female-doctor-smiling-background-patient-bed-two-doctors-173319504.jpg", "https://sgmh.org/wp-content/uploads/2017/11/1.jpg"];
    return (
        <div className="header container-fluid">
            <div className="header_box row">
                <div className="col-lg-12 Info">
                    <h1>Welcome to MedHub</h1>
                    <p>Over a long period of Time we have helped Thousands of people to save Thousands</p>
                    <Link className="nav-link btn m-auto" to="/Get_Medicine">Search Medicine</Link>
                    {/* <button className="btn btn-dark">Search Medicine Now</button> */}
                </div>
            </div>
        </div>
    );

}

export default Header;