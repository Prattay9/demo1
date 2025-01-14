import React from "react";
import './Whatsapp.css';
import wp from '../images/Wp.webp';

const Whatsapp = () =>{
    return(
        <>
            <div className="wp-main">
                <a href="https://wa.me/917044927764" target="_blank"><img src={wp} alt="" style={{width:50, height:50}} /></a>
            </div>
        </>
    )
};

export default Whatsapp;