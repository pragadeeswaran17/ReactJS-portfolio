import React from 'react';
import "./PricingCard.css";
import { Link } from "react-router-dom";

function PricingCard() {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>-Basic-</h3>
                <span className='bar'></span>
                <p className='btc'> $50</p>
                <p>- 3Days -</p>
                <p> - 3Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='buy-btn'>
                    PUSCHASE NOW
                </Link>
            </div>

            <div className='card'>
                <h3>-Premium-</h3>
                <span className='bar'></span>
                <p className='btc'> $75</p>
                <p>- 3Days -</p>
                <p> - 5Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='buy-btn'>
                    PUSCHASE NOW
                </Link>
            </div>

            <div className='card'>
                <h3>-Business-</h3>
                <span className='bar'></span>
                <p className='btc'> $100</p>
                <p>- 5Days -</p>
                <p> - 8Pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='buy-btn'>
                    PUSCHASE NOW
                </Link>
            </div>

        </div>


    </div>
  )
}

export default PricingCard