import React from "react";

import "./Sign-Up.styles.scss";

export default function SignUp() {
  return (
    <main className="sign-up">
      <h1 className="sign-up__title">join the list</h1>
      <span className="sign-up__sub-title">Sign Up for</span>
      <span className="sign-up__sub-title">The IN-Dex Newsletter</span>
      <form className="form">
        <div className="form__group">
          <input
            type="text"
            name="email"
            className="form__group--input"
            placeholder="Enter Email Address"
          />
          <input
            type="submit"
            name="submit"
            className="form__group--submit"
            value="Next"
          />
        </div>
        <div className="policy">
          <input type="checkbox" name="policy" className="policy__box" />
          <blockquote className="policy__text">
            I agree to receive information from Interactive Nerd in accordance
            with the following <a href="#">Privacy Policy</a>
          </blockquote>
        </div>
      </form>
    </main>
  );
}
