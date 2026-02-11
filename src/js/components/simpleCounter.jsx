import React, { useState, useEffect } from "react";

const SimpleCounter = () => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const relojStyle = {
        width: "70px",      
        height: "100px", 
        fontSize: "50px",  
        background: "#1e1e1e",
        color: "white",
        border: "1px solid #333",
        borderRadius: "5px",
        margin: "5px", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    return (
        <div className="container-fluid p-4 bg-white d-flex justify-content-center align-items-center">
            
            <div className="bg-black p-4 rounded d-flex flex-wrap justify-content-center">
                
                <div style={relojStyle}>
                    <i className="far fa-clock"></i>
                </div>
                
                <div style={relojStyle}>
                    {Math.floor(seconds / 100000) % 10}
                </div>

                <div style={relojStyle}>
                    {Math.floor(seconds / 10000) % 10}
                </div>

                <div style={relojStyle}>
                    {Math.floor(seconds / 1000) % 10}
                </div>

                <div style={relojStyle}>
                    {Math.floor(seconds / 100) % 10}
                </div>

                <div style={relojStyle}>
                    {Math.floor(seconds / 10) % 10}
                </div>

                <div style={relojStyle}>
                    {Math.floor(seconds / 1) % 10}
                </div>

            </div>
        </div>
    );
};

export default SimpleCounter;