import React from "react";
import "./IndependenceCard.css";

function IndependenceCard() {
  return (
    <div className="card-container">
      <div className="card">
        

        {/* Greeting Text */}
        <h1 className="happy">🇮🇳 Independence Day Celebration 🇮🇳</h1>
        <p className="message tagline">
          Let’s come together to honor our freedom and celebrate the spirit of India.
        </p>

        {/* Invitation Details */}
        <div className="details">
          <p><span className="emoji"></span> <strong>Date:</strong> 15th August 2025</p>
          <p><span className="emoji"></span> <strong>Time:</strong> 9:00 AM onwards</p>
          <p><span className="emoji"></span> <strong>Venue:</strong> LL Gifts & Greetings Hall</p>
        </div>

        {/* Taj Mahal */}
        <div className="taj">
          <img
            src="https://png.pngtree.com/png-clipart/20220303/original/pngtree-illustration-elements-of-the-famous-taj-mahal-png-image_7382544.png"
            alt="Taj Mahal"
            className="taj-img"
          />
        </div>

        {/* Closing */}
        <p className="closing">✨ Join us to celebrate with joy, pride & unity ✨</p>
      </div>
    </div>
  );
}

export default IndependenceCard;
