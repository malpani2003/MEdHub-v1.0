import React from "react";
import { Component } from "react";
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer class="container-fluid bg-white mb-0 pb-1 text-white p-2 fixed-bottom">
                <p className="text-center text-dark">Terms & Condition | Privacy Policy | Copyright@2023.MedHub</p>
            </footer>
        );
    }
}
export default Footer