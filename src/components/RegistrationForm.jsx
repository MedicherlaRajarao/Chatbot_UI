import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGoogle } from "react-icons/fa";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/organization-setup");
  };

  return (
    <motion.div
      className="registration-form"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="input-field"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          required
        />
        <button type="submit" className="primary-button">
          Submit
        </button>
        <button
          type="button"
          className="google-button"
        >
          <FaGoogle className="inline mr-2" /> Continue with Google
        </button>
      </form>
    </motion.div>
  );
};

export default RegistrationForm;
