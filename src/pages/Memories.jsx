import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Memories.css";

export default function Memories() {
  const navigate = useNavigate();

  // Typewriter
  const [text, setText] = useState("");
  const fullText =
    "    To my most beautiful girlfriend, I love you till my last breath, will you be my Valentine?";
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < fullText.length) {
        setText(prev => prev + fullText[indexRef.current]);
        indexRef.current +=1;
      } else {
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // No button state
  const [noPos, setNoPos] = useState({ top: "60%", left: "60%" });
  const [noOpacity, setNoOpacity] = useState(1);
  const noRef = useRef(null);

  const handleMouseMove = e => {
    if (!noRef.current) return;
    const rect = noRef.current.getBoundingClientRect();
    const distance = Math.hypot(
      e.clientX - (rect.left + rect.width / 2),
      e.clientY - (rect.top + rect.height / 2)
    );

    if (distance < 120) {
      // hide and move to a random position
      setNoOpacity(0);
      const top = Math.random() * 60 + 20; // 20% to 80%
      const left = Math.random() * 60 + 20;
      setNoPos({ top: `${top}%`, left: `${left}%` });
    } else {
      // show
      setNoOpacity(1);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Falling petals
  const petals = Array.from({ length: 30 });

  return (
    <div className="memories-container">
      {/* Falling petals */}
      {petals.map((_, i) => (
        <div
          key={i}
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      {/* Center content */}
      <div className="center-content">
        <p className="typewriter">{text}</p>

        <div className="button-group">
          <button
            className="yes-btn"
            onClick={() => navigate("/yes")}
          >
            Yes
          </button>

          <button
            ref={noRef}
            className="no-btn"
            style={{
              top: noPos.top,
              left: noPos.left,
              opacity: noOpacity,
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
