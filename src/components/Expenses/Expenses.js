import React, { useState } from 'react';
import './Expenses.css'; // Import your CSS file

function Expenses() {
  const [activeTab, setActiveTab] = useState('Food Expenses');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 heading-edit">Expenses</h1>

      <div className="flex space-x-4">
        <button
          className={`tab-button ${activeTab === 'Food Expenses' ? 'active' : ''}`}
          onClick={() => handleTabClick('Food Expenses')}
        >
          Food Expenses
        </button>

        <button
          className={`tab-button ${activeTab === 'Hotel Expenses' ? 'active' : ''}`}
          onClick={() => handleTabClick('Hotel Expenses')}
        >
          Hotel Expenses
        </button>

        <button
          className={`tab-button ${activeTab === 'Other Expenses' ? 'active' : ''}`}
          onClick={() => handleTabClick('Other Expenses')}
        >
          Other Expenses
        </button>

        <button
          className={`tab-button ${activeTab === 'Travel Expenses' ? 'active' : ''}`}
          onClick={() => handleTabClick('Travel Expenses')}
        >
          Travel Expenses
        </button>
      </div>

      <div className={`tab-content ${activeTab === 'Food Expenses' ? 'active' : ''}`}>
        Content for Food Expenses
      </div>
      <div className={`tab-content ${activeTab === 'Hotel Expenses' ? 'active' : ''}`}>
        Content for Hotel Expenses
      </div>
      <div className={`tab-content ${activeTab === 'Other Expenses' ? 'active' : ''}`}>
        Content for Other Expenses
      </div>
      <div className={`tab-content ${activeTab === 'Travel Expenses' ? 'active' : ''}`}>
        Content for Travel Expenses
      </div>
    </div>
  );
}

export default Expenses;
