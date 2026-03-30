import React from 'react';
import userImg from "../../../B13-A6-DigiTools-Platform/assets/products/user.png";

const CardAvter = () => {
    return (
        <div>
            <h1>Get Started in 3 Steps</h1>
            <p>Start using premium digital tools in minutes, not hours.</p>
            <div>
                <div className="card bg-base-100 w-96 shadow-sm">
  <div className="card-body">
    <img src={userImg} alt="" srcset="" />
    <h2 className="card-title">Create Account</h2>
    <p>Sign up for free in seconds. No credit card required to get started.</p>
  
  </div>
</div>
            </div>

        </div>
    );
};

export default CardAvter;