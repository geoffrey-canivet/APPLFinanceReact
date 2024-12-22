import React, { useState } from "react";
import Accordions from "../Accordions/Accordions.jsx";
import NavPeriode from "../NavPeriode/NavPeriode.jsx";

const MainFinance = () => {


    return (
        <>
            <div className="ml-10 mr-10">
                <NavPeriode/>
                <Accordions/>
            </div>

        </>
    );
};

export default MainFinance;
