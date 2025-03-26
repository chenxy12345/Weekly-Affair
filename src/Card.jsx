import "./Card.css"
import React, { useState } from "react";


  export default function Card( {cards , children} ) {

    return (
        <section className="card-container">
            {cards.map((card) => (
                <div
                    className="card"
                    key={card.id}
                    style={{ backgroundImage: `url(${card.image})` }}
                >
                    <div className="card-content">
                        <h2>{card.title}</h2>
                        <p>{card.text}</p>
                        {children}
                    </div>
                </div>
            ))}
        </section>
    );
}
