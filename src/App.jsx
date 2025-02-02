import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm.jsx";
import OrganizationSetup from "./components/OrganizationSetup.jsx";
import ScrapedPages from "./components/ScrapedPagesTable.jsx";
import ChatbotIntegration from "./components/ChatbotIntegration.jsx";
import SuccessScreen from "./components/SuccessScreen.jsx";
import "./App.css";
import AdminPanel from "./components/AdminPanel.jsx";
import ChatbotConversation from "./components/ChatbotConversation.jsx";
import EmailAuthentication from "./components/EmailAuthentication.jsx";
function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/organization-setup" element={<OrganizationSetup />} />
          <Route path="/scraped-pages" element={<ScrapedPages />} />
          <Route path="/chatbot-integration" element={<ChatbotIntegration />} />
          <Route path="/success" element={<SuccessScreen />} />
          <Route path ="/admin-panel" element={<AdminPanel />}  />
          <Route path="/chatbot-conversation" element={<ChatbotConversation />} /> 
          <Route path="/email-authentication" element={<EmailAuthentication />} />      
        </Routes>
      </div>
    </Router>
  );
}

export default App;