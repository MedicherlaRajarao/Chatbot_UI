import React, { useState } from "react";
import { motion } from "framer-motion";

const AdminPanel = () => {
  const [greetingMessage, setGreetingMessage] = useState("Hello! How can I help you today?");
  const [chatbotStatus, setChatbotStatus] = useState(true);

  const handleSaveSettings = () => {
    alert(`Settings Saved!\nGreeting: ${greetingMessage}\nStatus: ${chatbotStatus ? "Active" : "Inactive"}`);
  };

  return (
    <motion.div
      className="admin-panel-container"
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <h1 className="text-2xl font-bold mb-4">Chatbot Admin Panel</h1>

      <div className="settings-section">
        <h2 className="text-lg font-semibold mb-2">Chatbot Settings</h2>

        <label className="block text-left">
          Greeting Message:
          <textarea
            value={greetingMessage}
            onChange={(e) => setGreetingMessage(e.target.value)}
            className="input-field mt-2"
          />
        </label>

        <div className="mt-4 flex items-center">
          <label htmlFor="chatbotStatus" className="mr-2">
            Chatbot Status:
          </label>
          <select
            id="chatbotStatus"
            value={chatbotStatus}
            onChange={(e) => setChatbotStatus(e.target.value === "true")}
            className="input-field"
          >
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
        </div>

        <button className="primary-button mt-4" onClick={handleSaveSettings}>
          Save Settings
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Actions</h2>
        <button className="secondary-button mt-2" onClick={() => alert("Viewing Chatbot Analytics")}>
          View Analytics
        </button>
        <button className="secondary-button mt-2" onClick={() => alert("Viewing Conversations")}>
          View Conversations
        </button>
      </div>
    </motion.div>
  );
};

export default AdminPanel;
