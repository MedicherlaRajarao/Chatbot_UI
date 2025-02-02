import React, { useState } from "react";
import { motion } from "framer-motion";

const ChatbotConversation = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  // Dummy chatbot response logic
  const getBotResponse = (userMessage) => {
    if (userMessage.toLowerCase().includes("hello")) {
      return "Hi there! How can I assist you today?";
    }
    return "I'm still learning. Could you please rephrase your query?";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessages = [...messages, { sender: "User", text: inputMessage }];

    setMessages(newMessages);
    setInputMessage("");

    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      setMessages((prevMessages) => [...prevMessages, { sender: "Bot", text: botResponse }]);
    }, 500);
  };

  return (
    <motion.div
      className="chatbot-conversation-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-4">Chatbot Conversation</h2>

      <div className="chat-window">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-bubble ${message.sender === "User" ? "user" : "bot"}`}
          >
            <span>{message.text}</span>
          </div>
        ))}
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="input-field"
        />
        <button className="primary-button ml-2" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </motion.div>
  );
};

export default ChatbotConversation;
