import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ScrapedPages = () => {
  const navigate = useNavigate();
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching dynamic data from a server
    setTimeout(() => {
      const fetchedData = [
        { url: "https://example.com/page1", status: "Completed" },
        { url: "https://example.com/page2", status: "Pending" },
        { url: "https://example.com/page3", status: "In Progress" },
      ];
      setPages(fetchedData);
      setLoading(false);
    }, 1500); // Simulated delay for loading
  }, []);

  return (
    <motion.div
      className="scraped-pages-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-4">Scraped Pages</h2>

      {loading ? (
        <p className="text-center">Loading scraped pages...</p>
      ) : (
        <ul className="scraped-pages-list">
          {pages.map((page, index) => (
            <li key={index} className="page-item">
              <span>{page.url}</span>
              <span className={`status-${page.status.toLowerCase().replace(/\s/g, '-')}`}>
                {page.status}
              </span>
            </li>
          ))}
        </ul>
      )}

      <button
        className="primary-button mt-4"
        onClick={() => navigate("/chatbot-integration")}
      >
        Proceed to Integration
      </button>
    </motion.div>
  );
};

export default ScrapedPages;
