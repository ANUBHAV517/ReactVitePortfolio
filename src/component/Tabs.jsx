import React, { useState } from 'react';
import TICTACTOE from './tic-tac-toe';
import ProductPage from '../pages/ProductPage';
// import './styles.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: 'Tic-Tac-Toe',
      content: <TICTACTOE />,
    },
    {
      id: 1,
      label: 'Product',
      content: (
        <ProductPage />
        // <div className="tab-content">
        //   <h2>Dashboard Overview</h2>
        //   <p>
        //     Welcome to your dashboard! Here you can see statistics, recent
        //     activities, and important metrics.
        //   </p>
        //   <div className="stats">
        //     <div className="stat-card">
        //       <h3>42</h3>
        //       <p>Projects</p>
        //     </div>
        //     <div className="stat-card">
        //       <h3>128</h3>
        //       <p>Tasks</p>
        //     </div>
        //     <div className="stat-card">
        //       <h3>95%</h3>
        //       <p>Completion</p>
        //     </div>
        //   </div>
        // </div>
      ),
    },
    {
      id: 2,
      label: 'Settings',
      content: (
        <div className="tab-content">
          <h2>Settings</h2>
          <p>Manage your application settings and preferences here.</p>
          <div className="settings-options">
            <label>
              <input type="checkbox" /> Enable notifications
            </label>
            <label>
              <input type="checkbox" /> Dark mode
            </label>
            <label>
              <input type="checkbox" /> Auto-save
            </label>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      label: 'Messages',
      content: (
        <div className="tab-content">
          <h2>Messages</h2>
          <p>You have 5 unread messages.</p>
          <div className="message-list">
            <div className="message-item">📧 New project assignment</div>
            <div className="message-item">📧 Team meeting tomorrow</div>
            <div className="message-item">📧 Code review requested</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-body">{tabs[activeTab].content}</div>
    </div>
  );
};

// Styles
const styles = `
  .tabs-container {
    margin: 50px auto;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .tabs-header {
    display: flex;
    background: #f5f5f5;
    border-bottom: 2px solid #e0e0e0;
    overflow-x:auto;
    overflow-y:hidden;

    scrollbar-width: thin;
  }

  .tabs-header::-webkit-scrollbar {
    height: 4px;
  }

  .tabs-header::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }

  .tab-button {
    flex: 1;
    min-width: 120px;
    padding: 16px 24px;
    background: transparent;
    border: none;
    font-size: 16px;
    font-weight: 500;
    color: #666;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    white-space: nowrap;
  }

  .tab-button:hover {
    background: #e8e8e8;
    color: #333;
  }

  .tab-button.active {
    color: #2563eb;
    background: #fff;
  }

  .tab-button.active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: #2563eb;
  }

  .tabs-body {
    padding: 30px;
    min-height: 300px;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .tab-content h2 {
    margin: 0 0 16px 0;
    color: #333;
    font-size: 24px;
  }

  .tab-content p {
    margin: 0 0 20px 0;
    color: #666;
    line-height: 1.6;
  }

  .tab-content ul {
    list-style: none;
    padding: 0;
  }

  .tab-content li {
    padding: 10px;
    background: #f9f9f9;
    margin-bottom: 8px;
    border-radius: 4px;
    color: #555;
  }

  .stats {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .stat-card {
    flex: 1;
    min-width: 150px;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 8px;
    text-align: center;
    color: white;
  }

  .stat-card h3 {
    margin: 0;
    font-size: 32px;
    font-weight: bold;
  }

  .stat-card p {
    margin: 8px 0 0 0;
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
  }

  .settings-options {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .settings-options label {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px;
    background: #f9f9f9;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;
  }

  .settings-options label:hover {
    background: #f0f0f0;
  }

  .settings-options input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .message-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .message-item {
    padding: 14px;
    background: #f0f7ff;
    border-left: 3px solid #2563eb;
    border-radius: 4px;
    color: #333;
  }

  @media (max-width: 768px) {
    .tabs-container {
      margin: 20px;
    }

    .tab-button {
      min-width: 100px;
      padding: 12px 16px;
      font-size: 14px;
    }

    .tabs-body {
      padding: 20px;
    }

    .stats {
      flex-direction: column;
    }

    .stat-card {
      min-width: 100%;
    }
  }
`;

// Inject styles
const styleSheet = document.createElement('style');
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Tabs;
