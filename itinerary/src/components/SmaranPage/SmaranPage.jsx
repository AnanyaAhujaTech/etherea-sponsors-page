// src/components/SmaranPage/SmaranPage.jsx
import React, { useState } from 'react';
import './SmaranPage.css';

const smaranCards = [
  {
    id: "01",
    title: "Opening Ceremony",
    desc: "A thousand lanterns light the night sky.",
    color: "rgba(184, 134, 11, 0.25)", // Gold
    glow: "rgba(255, 215, 0, 0.6)",
    image: "/assets/card1.jpg" // Placeholder path
  },
  {
    id: "02",
    title: "Rasa Dance",
    desc: "Performers embody emotion in flux.",
    color: "rgba(139, 69, 19, 0.25)", // Brown/Red
    glow: "rgba(205, 92, 92, 0.6)",
    image: "/assets/card2.jpg"
  },
  {
    id: "03",
    title: "Cosmic Music",
    desc: "Silent sunrise on mountain peaks.",
    color: "rgba(47, 79, 79, 0.25)", // Teal
    glow: "rgba(64, 224, 208, 0.6)",
    image: "/assets/card3.jpg"
  },
  {
    id: "04",
    title: "Art Installation",
    desc: "Interactive sound and light.",
    color: "rgba(25, 25, 112, 0.25)", // Midnight Blue
    glow: "rgba(65, 105, 225, 0.6)",
    image: "/assets/card4.jpg"
  },
  {
    id: "05",
    title: "Closing Night",
    desc: "Unity under stars, hearts intertwined.",
    color: "rgba(75, 0, 130, 0.25)", // Indigo/Purple
    glow: "rgba(138, 43, 226, 0.6)",
    image: "/assets/card5.jpg"
  },
];

const questions = [
  {
    q: "When and where is Etherea held?",
    a: "Etherea takes place on the grounds of the grand campus from Feb 25th to 27th. Follow the starlight path to the main auditorium.",
  },
  {
    q: "What should I expect from the experience?",
    a: "Expect an immersive blend of cultural heritage, modern art, and spirited competition. It is a journey for the senses.",
  },
  {
    q: "How can I participate as an artist?",
    a: "registrations are open on the 'Events' page. Submit your portfolio before Feb 20th for consideration.",
  },
  {
    q: "What are the accommodation options?",
    a: "We have partnered with nearby hostels and hotels to provide discounted stays for out-of-town participants.",
  },
  {
    q: "Is Etherea suitable for first-time festival goers?",
    a: "Absolutely. Our 'Smaran' guides will be available throughout the venue to help you navigate the experience.",
  },
];

export default function SmaranPage({ navHeight = "80px" }) {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="smaran-container" style={{ paddingTop: navHeight }}>
      
      {/* SECTION 1: SMARAN CARDS */}
      <section className="smaran-section">
        <div className="smaran-header">
          <h1 className="smaran-title">Smaran</h1>
          <h3 className="smaran-subtitle">A Retrospective</h3>
          <p className="smaran-text">Moments from our journey that transcend time</p>
        </div>

        <div className="cards-wrapper">
          {smaranCards.map((card, index) => (
            <div 
              key={card.id} 
              className="smaran-card"
              style={{ 
                '--card-bg': card.color, 
                '--card-glow': card.glow,
                '--i': index // For staggered animations if needed
              }}
            >
              <div className="card-inner">
                <span className="card-number">{card.id}</span>
                <div className="card-content">
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: QUESTIONS (FAQ) */}
      <section className="smaran-section">
        <div className="faq-header">
          <h1 className="smaran-title">Questions</h1>
          <p className="smaran-text">Everything you need to know</p>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => {
            // Map question color to smaran card colors (cycling if more questions than cards)
            const colorObj = smaranCards[index % smaranCards.length];
            
            return (
              <div 
                key={index} 
                className={`faq-item ${activeQuestion === index ? 'active' : ''}`}
                onClick={() => toggleQuestion(index)}
                style={{
                  '--faq-bg': colorObj.color,
                  '--faq-border': colorObj.glow
                }}
              >
                <div className="faq-question">
                  <span>{item.q}</span>
                  <span className="faq-icon">v</span>
                </div>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}