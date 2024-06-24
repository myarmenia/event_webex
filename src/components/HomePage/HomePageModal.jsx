import React, { useState, useEffect } from "react";
import "./Modal.css";
import './Responsev.css'

const HomePageModal = ({ show, handleClose }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    console.log(savedCount);
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <button onClick={handleClose} className="close-button">
          ×
        </button>
        <h2>You can order an</h2>
        <h2>invitation</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              id="name"
              className="form-control"
              required
              placeholder="Name*"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              id="phone"
              className="form-control"
              required
              placeholder="Phone Number*"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              className="form-control"
              required
              placeholder="Email*"
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              className="form-control"
              rows="1"
              required
              placeholder="Message*"
            ></textarea>
          </div>
          <div className="form-group">
            <input type="time" id="appt-time" name="appt-time" className="form-control" placeholder="Take a convenient time to contact you" />
          </div>
        
          <h4 style={{ marginLeft: "-300px" }}>Occasion</h4>
          <div className="form_group">
            <div className="form">
              <input type="radio" id="birthday" className="form" name="occasion" required />
              <label htmlFor="birthday">Birthday</label>
            </div>
            <div className="form">
              <input type="radio" id="graduation" className="form" name="occasion" required />
              <label htmlFor="graduation">Graduation Night</label>
            </div>
            <div className="form">
              <input type="radio" id="wedding" className="form" name="occasion" required />
              <label htmlFor="wedding">Wedding</label>
            </div>
            <div className="form">
              <input type="radio" id="birth" className="form" name="occasion" required />
              <label htmlFor="birth">Birth of a child</label>
            </div>
            <div className="form">
              <input type="radio" id="ivent" className="form" name="occasion" required />
              <label htmlFor="ivent">Event party</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePageModal;
