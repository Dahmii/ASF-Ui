import React, { useEffect, useState, useRef } from "react";
import "./NotFound.css";
import { FaCross } from "react-icons/fa";

const NotFound = () => {
  const [activeBubble, setActiveBubble] = useState(null);
  const bubbleRefs = useRef([]);

  useEffect(() => {
    if (bubbleRefs.current.length === 0) {
      bubbleRefs.current = Array(10).fill(null);
    }
    const startTimeout = setTimeout(() => {
      showBubble(0);
    }, 4000);

    return () => clearTimeout(startTimeout);
  }, []);

  const showBubble = (index) => {
    if (index >= 10) {
      setTimeout(() => {
        showBubble(0);
      }, 3000);
      return;
    }

    setActiveBubble(index);
    setTimeout(() => {
      setActiveBubble(null);
      setTimeout(() => {
        showBubble(index + 1);
      }, 2000);
    }, 3700);
  };

  const getBubbleClassName = (bubbleIndex) => {
    const baseClass = `speech-bubble ${
      bubbleIndex % 2 === 0 ? "bubble-red" : "bubble-green"
    } bubble-${bubbleIndex + 1}`;
    return activeBubble === bubbleIndex ? `${baseClass} active` : baseClass;
  };

  return (
    <div className="notfound-container">
      <div className="column left">
        <div className={getBubbleClassName(0)}>Searching for hope?</div>
        <div className={getBubbleClassName(2)}>In need of a breakthrough?</div>
        <div className={getBubbleClassName(4)}>Do you need peace?</div>
        <div className={getBubbleClassName(6)}>Do you need strength?</div>
        <div className={getBubbleClassName(8)}>Are you feeling alone?</div>
      </div>
      <div className="column middle">
        <p className="error-line">have you lost your way?</p>
        <div className="error-code">404</div>
        <div className="error-message">
          <p>Quick! Find your way back to Jesus!</p>
          <p className="bible-text">
            "For all have sinned and fall short of the glory of God, being
            justified freely by His grace through the redemption that is in
            Christ Jesus."
          </p>
        </div>
        <button className="back-button">
          <a href="/">
            <FaCross className="cross-icon" /> Back to Jesus
          </a>
        </button>
      </div>
      <div className="column right">
        <div className={getBubbleClassName(1)}>Hope is found in Jesus.</div>
        <div className={getBubbleClassName(3)}>Jesus makes a way.</div>
        <div className={getBubbleClassName(5)}>
          Jesus is the Prince of Peace.
        </div>
        <div className={getBubbleClassName(7)}>
          Jesus gives strength to the weary.
        </div>
        <div className={getBubbleClassName(9)}>Jesus is always with you</div>
      </div>
    </div>
  );
};

export default NotFound;
