import React, { useState } from "react";
import { motion } from "framer-motion";

const EmailAuthentication = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");

  const sendOTP = () => {
    if (email) {
      setOtpSent(true);
      setMessage("OTP has been sent to your email!");
      // In a real application, send the OTP to the email address here.
    } else {
      setMessage("Please enter a valid email.");
    }
  };

  const verifyOTP = () => {
    if (otp === "123456") { // Hardcoded for demo purposes
      setMessage("OTP Verified! Instructions have been sent.");
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <motion.div
      className="email-auth-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-4">Email Authentication</h1>
      {!otpSent ? (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <button className="primary-button mt-4" onClick={sendOTP}>
            Send OTP
          </button>
        </>
      ) : (
        <>
          <p>{message}</p>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="input-field mt-4"
          />
          <button className="primary-button mt-4" onClick={verifyOTP}>
            Verify OTP
          </button>
        </>
      )}
      {message && <p className="message mt-2">{message}</p>}
    </motion.div>
  );
};

export default EmailAuthentication;
