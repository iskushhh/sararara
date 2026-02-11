import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [removeEnvelope, setRemoveEnvelope] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);

    // After slide animation finishes, remove envelope
    setTimeout(() => {
      setRemoveEnvelope(true);
    }, 1500); // matches slide transition time
  };

  return (
    <div className="home-container">
      {/* Envelope */}
      {!removeEnvelope && (
        <div className="envelope">
          {/* Pull String */}
          {!open && (
            <div className="string" onClick={handleOpen}>
              <div className="pull-handle"></div>
            </div>
          )}

          {/* Letter inside envelope */}
          <div
            className={`letter ${open ? "slide-out" : ""} ${removeEnvelope ? "centered" : ""}`}
          >
            <div className={`letter-content ${removeEnvelope ? "expand" : ""}`}>
              <h2>My Love,</h2>
              <p>
                I made something special just for you.
                Every moment with you feels like magic,
                and today I wanted to do something a little different…
              </p>

              <button
                className="next-btn"
                onClick={() => navigate("/memories")}
              >
                &raquo;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Letter alone after envelope removed */}
      {removeEnvelope && (
        <div
          className={`letter centered`}
        >
          <div className="letter-content expand">
            <h2>My dear Sararara,</h2>
            <p>
              You are always in my thoughts and prayers. I wonder how I cannot express my love for you in words. 
              The distance keeps us apart, but this Valentine's, I have a small token of love and appreciation for you.
              <br />
              With love, your Aloo
            </p>

            <button
              className="next-btn"
              onClick={() => navigate("/memories")}
            >
              &raquo;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
