import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const SuccessScreen = () => {
  const [message] = useState("Your chatbot is now live!");
  const navigate = useNavigate();

  const buttons = [
    {
      label: "Explore Admin Panel",
      className: "primary-button",
      action: () => navigate("/admin-panel"),
    },
    {
      label: "Start talking to your chatbot",
      className: "secondary-button",
      action: () => navigate("/chatbot-conversation"),
    },
  ];

  const socialPlatforms = [
    { platform: "Facebook", icon: <FaFacebook />, url: "https://www.facebook.com" },
    { platform: "Twitter", icon: <FaTwitter />, url: "https://www.twitter.com" },
    { platform: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com" },
  ];

  return (
    <motion.div
      className="success-screen-container"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 150 }}
    >
      <h1 className="text-2xl font-bold">🎉 Integration Successful!</h1>
      <p className="text-base mt-2">{message}</p>
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`${button.className} mt-2`}
          onClick={button.action}
        >
          {button.label}
        </button>
      ))}

      {/* Social Media Share Buttons */}
      <div className="social-share-buttons mt-4 flex space-x-4 justify-center">
        {socialPlatforms.map((platform, index) => (
          <a
            key={index}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-button"
          >
            {platform.icon}
            <span className="ml-1">{platform.platform}</span>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default SuccessScreen;
