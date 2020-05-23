import React, { useRef } from "react";

import "./Input.styles.scss";

export default function Input({
  inputRef,
  inputTwoRef,
  currentStep,
  className,
}) {
  return (
    <>
      {currentStep === 1 && (
        <input
          type="text"
          name="email"
          className={`input ${className}`}
          placeholder="Enter Email Address"
          ref={inputRef}
        />
      )}
      {currentStep === 2 && (
        <>
          <div className="mini-container">
            <input
              type="text"
              name="email"
              className={`input ${className}`}
              placeholder="First Name"
              ref={inputRef}
            />
            <input
              type="text"
              name="email"
              className={`input ${className}`}
              placeholder="Last Name"
              ref={inputTwoRef}
            />
          </div>
        </>
      )}
    </>
  );
}
