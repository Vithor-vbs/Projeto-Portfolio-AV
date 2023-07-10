import React from "react";
import "./HeaderSection.css";

const HeaderSection = () => {

    return (
        <section className="header-section">
            <div className="header-container">
                <h1 className="header-main-name">Onveiv</h1>
                <div className="header-properties-box">
                    <a href="#" className="properties-name">projects</a>
                    <a href="#" className="properties-name">about us</a>
                    <a href="#" className="properties-name">careers</a>
                </div>
                <a href="#" className="properties-name">let's talk</a>
            </div>
        </section>
    )

};

export default HeaderSection;