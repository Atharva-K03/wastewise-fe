import React, { useContext } from "react";
import { Form, FormControl } from "react-bootstrap";
import { Minus } from "react-bootstrap-icons";
import "./styles/input-otp.css"; // Import the styles

/**
 * InputOTP component using React Bootstrap.
 * Represents the OTP input field with custom styling.
 */
function InputOTP({ className, containerClassName, ...props }) {
  return (
    <Form.Group className={`d-flex align-items-center gap-2 ${containerClassName}`}>
      <FormControl className={`disabled:cursor-not-allowed ${className}`} {...props} />
    </Form.Group>
  );
}

/**
 * InputOTPGroup component.
 * Wraps the group of OTP input slots.
 */
function InputOTPGroup({ className, ...props }) {
  return (
    <div className={`d-flex align-items-center ${className}`} {...props} />
  );
}

/**
 * InputOTPSlot component.
 * Represents a single slot in the OTP input.
 */
function InputOTPSlot({ index, className, ...props }) {
  const inputOTPContext = useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      className={`input-otp-slot ${isActive ? "active" : ""} ${className}`}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="fake-caret">
          <div className="caret-blink" />
        </div>
      )}
    </div>
  );
}

/**
 * InputOTPSeparator component.
 * Represents the separator between OTP input slots.
 */
function InputOTPSeparator({ ...props }) {
  return (
    <div className="input-otp-separator" role="separator" {...props}>
      <Minus />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
