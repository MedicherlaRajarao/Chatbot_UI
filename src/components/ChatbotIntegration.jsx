import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ChatbotIntegration = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="chatbot-integration-container"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-4">Chatbot Integration</h2>
      <button className="primary-button mb-2" onClick={() => navigate("/success")}>
        Test Integration
      </button>
      <button className="secondary-button mb-2" onClick={() => navigate("/email-authentication")}>
        Email Instructions
      </button>
      <div className="mt-4">
        <button className="primary-button" onClick={() => navigate("/admin-panel")}>
          Explore Admin Panel
        </button>
        <button className="secondary-button ml-2" onClick={() => navigate("/chatbot-conversation")}>
          Start talking to your chatbot
        </button>
      </div>
    </motion.div>
  );
};

export default ChatbotIntegration;
