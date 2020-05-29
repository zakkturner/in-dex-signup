import React, { useRef } from "react";

import "./Input.styles.scss";

export default function Input({
  inputRef,
  inputTwoRef,
  currentStep,
  className,
  // handleChange,
  // inputText,
}) {
  return (
    <>
      {currentStep === 1 && (
        <input
          type="email"
          name="email"
          id="email"
          className={`input ${className}`}
          placeholder="Enter Email Address"
          ref={inputRef}
          // onChange={handleChange}
          // value={inputText}
          required
        />
      )}
      {currentStep === 2 && (
        <>
          <div className="mini-container">
            <input
              type="text"
              name="firstName"
              id="firstName"
              className={`input ${className}`}
              placeholder="First Name"
              ref={inputRef}
              required="true"
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              className={`input ${className}`}
              placeholder="Last Name"
              ref={inputTwoRef}
              required
            />
          </div>
        </>
      )}
    </>
  );
}
