import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const OrganizationSetup = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/scraped-pages");
  };

  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="organization-setup-container"
    >
      <h2 className="text-xl font-bold mb-4">Setup Organization</h2>
      <input type="text" placeholder="Company Name" className="input-field" />
      <input
        type="url"
        placeholder="Company Website URL"
        className="input-field"
      />
      <textarea
        placeholder="Company Description"
        className="input-field h-24"
      />
      <button className="primary-button" onClick={handleNext}>
        Next
      </button>
    </motion.div>
  );
};

export default OrganizationSetup;